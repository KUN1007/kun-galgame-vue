import { fetchGet } from '@/utils/request'
// Function to convert an object to query parameters
import objectToQueryParams from '@/utils/objectToQueryParams'
import * as Aside from './types/aside'

// Get other topics with the same tags on the left side
export async function getRelatedTopicsByTagsApi(
  request: Aside.TopicAsideOtherTagRequestData
): Promise<Aside.TopicAsideResponseData> {
  try {
    const queryParams = objectToQueryParams(request, 'tid')
    const url = `/topics/${request.tid}/related?${queryParams}`

    const response = await fetchGet<Aside.TopicAsideResponseData>(url)

    return response
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch aside other topic')
  }
}

// Other topics by the master
export async function getPopularTopicsByUserUidApi(
  request: Aside.TopicAsideMasterRequestData
): Promise<Aside.TopicAsideResponseData> {
  try {
    const queryParams = objectToQueryParams(request, 'tid')
    const url = `/topics/${request.tid}/popular?${queryParams}`

    const response = await fetchGet<Aside.TopicAsideResponseData>(url)

    return response
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch master other topic')
  }
}
