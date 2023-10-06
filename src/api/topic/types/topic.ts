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
  category: string[]
  popularity: number
  upvote_time: number
}

// 推话题，推操作不可撤销
export interface TopicUpvoteTopicRequestData {
  tid: number
  to_uid: number
}

// 点赞话题
export interface TopicLikeTopicRequestData {
  tid: number
  to_uid: number
  isPush: boolean
}

// 点踩话题
export interface TopicDislikeTopicRequestData {
  tid: number
  to_uid: number
  isPush: boolean
}

// 更新话题的请求数据
export interface TopicUpdateRequestData {
  tid: number
  uid: number
  title: string
  content: string
  tags: string[]
  category: string[]
}

// 获取单个话题响应数据的格式
export type TopicDetailResponseData = KUNGalgameResponseData<TopicDetail>

// 推话题响应数据的格式
export type TopicUpvoteTopicResponseData = KUNGalgameResponseData<{}>

// 点赞话题响应数据的格式
export type TopicLikeTopicResponseData = KUNGalgameResponseData<{}>

// 点踩话题响应数据的格式
export type TopicDislikeTopicResponseData = KUNGalgameResponseData<{}>
