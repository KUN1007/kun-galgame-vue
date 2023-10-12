export interface UserInfo {
  uid: number
  name: string
  avatar: string
  roles: number
  status: number
  time: number
  moemoepoint: number
  bio: string
  upvote: number
  like: number
  dislike: number
  daily_topic_count: number

  topic: number[]
  reply: number[]
  comment: number[]
}

// 用户更新签名
export interface UserUpdateBioRequestData {
  uid: number
  bio: string
}

// 用户更新邮箱
export interface UserUpdateEmailRequestData {
  uid: number
  email: string
  code: string
}

// 用户更新密码
export interface UserUpdatePasswordRequestData {
  uid: number
  oldPassword: string
  newPassword: string
}

export type UserInfoResponseData = KUNGalgameResponseData<UserInfo>

export type UserUpdateBioResponseData = KUNGalgameResponseData<{}>

export type UserGetUserEmailResponseData = KUNGalgameResponseData<{
  email: string
}>

export type UserGetEmailRestCodeResponseData = KUNGalgameResponseData<{}>

export type UserUpdateEmailResponseData = KUNGalgameResponseData<{}>

export type UserUpdatePasswordResponseData = KUNGalgameResponseData<{}>
