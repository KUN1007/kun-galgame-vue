import { fetchGet, fetchPost, fetchPut } from '@/utils/request'
// 将对象转为请求参数的函数
import objectToQueryParams from '@/utils/objectToQueryParams'
import * as Reply from './types/reply'

// 根据话题 tid 获取话题回复
export async function getRepliesByPidApi(
  request: Reply.TopicReplyRequestData
): Promise<Reply.TopicReplyResponseData> {
  const queryParams = objectToQueryParams(request, 'tid')
  const url = `/topics/${request.tid}/replies?${queryParams}`

  const response = await fetchGet<Reply.TopicReplyResponseData>(url)

  return response
}

// 根据 tid 创建一个回复
export async function postReplyByPidApi(
  request: Reply.TopicCreateReplyRequestData
): Promise<Reply.TopicCreateReplyResponseData> {
  const url = `/topics/${request.tid}/reply`

  const response = await fetchPost<Reply.TopicCreateReplyResponseData>(
    url,
    request
  )

  return response
}

// 推
export async function updateReplyUpvoteApi(
  request: Reply.TopicUpvoteReplyRequestData
): Promise<Reply.TopicUpvoteReplyResponseData> {
  const queryParams = objectToQueryParams(request, 'tid')
  const url = `/topics/${request.tid}/reply/upvote?${queryParams}`

  const response = fetchPut<Reply.TopicUpvoteReplyResponseData>(url)

  return response
}

// 点赞
export async function updateReplyLikeApi(
  request: Reply.TopicLikeReplyRequestData
): Promise<Reply.TopicLikeReplyResponseData> {
  const queryParams = objectToQueryParams(request, 'tid')
  const url = `/topics/${request.tid}/reply/like?${queryParams}`

  const response = fetchPut<Reply.TopicLikeReplyResponseData>(url)

  return response
}

// 点踩
export async function updateReplyDislikeApi(
  request: Reply.TopicDislikeReplyRequestData
): Promise<Reply.TopicDislikeReplyResponseData> {
  const queryParams = objectToQueryParams(request, 'tid')
  const url = `/topics/${request.tid}/reply/dislike?${queryParams}`

  const response = fetchPut<Reply.TopicDislikeReplyResponseData>(url)

  return response
}
