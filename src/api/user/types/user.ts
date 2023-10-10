export interface UserInfo {
  uid: number
  name: string
  avatar: string
  roles: string
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

export type UserInfoResponseData = KUNGalgameResponseData<UserInfo>
