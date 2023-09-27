// 全局消息组件（顶部）
import message from '@/components/alert/Message'
import { generateTokenByRefreshTokenApi } from '@/api'
// 操作 cookie 的函数
import { setToken } from '@/utils/cookie'
// 导入路由
import router from '@/router'

export async function onRequestError(response: Response) {
  if (response.status === 401) {
    // 尝试根据 refresh token 获取新的 token
    const accessTokenResponse = await generateTokenByRefreshTokenApi()

    // 成功获取到新的 token 则设置 token
    if (accessTokenResponse.code === 200 && accessTokenResponse.data.token) {
      setToken(accessTokenResponse.data.token)
      // 设置页面重新加载应用 token
      location.reload()
    } else {
      // 否则提示用户重新登陆
      message(
        'Login expired, please log in again.',
        '登陆过期，请重新登陆',
        'error'
      )
      router.push('/login')
    }
  }

  if (response.status === 404) {
    message(
      'Not Found, request address is incorrect.',
      '资源未找到，请求地址出错',
      'error'
    )
  }

  if (response.status === 500) {
    message('Internal Server Error', '服务器错误', 'error')
  }
}
