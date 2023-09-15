import { fetchGet, fetchPost } from '@/utils/request'
// 将对象转为请求参数的函数
import objectToQueryParams from '@/utils/objectToQueryParams'
import * as Aside from './types/aside'
import * as Topic from './types/topic'

const topicURLs = {
  // 左侧相同标签下的其它话题
  getRelatedTopicsByTags: `/topic/nav/same`,
  // 楼主的其它话题
  getPopularTopicsByUserUid: `/topic/nav/master`,
  // 获取单个话题
  getTopicByTid: `/topic/detail`,
  // 根据话题 id 获取话题回复
  getRepliesByPid: `/topic/detail`,
  // 创建单个回复
  postReplyByPidApi: `/topic/detail`,
}

// 左侧相同标签下的其它话题
export async function getRelatedTopicsByTagsApi(
  request: Aside.TopicAsideOtherTagRequestData
): Promise<Aside.TopicAsideResponseData> {
  try {
    const queryParams = objectToQueryParams(request)
    const url = `${topicURLs.getRelatedTopicsByTags}?${queryParams}`

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
    const queryParams = objectToQueryParams(request)
    const url = `${topicURLs.getPopularTopicsByUserUid}?${queryParams}`

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
    const url = `${topicURLs.getTopicByTid}/${tid}`

    const response = await fetchGet<Topic.TopicDetailResponseData>(url)

    return response
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch topic')
  }
}

// 根据话题 id 获取话题回复
export async function getRepliesByPidApi(
  request: Topic.TopicReplyRequestData
): Promise<Topic.TopicReplyResponseData> {
  try {
    const queryParams = objectToQueryParams(request, 'tid')
    const url = `${topicURLs.getRepliesByPid}/${request.tid}/reply/?${queryParams}`

    const response = await fetchGet<Topic.TopicReplyResponseData>(url)

    return response
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch replies')
  }
}

// 获取一个回复下面的评论
// export async function getCommentsByReplyRidApi(
//   request: Topic.TopicReplyRequestData
// ): Promise<Topic.TopicReplyResponseData> {
//   try {
//     const url = `${topicURLs.getRepliesByPid}/${request.tid}/reply`

//     const response = await fetchGet<Topic.TopicReplyResponseData>(url)

//     return response
//   } catch (error) {
//     console.log(error)
//     throw new Error('Failed to fetch comments')
//   }
// }

// 根据 pid 创建一个评论
export async function postReplyByPidApi(
  request: Topic.TopicCreateReplyRequestData
): Promise<Topic.TopicCreateReplyResponseData> {
  try {
    const url = `${topicURLs.postReplyByPidApi}/${request.tid}/reply`

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
