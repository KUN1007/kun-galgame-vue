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

  topicCount: number[]
  replyCount: number[]
  commentCount: number[]
  likeTopic: number[]
  upvoteTopic: number[]
}

// 用户更新头像
export interface UserUpdateAvatarRequestData {
  uid: number
  avatar: FormData
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

// 获取用户的话题返回数据
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

// 获取用户发布回复返回数据
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

// 获取用户发布评论返回数据
export interface UserComment {
  tid: number
  content: string
}

// 获取用户发布的回复
export interface UserGetUserCommentRequestData {
  uid: number
  cidArray: number[]
}

// 用户验证邮箱重置密码,不根据密码重置
export interface UserResetPasswordByEmailRequestData {
  email: string
  code: string
  newPassword: string
}

export type UserInfoResponseData = KUNGalgameResponseData<UserInfo>

export type UserUpdateAvatarResponseData = KUNGalgameResponseData<{
  avatar: string
  avatarMin: string
}>

export type UserUpdateBioResponseData = KUNGalgameResponseData<{}>

export type UserGetUserEmailResponseData = KUNGalgameResponseData<{
  email: string
}>

export type UserGetEmailRestCodeResponseData = KUNGalgameResponseData<{}>

export type UserUpdateEmailResponseData = KUNGalgameResponseData<{}>

export type UserUpdatePasswordResponseData = KUNGalgameResponseData<{}>

export type UserGetUserTopicResponseData = KUNGalgameResponseData<UserTopic[]>

export type UserGetUserReplyResponseData = KUNGalgameResponseData<UserReply[]>

export type UserGetUserCommentResponseData = KUNGalgameResponseData<
  UserComment[]
>

export type UserResetPasswordByEmailResponseData = KUNGalgameResponseData<{}>
