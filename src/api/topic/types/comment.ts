import { TopicUserInfo, TopicToUserInfo } from './topic'

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
  to_uid: number
  content: string
}

// 单个回复底下所有的评论数据，是一个数组
export type TopicCommentResponseData = KUNGalgameResponseData<TopicComment[]>

// 创建单个评论后返回的评论数据
export type TopicCreateCommentResponseData =
  KUNGalgameResponseData<TopicComment>
