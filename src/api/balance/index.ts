import { fetchGet } from '@/utils/request'
import type * as Balance from './types/balance'
// Function to convert an object to query parameters
import objectToQueryParams from '@/utils/objectToQueryParams'

// Get income
export async function getIncomeApi(
  requestData: Balance.BalanceIncomeRequestData
): Promise<Balance.BalanceIncomeResponseData> {
  const queryParams = objectToQueryParams(requestData)
  const url = `/balance/income?${queryParams}`

  const response = await fetchGet<Balance.BalanceIncomeResponseData>(url)
  return response
}

// Get expenditure
export async function getExpenditureApi(
  requestData: Balance.BalanceExpenditureRequestData
): Promise<Balance.BalanceExpenditureResponseData> {
  const queryParams = objectToQueryParams(requestData)
  const url = `/balance/expenditure?${queryParams}`

  const response = await fetchGet<Balance.BalanceExpenditureResponseData>(url)
  return response
}

// Profit and Loss Statement
export async function getPLStatementApi(): Promise<Balance.BalancePLStatementResponseData> {
  const url = `/balance/statement`
  const response = await fetchGet<Balance.BalancePLStatementResponseData>(url)
  return response
}
