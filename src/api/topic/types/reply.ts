import { TopicUserInfo, TopicToUserInfo } from './topic'

// Request data for replying
export interface TopicReplyRequestData {
  tid: number
  page?: number
  limit?: number
  sortField: string
  sortOrder: string
}

// Reply data
export interface TopicReply {
  rid: number
  tid: number
  // The floor where the reply is located
  floor: number
  // The floor of the reply being replied to
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
  comment: number[]
}

// Request data for creating a reply
export interface TopicCreateReplyRequestData {
  tid: number
  to_uid: number
  to_floor: number
  tags: string[]
  content: string
}

// Upvote reply, the upvote operation is irreversible
export interface TopicUpvoteReplyRequestData {
  tid: number
  to_uid: number
  rid: number
}

// Like reply
export interface TopicLikeReplyRequestData {
  tid: number
  to_uid: number
  rid: number
  isPush: boolean
}

// Dislike reply
export interface TopicDislikeReplyRequestData {
  tid: number
  to_uid: number
  rid: number
  isPush: boolean
}

// Request data for updating a reply
export interface TopicUpdateReplyRequestData {
  tid: number
  rid: number
  content: string
  tags: string[]
}

// Response data format for a single topic reply, returning multiple reply data in an array
export type TopicReplyResponseData = KUNGalgameResponseData<TopicReply[]>

// Reply data returned after creating a single reply
export type TopicCreateReplyResponseData = KUNGalgameResponseData<TopicReply>

// Response data format for upvoting a reply
export type TopicUpvoteReplyResponseData = KUNGalgameResponseData<{}>

// Response data format for liking a reply
export type TopicLikeReplyResponseData = KUNGalgameResponseData<{}>

// Response data format for disliking a reply
export type TopicDislikeReplyResponseData = KUNGalgameResponseData<{}>

// Response data format for updating a reply
export type TopicUpdateReplyResponseData = KUNGalgameResponseData<{}>
