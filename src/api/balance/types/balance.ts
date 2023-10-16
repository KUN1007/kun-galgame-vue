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

// 单条收入返回数据
export interface BalanceIncome {
  iid: number
  reason: string
  time: number
  amount: number
}

// 单条支出返回数据
export interface BalanceExpenditure {
  eid: number
  reason: string
  time: number
  amount: number
}

// 收支总额返回数据
export interface PLStatement {
  totalIncome: number
  totalExpenditure: number
  profitLoss: number
}

// income 响应数据
export type BalanceIncomeResponseData = KUNGalgameResponseData<BalanceIncome[]>

// expenditure 响应数据
export type BalanceExpenditureResponseData = KUNGalgameResponseData<
  BalanceExpenditure[]
>

export type BalancePLStatementResponseData = KUNGalgameResponseData<PLStatement>
