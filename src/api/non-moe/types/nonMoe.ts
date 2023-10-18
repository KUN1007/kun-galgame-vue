type SortOrder = 'asc' | 'desc'

export interface NonMoeLogRequestData {
  page: number
  limit: number
  sortOrder: SortOrder
}

export interface NonMoeLog {
  nid: number
  uid: number
  name: string
  description: string
  time: number
  result: string
}

export type NonMoeGetLogsResponseData = KUNGalgameResponseData<NonMoeLog[]>
