import { fetchPost } from '@/utils/request'
import type * as Login from './types/login'

// 获取用户登录数据
export const postLoginDataApi = async (
  loginData: Login.LoginRequestData
): Promise<Login.LoginResponseData> => {
  try {
    const response = await fetchPost<Login.LoginResponseData>(
      '/login/login',
      loginData
    )
    return response
  } catch (error) {
    alert(
      '\nERROR! Please check your username, mail or password!\n\n错误!请检查您的用户名,邮箱或者密码'
    )
    throw new Error(
      'Login Error! Please check your username, mail or password!'
    )
  }
}
