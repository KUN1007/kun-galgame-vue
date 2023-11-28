import Message from '@/components/alert/Message'
import router from '@/router'
import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'
import { generateTokenByRefreshTokenApi } from '@/api'
import type { FetchOptions } from './request'

export const requestRefresh = async (
  fullUrl: string,
  options: FetchOptions
) => {
  const accessTokenResponse = await generateTokenByRefreshTokenApi()

  if (accessTokenResponse.code === 200 && accessTokenResponse.data.token) {
    useKUNGalgameUserStore().setToken(accessTokenResponse.data.token)
  } else {
    Message(
      'Login expired, please log in again.',
      '登陆过期，请重新登陆',
      'error'
    )
    useKUNGalgameUserStore().removeToken()
    router.push('/login')
  }

  const headers = {
    ...options.headers,
    Authorization: `Bearer ${useKUNGalgameUserStore().getToken()}`,
  }

  const response = await fetch(fullUrl, { ...options, headers })

  return response
}
