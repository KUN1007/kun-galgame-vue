import { fetchGet } from '@/utils/request'
import objectToQueryParams from '@/utils/objectToQueryParams'
import * as Ranking from './types/ranking'

// 获取 ranking 热门话题
export async function getRankingTopicsApi(
  request: Ranking.RankingGetTopicsRequestData
): Promise<Ranking.RankingGetTopicsResponseData> {
  const queryParams = objectToQueryParams(request)
  const url = `/ranking/topics?${queryParams}`

  const response = await fetchGet<Ranking.RankingGetTopicsResponseData>(url)
  return response
}
