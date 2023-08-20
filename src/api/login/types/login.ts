// 这是 KUNGalgame 用户登录请求数据的接口
export interface LoginRequestData {
  // 登录用户名
  name: string
  // 登录密码
  password: string
}

// 登录相应数据的格式
export type LoginResponseData = KUNGalgameResponseData<{
  uid: number
  avatar: string
  token: string
  refreshToken: string
}>
