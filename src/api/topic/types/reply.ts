import { TopicUserInfo, TopicToUserInfo } from './topic'

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
  // reply 所在的楼层
  floor: number
  // 被回复的 reply 所在的楼层
  to_floor: number
  r_user: TopicUserInfo
  to_user: TopicToUserInfo
  edited: number
  content: string
  upvotes: number[]
  upvote_time: number
  likes: number[]
  dislikes: number[]
  tags: string[]
  time: number
  cid: number[]
}

// 发表回复的请求数据
export interface TopicCreateReplyRequestData {
  tid: number
  to_uid: number
  to_floor: number
  tags: string[]
  content: string
}

// 推回复，推操作不可撤销
export interface TopicUpvoteReplyRequestData {
  tid: number
  to_uid: number
  rid: number
}

// 点赞回复
export interface TopicLikeReplyRequestData {
  tid: number
  to_uid: number
  rid: number
  isPush: boolean
}

// 点踩回复
export interface TopicDislikeReplyRequestData {
  tid: number
  to_uid: number
  rid: number
  isPush: boolean
}

// 单个话题回复响应数据的格式，返回的是多条回复数据，是一个数组
export type TopicReplyResponseData = KUNGalgameResponseData<TopicReply[]>

// 创建单个回复后返回的回复数据
export type TopicCreateReplyResponseData = KUNGalgameResponseData<TopicReply>

// 推回复响应数据的格式
export type TopicUpvoteReplyResponseData = KUNGalgameResponseData<{}>

// 点赞回复响应数据的格式
export type TopicLikeReplyResponseData = KUNGalgameResponseData<{}>

// 点踩回复响应数据的格式
export type TopicDislikeReplyResponseData = KUNGalgameResponseData<{}>
