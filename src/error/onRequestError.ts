// 全局消息组件（顶部）
import message from '@/components/alert/Message'
// 导入路由
import router from '@/router'

export function onRequestError(response: Response) {
  if (response.status === 401) {
    message(
      'Login expired, please log in again.',
      '登陆过期，请重新登陆',
      'error'
    )
  }

  if (response.status === 404) {
    message(
      'Not Found, request address is incorrect.',
      '资源未找到，请求地址出错',
      'error'
    )
  }

  if (response.status === 500) {
    message('Internal Server Error', '服务器遇到了未处理的错误', 'error')
  }
}
