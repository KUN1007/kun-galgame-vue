// Global message component (top)
import Message from '@/components/alert/Message'
import { generateTokenByRefreshTokenApi } from '@/api'
// Use the user store
import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'
// Import the router
import { createKUNGalgameRouter } from '@/router'
// Import known error handling functions
import { kungalgameErrorHandler } from './errorHandler'

interface ErrorResponseData {
  code: number
  message: string
}

const router = createKUNGalgameRouter()

/**
 * Acts as an interceptor, first recognizing common errors based on predictable status codes.
 * Then identifies errors based on custom backend status codes
 * If unable to recognize, it throws an error.
 */
export async function onRequestError(response: Response) {
  // Identify errors based on status codes
  if (response.status === 401) {
    // Attempt to obtain a new token using the refresh token
    const accessTokenResponse = await generateTokenByRefreshTokenApi()

    // If a new token is successfully obtained, set the token
    if (accessTokenResponse.code === 200 && accessTokenResponse.data.token) {
      useKUNGalgameUserStore().setToken(accessTokenResponse.data.token)
      // Set the page to reload with the new token applied
      if (typeof window !== 'undefined') {
        location.reload()
      }
    } else {
      // Otherwise, prompt the user to log in again
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

  // Get the error response data
  const data: ErrorResponseData = await response.json()
  // Handle known errors
  kungalgameErrorHandler(data.code)
}
