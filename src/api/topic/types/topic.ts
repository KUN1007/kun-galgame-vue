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
  likes: number[]
  dislikes: number[]
  time: number
  content: string
  upvotes: number[]
  tags: string[]
  edited: number
  user: TopicUserInfo
  rid: number[]
  status: number
  share: number[]
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
  // reply 所在的楼层
  floor: number
  // 被回复的 reply 所在的楼层
  to_floor: number
  r_user: TopicUserInfo
  to_user: TopicToUserInfo
  edited: number
  content: string
  upvote: number[]
  likes: number[]
  dislikes: number[]
  tags: string[]
  time: number
  cid: number[]
}

// 发表回复的请求数据
export interface TopicCreateReplyRequestData {
  tid: number
  r_uid: number
  to_uid: number
  to_floor: number
  tags: string[]
  content: string
}

// 评论的数据
export interface TopicComment {
  rid: number
  tid: number
  c_user: Omit<TopicUserInfo, 'moemoepoint'>
  to_user: TopicToUserInfo
  content: string
  likes: number[]
  dislikes: number[]
}

// 发表评论的请求数据
export interface TopicCreateCommentRequestData {
  tid: number
  rid: number
  c_uid: number
  to_uid: number
  content: string
}

// 获取单个话题响应数据的格式
export type TopicDetailResponseData = KUNGalgameResponseData<TopicDetail>

// 单个话题回复响应数据的格式，返回的是多条回复数据，是一个数组
export type TopicReplyResponseData = KUNGalgameResponseData<TopicReply[]>

// 创建单个回复后返回的回复数据
export type TopicCreateReplyResponseData = KUNGalgameResponseData<TopicReply>

// 单个回复底下所有的评论数据，是一个数组
export type TopicCommentResponseData = KUNGalgameResponseData<TopicComment[]>

// 创建单个评论后返回的评论数据
export type TopicCreateCommentResponseData =
  KUNGalgameResponseData<TopicComment>
