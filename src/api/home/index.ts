import { fetchGet } from '@/utils/request'
// Function to convert an object to query parameters
import objectToQueryParams from '@/utils/objectToQueryParams'
import type * as Home from './types/home'

// URLs to be requested
const homeURLs = {
  search: `/home/search`,
  home: `/home/topic`,
  navHot: `/home/nav/hot`,
  navNew: `/home/nav/new`,
}

// Home page topic list
export async function getHomeSearchTopicApi(
  requestData: Home.HomeSearchTopicRequestData
): Promise<Home.HomeSearchTopicResponseData> {
  const queryParams = objectToQueryParams(requestData)

  const response = await fetchGet<Home.HomeSearchTopicResponseData>(
    `${homeURLs.search}?${queryParams}`
  )

  return response
}

// Home page topic list
export async function getHomeTopicApi(
  requestData: Home.HomeTopicRequestData
): Promise<Home.HomeTopicResponseData> {
  const queryParams = objectToQueryParams(requestData)

  const response = await fetchGet<Home.HomeTopicResponseData>(
    `${homeURLs.home}?${queryParams}`
  )

  return response
}

// Today's popular topics on the home page
export async function getHomeNavHotTopicApi(): Promise<Home.HomeHotTopicResponseData> {
  const response = await fetchGet<Home.HomeHotTopicResponseData>(
    homeURLs.navHot
  )

  return response
}

// Today's newest topics on the home page
export async function getHomeNavNewTopicApi(): Promise<Home.HomeNewTopicResponseData> {
  const response = await fetchGet<Home.HomeNewTopicResponseData>(
    homeURLs.navNew
  )

  return response
}
