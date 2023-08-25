import { fetchGet } from '@/utils/request'
// 将对象转为请求参数的函数
import objectToQueryParams from '@/utils/objectToQueryParams'
import type * as Home from './types/home'

// 要请求的 URL
const homeURLs = {
  home: `/home/topic`,
  navHot: `/home/nav/hot`,
  navNew: `/home/nav/new`,
}

// 首页话题列表
export async function getHomeTopicApi(
  requestData: Home.HomeTopicRequestData
): Promise<Home.HomeTopicResponseData> {
  try {
    const queryParams = objectToQueryParams(requestData)

    // 调用 fetchPost 函数
    const response = await fetchGet<Home.HomeTopicResponseData>(
      `${homeURLs.home}?${queryParams}`
    )

    return response
  } catch (error) {
    // 处理错误
    console.error(error)
    throw new Error('Failed to fetch home topic')
  }
}

// 首页今日热门话题
export async function getHomeNavHotTopicApi(): Promise<Home.HotTopicResponseData> {
  try {
    // 调用 fetchPost 函数
    const response = await fetchGet<Home.HotTopicResponseData>(homeURLs.navHot)

    return response
  } catch (error) {
    // 处理错误
    console.error(error)
    throw new Error('Failed to fetch home nav hot topic')
  }
}

// 首页今日最新话题
export async function getHomeNavNewTopicApi(): Promise<Home.NewTopicResponseData> {
  try {
    // 调用 fetchPost 函数
    const response = await fetchGet<Home.NewTopicResponseData>(homeURLs.navNew)

    return response
  } catch (error) {
    // 处理错误
    console.error(error)
    throw new Error('Failed to fetch home nav new topic')
  }
}
