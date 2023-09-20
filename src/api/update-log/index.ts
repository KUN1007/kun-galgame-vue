import { fetchGet } from '@/utils/request'

import { UpdateLog } from './types/updateLog'

export async function getUpdateLogApi(): Promise<UpdateLog[]> {
  return await fetchGet<UpdateLog[]>(`/update/history`)
}
