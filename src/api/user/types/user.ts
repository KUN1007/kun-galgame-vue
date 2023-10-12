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
  like_topic: number[]
  upvote_topic: number[]
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

// 发布的话题返回数据
export interface UserTopic {
  tid: number
  title: string
  time: number
}

// 获取用户发布的话题
export interface UserGetUserTopicRequestData {
  uid: number
  tidArray: number[]
}

// 发布评论返回数据
export interface UserReply {
  tid: number
  content: string
  time: number
}

// 获取用户发布的回复
export interface UserGetUserReplyRequestData {
  uid: number
  ridArray: number[]
}

export type UserInfoResponseData = KUNGalgameResponseData<UserInfo>

export type UserUpdateBioResponseData = KUNGalgameResponseData<{}>

export type UserGetUserEmailResponseData = KUNGalgameResponseData<{
  email: string
}>

export type UserGetEmailRestCodeResponseData = KUNGalgameResponseData<{}>

export type UserUpdateEmailResponseData = KUNGalgameResponseData<{}>

export type UserUpdatePasswordResponseData = KUNGalgameResponseData<{}>

export type UserGetUserTopicResponseData = KUNGalgameResponseData<UserTopic[]>

export type UserGetUserReplyResponseData = KUNGalgameResponseData<UserReply[]>
