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
