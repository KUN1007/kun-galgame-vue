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

  useKUNGalgameUserStore().setToken(accessTokenResponse.data.token)

  const headers = {
    ...options.headers,
    Authorization: `Bearer ${useKUNGalgameUserStore().getToken()}`,
  }

  const response = await fetch(fullUrl, { ...options, headers })

  return response
}
