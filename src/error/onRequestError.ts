// 全局消息组件（顶部）
import Message from '@/components/alert/Message'
import { generateTokenByRefreshTokenApi } from '@/api'
// 使用用户 store
import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'
// 导入路由
import router from '@/router'
// 导入已知错误处理函数
import { kungalgameErrorHandler } from './errorHandler'

interface ErrorResponseData {
  code: number
  message: string
}

/**
 * 相当于拦截器，先根据可预见的状态码识别常见错误
 * 再根据后端自定义的状态码识别错误，识别不了则抛出错误
 */
export async function onRequestError(response: Response) {
  // 根据状态码识别错误
  if (response.status === 401) {
    // 尝试根据 refresh token 获取新的 token
    const accessTokenResponse = await generateTokenByRefreshTokenApi()

    // 成功获取到新的 token 则设置 token
    if (accessTokenResponse.code === 200 && accessTokenResponse.data.token) {
      useKUNGalgameUserStore().setToken(accessTokenResponse.data.token)
      // 设置页面重新加载应用 token
      location.reload()
    } else {
      // 否则提示用户重新登陆
      Message(
        'Login expired, please log in again.',
        '登陆过期，请重新登陆',
        'error'
      )
      useKUNGalgameUserStore().removeToken()
      router.push('/login')
    }
    return
  }

  if (response.status === 404) {
    Message(
      'Not Found, request address is incorrect.',
      '资源未找到，请求地址出错',
      'error'
    )
    return
  }

  // 获取错误响应体数据
  const data: ErrorResponseData = await response.json()
  // 处理已知错误
  kungalgameErrorHandler(data.code)
}
