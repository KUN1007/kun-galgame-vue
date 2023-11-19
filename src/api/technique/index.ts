import { fetchGet } from '@/utils/request'
import objectToQueryParams from '@/utils/objectToQueryParams'
import type * as Technique from './types/technique'

const techniqueURLs = {
  topic: `/technique/topic`,
}

export async function getTechniqueTopicApi(
  requestData: Technique.TechniqueTopicsRequestData
): Promise<Technique.TechniqueTopicResponseData> {
  const queryParams = objectToQueryParams(requestData)

  const response = await fetchGet<Technique.TechniqueTopicResponseData>(
    `${techniqueURLs.topic}?${queryParams}`
  )

  return response
}
