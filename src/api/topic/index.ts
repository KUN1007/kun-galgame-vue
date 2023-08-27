import { fetchGet } from '@/utils/request'
import * as Topic from './types/topic'

const topicURLs = {
  getTopicByTid: `/topic/detail`,
  getRepliesByPid: `/topic/detail`,
}

// 获取单个话题
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

// 根据话题 id 获取话题回复
export async function getRepliesByPid(
  request: Topic.ReplyRequestData
): Promise<Topic.TopicReplyResponseData> {
  try {
    const url = `${topicURLs.getRepliesByPid}/${request.tid}/reply`

    const response = await fetchGet<Topic.TopicReplyResponseData>(url)

    return response
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch topic')
  }
}

// 获取一个回复下面的评论
export async function getCommentsByReplyRid(
  request: Topic.ReplyRequestData
): Promise<Topic.TopicReplyResponseData> {
  try {
    const url = `${topicURLs.getRepliesByPid}/${request.tid}/reply`

    const response = await fetchGet<Topic.TopicReplyResponseData>(url)

    return response
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch topic')
  }
}
