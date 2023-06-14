import { fetchGet } from '@/utils/request'

import { KUNGalgameTopic } from './types/topic'

export async function getTopicApi(id: number) {
  return await fetchGet<KUNGalgameTopic>(`/topic/${id}`)
}

export async function getTopicReplyApi(id: number) {
  return await fetchGet<KUNGalgameTopic>(`/topic/reply/${id}`)
}

export async function getTopicCommentApi(id: number) {
  return await fetchGet<KUNGalgameTopic>(`/topic/comment/${id}`)
}

// 获取指定范围内的帖子数据
export async function getTopicRangeApi(
  start: number,
  count: number
): Promise<KUNGalgameTopic[]> {
  const url = `/topic/topics/kun?start=${start}&count=${count}`

  try {
    const response = await fetchGet<KUNGalgameTopic[]>(url)
    return response
  } catch (error) {
    console.error('Error fetching topics:', error)
    throw error
  }
}
