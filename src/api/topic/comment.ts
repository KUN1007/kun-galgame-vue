import { fetchGet, fetchPut, fetchPost } from '@/utils/request'
// 将对象转为请求参数的函数
import objectToQueryParams from '@/utils/objectToQueryParams'

import * as Comment from './types/comment'

// 获取一个回复下面所有的评论
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

// 点赞评论
export async function updateCommentLikeApi(
  request: Comment.TopicLikeCommentRequestData
): Promise<Comment.TopicLikeCommentResponseData> {
  const queryParams = objectToQueryParams(request, 'tid')
  const url = `/topics/${request.tid}/comment/like?${queryParams}`

  const response = fetchPut<Comment.TopicLikeCommentResponseData>(url)

  return response
}

// 点踩评论
export async function updateCommentDislikeApi(
  request: Comment.TopicDislikeCommentRequestData
): Promise<Comment.TopicDislikeCommentResponseData> {
  const queryParams = objectToQueryParams(request, 'tid')
  const url = `/topics/${request.tid}/comment/dislike?${queryParams}`

  const response = fetchPut<Comment.TopicDislikeCommentResponseData>(url)

  return response
}

// 根据 tid 和 rid 创建一个评论
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
