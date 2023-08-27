// 话题主，回复主的信息
export interface UserInfo {
  uid: number
  name: string
  avatar: string
  moemoepoint: number
}

// 被回复的用户信息
export interface ToUserInfo {
  uid: number
  name: string
}

// 话题的返回数据
export interface TopicDetail {
  tid: number
  title: string
  views: number
  likes: number
  dislikes: number
  replies: number
  time: number
  content: string
  upvotes: number
  tags: string[]
  edited: string
  user: UserInfo
  rid: number[]
}

// 回复的数据
export interface TopicReply {
  rid: number
  tid: number
  r_user: UserInfo
  to_user: ToUserInfo
  edited: string
  content: string
  likes: number
  dislikes: number
  tags: string
  cid: number[]
}
