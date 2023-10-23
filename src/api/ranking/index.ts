import { fetchGet } from '@/utils/request'
import objectToQueryParams from '@/utils/objectToQueryParams'
import * as Ranking from './types/ranking'

// Get ranking hot topics
export async function getRankingTopicsApi(
  request: Ranking.RankingGetTopicsRequestData
): Promise<Ranking.RankingGetTopicsResponseData> {
  const queryParams = objectToQueryParams(request)
  const url = `/ranking/topics?${queryParams}`

  const response = await fetchGet<Ranking.RankingGetTopicsResponseData>(url)
  return response
}

// Get ranking hot users
export async function getRankingUsersApi(
  request: Ranking.RankingGetUserRequestData
): Promise<Ranking.RankingGetUsersResponseData> {
  const queryParams = objectToQueryParams(request)
  const url = `/ranking/users?${queryParams}`

  const response = await fetchGet<Ranking.RankingGetUsersResponseData>(url)
  return response
}
