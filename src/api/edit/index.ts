import { fetchPost, fetchGet } from '@/utils/request'
import type * as Edit from './types/edit'
// 将对象转为请求参数的函数
import objectToQueryParams from '@/utils/objectToQueryParams'

const editURLs = {
  create: `/edit/topic`,
  hotTags: `/tag/popular`,
}

// 创建话题
export async function postEditNewTopicApi(
  newTopicData: Edit.EditCreateTopicRequestData
): Promise<Edit.EditCreateTopicResponseData> {
  // 调用 fetchPost 函数
  const response = await fetchPost<Edit.EditCreateTopicResponseData>(
    editURLs.create,
    newTopicData
  )

  // 返回创建好的话题 tid
  return response
}

// 获取 10 个热门 tag
export async function getTopTagsApi(
  requestData: Edit.EditGetHotTagsRequestData
): Promise<Edit.EditGetHotTagsResponseData> {
  const queryParams = objectToQueryParams(requestData)

  const response = await fetchGet<Edit.EditGetHotTagsResponseData>(
    `${editURLs.hotTags}?${queryParams}`
  )
  return response
}
