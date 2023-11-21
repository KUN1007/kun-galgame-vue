// Information about the topic author and the replied user
export interface TopicUserInfo {
  uid: number
  name: string
  avatar: string
  moemoepoint: number
}

// Information about the user being replied to
export interface TopicToUserInfo {
  uid: number
  name: string
}

// Response data for a topic
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
  replies: number[]
  status: number
  share: number[]
  category: string[]
  popularity: number
  upvote_time: number
}

// Request data for upvoting a topic, the upvote operation is irreversible
export interface TopicUpvoteTopicRequestData {
  tid: number
  to_uid: number
  time: number
}

// Request data for liking a topic
export interface TopicLikeTopicRequestData {
  tid: number
  to_uid: number
  isPush: boolean
}

// Request data for disliking a topic
export interface TopicDislikeTopicRequestData {
  tid: number
  to_uid: number
  isPush: boolean
}

// Request data for updating a topic
export interface TopicUpdateRequestData {
  tid: number
  uid: number
  title: string
  content: string
  tags: string[]
  category: string[]
}

// Response data format for a single topic
export type TopicDetailResponseData = KUNGalgameResponseData<TopicDetail>

// Response data format for upvoting a topic
export type TopicUpvoteTopicResponseData = KUNGalgameResponseData<{}>

// Response data format for liking a topic
export type TopicLikeTopicResponseData = KUNGalgameResponseData<{}>

// Response data format for disliking a topic
export type TopicDislikeTopicResponseData = KUNGalgameResponseData<{}>
