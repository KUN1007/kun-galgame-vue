import { fetchPost } from '@/utils/request'
import type * as Edit from './types/edit'

export async function createNewTopicApi(
  newTopicData: Edit.CreateTopicRequestData
): Promise<Edit.CreateTopicResponseData> {
  try {
    const url = `/edit/topic`

    // 调用 fetchPost 函数
    const response = await fetchPost<Edit.CreateTopicResponseData>(
      url,
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
