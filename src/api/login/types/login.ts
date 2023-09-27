// 这是 KUNGalgame 用户登录请求数据的接口
export interface LoginRequestData {
  // 登录用户名
  name: string
  // 登录密码
  password: string
}

// 注册请求数据的格式
export interface RegisterRequestData {
  name: string
  email: string
  password: string
  code: string
}

// 发送验证码请求数据格式
export interface VerificationCodeMailRequestData {
  email: string
}

// 登录响应数据的格式
export type LoginResponseData = KUNGalgameResponseData<{
  uid: number
  name: string
  avatar: string
  token: string
}>

// 获取 token 响应数据格式
export type RefreshTokenResponseData = KUNGalgameResponseData<{
  token: string
}>
