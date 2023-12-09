import Message from '@/components/alert/Message'
import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'
import router from '@/router'
import { kungalgameErrorHandler } from './errorHandler'

interface ErrorResponseData {
  code: number
  message: string
}

/**
 * Acts as an interceptor, first recognizing common errors based on predictable status codes.
 * Then identifies errors based on custom backend status codes
 * If unable to recognize, it throws an error.
 */
export const onRequestError = async (response: Response) => {
  if (response.status === 401) {
    Message(
      'Login expired, please log in again.',
      '登陆过期，请重新登陆',
      'error'
    )
    useKUNGalgameUserStore().removeToken()
    router.push('/login')
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

  const data: ErrorResponseData = await response.json()
  kungalgameErrorHandler(data.code)
}
