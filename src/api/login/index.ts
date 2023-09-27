import { fetchPost } from '@/utils/request'
import type * as Login from './types/login'

const loginURLs = {
  login: `/login/login`,
  register: `/login/register`,
  verificationCode: `/auth/email/code`,
  refreshToken: `/auth/token/refresh`,
}

// 获取用户登录数据
export const postLoginDataApi = async (
  loginData: Login.LoginRequestData
): Promise<Login.LoginResponseData> => {
  const response = await fetchPost<Login.LoginResponseData>(
    loginURLs.login,
    loginData
  )
  return response
}

// 发送验证码，在注册时需要
export const sendVerificationCodeMailApi = async (
  email: Login.VerificationCodeMailRequestData
): Promise<void> => {
  await fetchPost<void>(loginURLs.verificationCode, email)
}

// 注册用户，注册成功直接登陆，返回登陆数据
export const postRegisterDataApi = async (
  registerData: Login.RegisterRequestData
): Promise<Login.LoginResponseData> => {
  const response = await fetchPost<Login.LoginResponseData>(
    loginURLs.register,
    registerData
  )
  return response
}

// token 失效时获取 refresh token
export const generateTokenByRefreshTokenApi =
  async (): Promise<Login.RefreshTokenResponseData> => {
    const response = await fetchPost<Login.RefreshTokenResponseData>(
      loginURLs.refreshToken
    )
    console.log(response)

    return response
  }
