/**
 * 这是用户对话题的操作，推，点赞，点踩等
 */

// 点赞
export interface TopicLikeTopicRequestData {
  tid: number
  to_uid: number
  isPush: boolean
}

// 点赞话题响应数据的格式
export type TopicLikeTopicResponseData = KUNGalgameResponseData<{}>
