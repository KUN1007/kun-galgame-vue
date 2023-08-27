// 话题主，回复主的信息
export interface TopicUserInfo {
  uid: number
  name: string
  avatar: string
  moemoepoint: number
}

// 被回复的用户信息
export interface TopicToUserInfo {
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
  edited: number
  user: TopicUserInfo
  rid: number[]
}

// 回复的请求数据
export interface TopicReplyRequestData {
  tid: number
  page?: number
  limit?: number
  sortField: string
  sortOrder: string
}

// 回复的数据
export interface TopicReply {
  rid: number
  tid: number
  r_user: TopicUserInfo
  to_user: TopicToUserInfo
  edited: string
  content: string
  likes: number
  dislikes: number
  tags: string
  cid: number[]
}

// 评论的数据
export interface TopicComment {}

// 获取单个话题响应数据的格式
export type TopicDetailResponseData = KUNGalgameResponseData<TopicDetail>

// 单个话题回复响应数据的格式
export type TopicReplyResponseData = KUNGalgameResponseData<TopicReply>
