import { fetchPost, fetchGet, fetchPut } from '@/utils/request'
import type * as Edit from './types/edit'
// Function to convert an object to request parameters
import objectToQueryParams from '@/utils/objectToQueryParams'

// Create a new topic
export async function postNewTopicApi(
  newTopicData: Edit.EditCreateTopicRequestData
): Promise<Edit.EditCreateTopicResponseData> {
  // Call the fetchPost function
  const response = await fetchPost<Edit.EditCreateTopicResponseData>(
    `/topics`,
    newTopicData
  )

  // Return the created topic's tid
  return response
}

// Update a topic
export async function updateNewTopicApi(
  requestData: Edit.EditUpdateTopicRequestData
): Promise<Edit.EditUpdateTopicResponseData> {
  const url = `/topics/${requestData.tid}`
  // Call the fetchPost function
  const response = await fetchPut<Edit.EditUpdateTopicResponseData>(
    url,
    requestData
  )

  return response
}

// Get 10 popular tags
export async function getTopTagsApi(
  requestData: Edit.EditGetHotTagsRequestData
): Promise<Edit.EditGetHotTagsResponseData> {
  const queryParams = objectToQueryParams(requestData)

  const response = await fetchGet<Edit.EditGetHotTagsResponseData>(
    `/tag/popular?${queryParams}`
  )
  return response
}
