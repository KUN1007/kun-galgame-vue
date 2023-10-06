import { fetchGet, fetchPost } from '@/utils/request'

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
