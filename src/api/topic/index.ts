import { request } from '@/utils/request'

import { KUNGalgameTopic } from './types/topic'

export async function getTopicApi(id: number) {
  return await request<KUNGalgameTopic>(`/topic/${id}`)
}

export async function getTopicReplyApi(id: number) {
  return await request<KUNGalgameTopic>(`/topic/reply/${id}`)
}

export async function getTopicCommentApi(id: number) {
  return await request<KUNGalgameTopic>(`/topic/comment/${id}`)
}

// 获取指定范围内的帖子数据
export async function getTopicRangeApi(
  start: number,
  count: number
): Promise<KUNGalgameTopic[]> {
  const url = `http://127.0.0.1:10007/topic/topics/kun?start=${start}&count=${count}`
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const response = await request<KUNGalgameTopic[]>(url, options)
    return response
  } catch (error) {
    console.error('Error fetching topics:', error)
    throw error
  }
}
