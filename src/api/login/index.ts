import { LoginData, LoginResponseData } from './types/login'
import { fetchPost } from '@/utils/request'

// 获取用户登录数据
export const postLoginDataApi = async (
  loginData: LoginData
): Promise<LoginResponseData> => {
  try {
    const response = await fetchPost<LoginResponseData>('/login', loginData)
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
