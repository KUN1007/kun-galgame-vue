import { fetchGet } from '@/utils/request'

import { KUNGalgameUpdateLog } from './types/updateLog'

export async function getUpdateLogApi(): Promise<KUNGalgameUpdateLog[]> {
  return await fetchGet<KUNGalgameUpdateLog[]>(`/update/logs`)
}
