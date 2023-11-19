import { fetchGet } from '@/utils/request'
import objectToQueryParams from '@/utils/objectToQueryParams'
import type * as Pool from './types/pool'

const poolURLs = {
  topic: `/pool/topic`,
}

export async function getPoolTopicApi(
  requestData: Pool.PoolTopicsRequestData
): Promise<Pool.PoolTopicResponseData> {
  const queryParams = objectToQueryParams(requestData)

  const response = await fetchGet<Pool.PoolTopicResponseData>(
    `${poolURLs.topic}?${queryParams}`
  )

  return response
}
