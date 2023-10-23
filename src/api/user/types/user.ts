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
  likeTopic: number[]
  upvoteTopic: number[]
}

// User updates avatar
export interface UserUpdateAvatarRequestData {
  uid: number
  avatar: FormData
}

// User updates bio (signature)
export interface UserUpdateBioRequestData {
  uid: number
  bio: string
}

// User updates email
export interface UserUpdateEmailRequestData {
  uid: number
  email: string
  code: string
}

// User updates password
export interface UserUpdatePasswordRequestData {
  uid: number
  oldPassword: string
  newPassword: string
}

// Data interface for user's topics
export interface UserTopic {
  tid: number
  title: string
  time: number
}

// Get topics published by a user
export interface UserGetUserTopicRequestData {
  uid: number
  tidArray: number[]
}

// Data interface for user's replies
export interface UserReply {
  tid: number
  content: string
  time: number
}

// Get replies published by a user
export interface UserGetUserReplyRequestData {
  uid: number
  ridArray: number[]
}

// Data interface for user's comments
export interface UserComment {
  tid: number
  content: string
}

// Get comments published by a user
export interface UserGetUserCommentRequestData {
  uid: number
  cidArray: number[]
}

// User resets password by email, not by providing the old password
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
