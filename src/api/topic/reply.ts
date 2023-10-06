import { fetchGet, fetchPost } from '@/utils/request'
// 将对象转为请求参数的函数
import objectToQueryParams from '@/utils/objectToQueryParams'
import * as Reply from './types/reply'

// 根据话题 tid 获取话题回复
export async function getRepliesByPidApi(
  request: Reply.TopicReplyRequestData
): Promise<Reply.TopicReplyResponseData> {
  try {
    const queryParams = objectToQueryParams(request, 'tid')
    const url = `/topics/${request.tid}/replies?${queryParams}`

    const response = await fetchGet<Reply.TopicReplyResponseData>(url)

    return response
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch replies')
  }
}

// 根据 tid 创建一个回复
export async function postReplyByPidApi(
  request: Reply.TopicCreateReplyRequestData
): Promise<Reply.TopicCreateReplyResponseData> {
  try {
    const url = `/topics/${request.tid}/reply`

    const response = await fetchPost<Reply.TopicCreateReplyResponseData>(
      url,
      request
    )

    return response
  } catch (error) {
    console.log(error)
    throw new Error('Failed to create reply')
  }
}
