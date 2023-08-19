// 这是 KUNGalgame 用户登录请求数据的接口
export interface LoginRequestData {
  // 登录用户名
  username: string
  // 登录密码
  password: string
}

export interface LoginResponseData {
  success?: Number
  token?: string
  error?: Number
}
