type SortField = 'time' | 'amount'
type SortOrder = 'asc' | 'desc'

// 获取 income 请求数据
export interface BalanceIncomeRequestData {
  page: number
  limit: number
  sortField: SortField
  sortOrder: SortOrder
}

// 获取 expenditure 请求数据
export interface BalanceExpenditureRequestData {
  page: number
  limit: number
  sortField: SortField
  sortOrder: SortOrder
}

// income 响应数据
export type BalanceIncomeResponseData = KUNGalgameResponseData<{
  iid: number
  reason: string
  time: number
  amount: number
}>

// expenditure 响应数据
export type BalanceExpenditureResponseData = KUNGalgameResponseData<{
  eid: number
  reason: string
  time: number
  amount: number
}>
