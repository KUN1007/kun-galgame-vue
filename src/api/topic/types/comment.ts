import { TopicUserInfo, TopicToUserInfo } from './topic'

// Comment data
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

// Request data for liking a comment
export interface TopicLikeCommentRequestData {
  tid: number
  cid: number
  to_uid: number
}

// Request data for disliking a comment
export interface TopicDislikeCommentRequestData {
  tid: number
  cid: number
  to_uid: number
}

// Request data for creating a comment
export interface TopicCreateCommentRequestData {
  tid: number
  rid: number
  to_uid: number
  content: string
}

// An array containing all comments under a single reply
export type TopicCommentResponseData = KUNGalgameResponseData<TopicComment[]>

// Response data for liking a comment
export type TopicLikeCommentResponseData = KUNGalgameResponseData<{}>

// Response data for disliking a comment
export type TopicDislikeCommentResponseData = KUNGalgameResponseData<{}>

// Comment data returned after creating a single comment
export type TopicCreateCommentResponseData =
  KUNGalgameResponseData<TopicComment>
