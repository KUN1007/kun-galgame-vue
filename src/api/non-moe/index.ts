import { fetchGet } from '@/utils/request'
import * as NonMoe from './types/nonMoe'
import objectToQueryParams from '@/utils/objectToQueryParams'

// 获取不萌记录
export async function getNonMoeLogsApi(
  request: NonMoe.NonMoeLogRequestData
): Promise<NonMoe.NonMoeGetLogsResponseData> {
  const queryParams = objectToQueryParams(request)
  const url = `/non-moe/logs?${queryParams}`

  const response = fetchGet<NonMoe.NonMoeGetLogsResponseData>(url)
  return response
}
