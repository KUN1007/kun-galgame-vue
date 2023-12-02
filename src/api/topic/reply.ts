import { fetchGet, fetchPost, fetchPut } from '@/utils/request'
// Function to convert an object to query parameters
import objectToQueryParams from '@/utils/objectToQueryParams'
import * as Reply from './types/reply'

// Get topic replies by tid
export async function getRepliesByTidApi(
  request: Reply.TopicReplyRequestData
): Promise<Reply.TopicReplyResponseData> {
  const queryParams = objectToQueryParams(request, 'tid')
  const url = `/topics/${request.tid}/replies?${queryParams}`

  const response = await fetchGet<Reply.TopicReplyResponseData>(url)

  return response
}

// Create a reply by tid
export async function postReplyByTidApi(
  request: Reply.TopicCreateReplyRequestData
): Promise<Reply.TopicCreateReplyResponseData> {
  const url = `/topics/${request.tid}/reply`

  const response = await fetchPost<Reply.TopicCreateReplyResponseData>(
    url,
    request
  )

  return response
}

// Upvote a reply
export async function updateReplyUpvoteApi(
  request: Reply.TopicUpvoteReplyRequestData
): Promise<Reply.TopicUpvoteReplyResponseData> {
  const queryParams = objectToQueryParams(request, 'tid')
  const url = `/topics/${request.tid}/reply/upvote?${queryParams}`

  const response = fetchPut<Reply.TopicUpvoteReplyResponseData>(url)

  return response
}

// Like a reply
export async function updateReplyLikeApi(
  request: Reply.TopicLikeReplyRequestData
): Promise<Reply.TopicLikeReplyResponseData> {
  const queryParams = objectToQueryParams(request, 'tid')
  const url = `/topics/${request.tid}/reply/like?${queryParams}`

  const response = fetchPut<Reply.TopicLikeReplyResponseData>(url)

  return response
}

// Dislike a reply
export async function updateReplyDislikeApi(
  request: Reply.TopicDislikeReplyRequestData
): Promise<Reply.TopicDislikeReplyResponseData> {
  const queryParams = objectToQueryParams(request, 'tid')
  const url = `/topics/${request.tid}/reply/dislike?${queryParams}`

  const response = fetchPut<Reply.TopicDislikeReplyResponseData>(url)

  return response
}

// Update a reply
export async function updateReplyApi(
  requestData: Reply.TopicUpdateReplyRequestData
): Promise<Reply.TopicUpdateReplyResponseData> {
  const url = `/topics/${requestData.tid}/reply`

  const response = fetchPut<Reply.TopicUpdateReplyResponseData>(
    url,
    requestData
  )

  return response
}
