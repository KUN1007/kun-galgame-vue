// Interface for KUNGalgame user login request data
export interface LoginRequestData {
  // Username for login
  name: string
  // Password for login
  password: string
}

// Format for registration request data
export interface RegisterRequestData {
  name: string
  email: string
  password: string
  code: string
}

// Format for sending verification code request data
export interface VerificationCodeMailRequestData {
  email: string
}

// Format of the login response data
export type LoginResponseData = KUNGalgameResponseData<{
  uid: number
  name: string
  avatar: string
  moemoepoint: number
  roles: number
  token: string
}>

// Format of the response data for obtaining a token
export type RefreshTokenResponseData = KUNGalgameResponseData<{
  token: string
}>
