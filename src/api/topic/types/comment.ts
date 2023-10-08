import { TopicUserInfo, TopicToUserInfo } from './topic'

// 评论的数据
export interface TopicComment {
  cid: number
  rid: number
  tid: number
  c_user: Omit<TopicUserInfo, 'moemoepoint'>
  to_user: TopicToUserInfo
  content: string
  likes: number[]
  dislikes: number[]
}

// 点赞评论的请求数据
export interface TopicLikeCommentRequestData {
  tid: number
  cid: number
  to_uid: number
}

// 点踩评论的请求数据
export interface TopicDislikeCommentRequestData {
  tid: number
  cid: number
  to_uid: number
}

// 发表评论的请求数据
export interface TopicCreateCommentRequestData {
  tid: number
  rid: number
  to_uid: number
  content: string
}

// 单个回复底下所有的评论数据，是一个数组
export type TopicCommentResponseData = KUNGalgameResponseData<TopicComment[]>

// 点赞评论的响应数据
export type TopicLikeCommentResponseData = KUNGalgameResponseData<{}>

// 点踩评论的响应数据
export type TopicDislikeCommentResponseData = KUNGalgameResponseData<{}>

// 创建单个评论后返回的评论数据
export type TopicCreateCommentResponseData =
  KUNGalgameResponseData<TopicComment>
