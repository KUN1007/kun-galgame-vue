import { fetchGet, fetchPost, fetchPut } from '@/utils/request'
// 将对象转为请求参数的函数
import objectToQueryParams from '@/utils/objectToQueryParams'
import * as Action from './types/action'
import * as Aside from './types/aside'
import * as Topic from './types/topic'

// 左侧相同标签下的其它话题
export async function getRelatedTopicsByTagsApi(
  request: Aside.TopicAsideOtherTagRequestData
): Promise<Aside.TopicAsideResponseData> {
  try {
    const queryParams = objectToQueryParams(request, 'tid')
    const url = `/topics/${request.tid}/related?${queryParams}`

    const response = await fetchGet<Aside.TopicAsideResponseData>(url)

    return response
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch aside other topic')
  }
}

// 楼主的其它话题
export async function getPopularTopicsByUserUidApi(
  request: Aside.TopicAsideMasterRequestData
): Promise<Aside.TopicAsideResponseData> {
  try {
    const queryParams = objectToQueryParams(request, 'tid')
    const url = `/topics/${request.tid}/popular?${queryParams}`

    const response = await fetchGet<Aside.TopicAsideResponseData>(url)

    return response
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch master other topic')
  }
}

// 获取单个话题
export async function getTopicByTidApi(
  tid: number
): Promise<Topic.TopicDetailResponseData> {
  try {
    const url = `/topics/${tid}`

    const response = await fetchGet<Topic.TopicDetailResponseData>(url)

    return response
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch topic')
  }
}

// 点赞话题
export async function updateTopicLikeApi(
  request: Action.TopicLikeTopicRequestData
): Promise<Action.TopicLikeTopicResponseData> {
  const queryParams = objectToQueryParams(request, 'tid')
  const url = `/topics/${request.tid}/like?${queryParams}`

  const response = fetchPut<Action.TopicLikeTopicResponseData>(url)

  return response
}

// 根据话题 tid 获取话题回复
export async function getRepliesByPidApi(
  request: Topic.TopicReplyRequestData
): Promise<Topic.TopicReplyResponseData> {
  try {
    const queryParams = objectToQueryParams(request, 'tid')
    const url = `/topics/${request.tid}/replies?${queryParams}`

    const response = await fetchGet<Topic.TopicReplyResponseData>(url)

    return response
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch replies')
  }
}

// 根据 tid 创建一个回复
export async function postReplyByPidApi(
  request: Topic.TopicCreateReplyRequestData
): Promise<Topic.TopicCreateReplyResponseData> {
  try {
    const url = `/topics/${request.tid}/reply`

    const response = await fetchPost<Topic.TopicCreateReplyResponseData>(
      url,
      request
    )

    return response
  } catch (error) {
    console.log(error)
    throw new Error('Failed to create reply')
  }
}

// 获取一个回复下面所有的评论
export async function getCommentsByReplyRidApi(
  tid: number,
  rid: number
): Promise<Topic.TopicCommentResponseData> {
  try {
    const url = `/topics/${tid}/comment?rid=${rid}`

    const response = await fetchGet<Topic.TopicCommentResponseData>(url)

    return response
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch comments')
  }
}

// 根据 tid 和 rid 创建一个评论
export async function postCommentByPidAndRidApi(
  request: Topic.TopicCreateCommentRequestData
): Promise<Topic.TopicCreateCommentResponseData> {
  try {
    const url = `/topics/${request.tid}/comment`

    const response = await fetchPost<Topic.TopicCreateCommentResponseData>(
      url,
      request
    )

    return response
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch comments')
  }
}
