import { fetchGet } from '@/utils/request'
// 将对象转为请求参数的函数
import objectToQueryParams from '@/utils/objectToQueryParams'
import * as Aside from './types/aside'

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
