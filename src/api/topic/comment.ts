import { fetchGet, fetchPut, fetchPost } from '@/utils/request'
// Function to convert an object to query parameters
import objectToQueryParams from '@/utils/objectToQueryParams'

import * as Comment from './types/comment'

// Get all comments under a reply
export async function getCommentsByReplyRidApi(
  tid: number,
  rid: number
): Promise<Comment.TopicCommentResponseData> {
  try {
    const url = `/topics/${tid}/comment?rid=${rid}`

    const response = await fetchGet<Comment.TopicCommentResponseData>(url)

    return response
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch comments')
  }
}

// Like a comment
export async function updateCommentLikeApi(
  request: Comment.TopicLikeCommentRequestData
): Promise<Comment.TopicLikeCommentResponseData> {
  const queryParams = objectToQueryParams(request, 'tid')
  const url = `/topics/${request.tid}/comment/like?${queryParams}`

  const response = fetchPut<Comment.TopicLikeCommentResponseData>(url)

  return response
}

// Dislike a comment
export async function updateCommentDislikeApi(
  request: Comment.TopicDislikeCommentRequestData
): Promise<Comment.TopicDislikeCommentResponseData> {
  const queryParams = objectToQueryParams(request, 'tid')
  const url = `/topics/${request.tid}/comment/dislike?${queryParams}`

  const response = fetchPut<Comment.TopicDislikeCommentResponseData>(url)

  return response
}

// Create a comment by tid and rid
export async function postCommentByPidAndRidApi(
  request: Comment.TopicCreateCommentRequestData
): Promise<Comment.TopicCreateCommentResponseData> {
  try {
    const url = `/topics/${request.tid}/comment`

    const response = await fetchPost<Comment.TopicCreateCommentResponseData>(
      url,
      request
    )

    return response
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch comments')
  }
}
