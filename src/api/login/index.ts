import { fetchPost } from '@/utils/request'
import type * as Login from './types/login'

// 获取用户登录数据
export const postLoginDataApi = async (
  loginData: Login.LoginRequestData
): Promise<Login.LoginResponseData> => {
  const response = await fetchPost<Login.LoginResponseData>(
    '/login/login',
    loginData
  )
  return response
}
