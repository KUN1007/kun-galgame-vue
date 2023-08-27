import { fetchGet } from '@/utils/request'
import * as Topic from './types/topic'

const topicURLs = {
  getTopicByTid: `/topic/detail`,
}

export async function getTopicByTid(
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
