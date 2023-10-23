import { fetchGet, fetchPost, fetchPut } from '@/utils/request'
// Function to convert an object to query parameters
import objectToQueryParams from '@/utils/objectToQueryParams'
import * as Topic from './types/topic'

// Get a single topic by tid
export async function getTopicByTidApi(
  tid: number
): Promise<Topic.TopicDetailResponseData> {
  try {
    const url = `/topics/${tid}`

    const response = await fetchGet<Topic.TopicDetailResponseData>(url)

    return response
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch topic')
  }
}

// Upvote a topic
export async function updateTopicUpvoteApi(
  request: Topic.TopicUpvoteTopicRequestData
): Promise<Topic.TopicUpvoteTopicResponseData> {
  const queryParams = objectToQueryParams(request, 'tid')
  const url = `/topics/${request.tid}/upvote?${queryParams}`

  const response = fetchPut<Topic.TopicUpvoteTopicResponseData>(url)

  return response
}

// Like a topic
export async function updateTopicLikeApi(
  request: Topic.TopicLikeTopicRequestData
): Promise<Topic.TopicLikeTopicResponseData> {
  const queryParams = objectToQueryParams(request, 'tid')
  const url = `/topics/${request.tid}/like?${queryParams}`

  const response = fetchPut<Topic.TopicLikeTopicResponseData>(url)

  return response
}

// Dislike a topic
export async function updateTopicDislikeApi(
  request: Topic.TopicDislikeTopicRequestData
): Promise<Topic.TopicDislikeTopicResponseData> {
  const queryParams = objectToQueryParams(request, 'tid')
  const url = `/topics/${request.tid}/dislike?${queryParams}`

  const response = fetchPut<Topic.TopicDislikeTopicResponseData>(url)

  return response
}
