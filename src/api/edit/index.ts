import { fetchPost } from '@/utils/request'
import type * as Edit from './types/edit'

const editURLs = {
  create: `/edit/topic`,
}

export async function postNewTopicApi(
  newTopicData: Edit.CreateTopicRequestData
): Promise<Edit.CreateTopicResponseData> {
  try {
    // 调用 fetchPost 函数
    const response = await fetchPost<Edit.CreateTopicResponseData>(
      editURLs.create,
      newTopicData
    )

    // 返回创建好的话题数据
    return response
  } catch (error) {
    // 处理错误
    console.error(error)
    throw new Error('Failed to create new topic')
  }
}
