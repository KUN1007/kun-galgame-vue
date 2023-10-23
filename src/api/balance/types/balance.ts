type SortField = 'time' | 'amount'
type SortOrder = 'asc' | 'desc'

// Get income request data
export interface BalanceIncomeRequestData {
  page: number
  limit: number
  sortField: SortField
  sortOrder: SortOrder
}

// Get expenditure request data
export interface BalanceExpenditureRequestData {
  page: number
  limit: number
  sortField: SortField
  sortOrder: SortOrder
}

// Single income response data
export interface BalanceIncome {
  iid: number
  reason: string
  time: number
  amount: number
}

// Single expenditure response data
export interface BalanceExpenditure {
  eid: number
  reason: string
  time: number
  amount: number
}

// Income and expenditure statement response data
export interface PLStatement {
  totalIncome: number
  totalExpenditure: number
  profitLoss: number
}

// Income response data
export type BalanceIncomeResponseData = KUNGalgameResponseData<BalanceIncome[]>

// Expenditure response data
export type BalanceExpenditureResponseData = KUNGalgameResponseData<
  BalanceExpenditure[]
>

// Profit and loss statement response data
export type BalancePLStatementResponseData = KUNGalgameResponseData<PLStatement>
