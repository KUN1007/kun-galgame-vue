import { fetchPost } from '@/utils/request'
import type * as Login from './types/login'

const loginURLs = {
  login: `/user/login`,
  register: `/user/register`,
  verificationCode: `/auth/email/code`,
  refreshToken: `/auth/token/refresh`,
}

// Get user login data
export const postLoginDataApi = async (
  loginData: Login.LoginRequestData
): Promise<Login.LoginResponseData> => {
  const response = await fetchPost<Login.LoginResponseData>(
    loginURLs.login,
    loginData
  )
  return response
}

// Send verification code, required during registration
export const sendVerificationCodeMailApi = async (
  email: Login.VerificationCodeMailRequestData
): Promise<void> => {
  await fetchPost<void>(loginURLs.verificationCode, email)
}

// Register a user, log in immediately upon successful registration, and return login data
export const postRegisterDataApi = async (
  registerData: Login.RegisterRequestData
): Promise<Login.LoginResponseData> => {
  const response = await fetchPost<Login.LoginResponseData>(
    loginURLs.register,
    registerData
  )
  return response
}

// Obtain a new token using a refresh token when the token is invalid
export const generateTokenByRefreshTokenApi =
  async (): Promise<Login.RefreshTokenResponseData> => {
    const response = await fetchPost<Login.RefreshTokenResponseData>(
      loginURLs.refreshToken
    )
    return response
  }
