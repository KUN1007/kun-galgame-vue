/**
 * 这是用户对话题的操作，推，点赞，点踩等
 */

// 推，推操作不可撤销
export interface TopicUpvoteTopicRequestData {
  tid: number
  to_uid: number
}

// 点赞
export interface TopicLikeTopicRequestData {
  tid: number
  to_uid: number
  isPush: boolean
}

// 推话题响应数据的格式
export type TopicUpvoteTopicResponseData = KUNGalgameResponseData<{}>

// 点赞话题响应数据的格式
export type TopicLikeTopicResponseData = KUNGalgameResponseData<{}>
