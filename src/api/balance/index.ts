import { fetchGet } from '@/utils/request'
import type * as Balance from './types/balance'
// 将对象转为请求参数的函数
import objectToQueryParams from '@/utils/objectToQueryParams'

// 获取 income
export async function getIncomeApi(
  requestData: Balance.BalanceIncomeRequestData
): Promise<Balance.BalanceIncomeResponseData> {
  const queryParams = objectToQueryParams(requestData)
  const url = `/balance/income?${queryParams}`

  const response = await fetchGet<Balance.BalanceIncomeResponseData>(url)
  return response
}

// 获取 expenditure
export async function getExpenditureApi(
  requestData: Balance.BalanceExpenditureRequestData
): Promise<Balance.BalanceExpenditureResponseData> {
  const queryParams = objectToQueryParams(requestData)
  const url = `/balance/expenditure?${queryParams}`

  const response = await fetchGet<Balance.BalanceExpenditureResponseData>(url)
  return response
}

// 收支总额
export async function getPLStatementApi(): Promise<Balance.BalancePLStatementResponseData> {
  const url = `/balance/statement`
  const response = await fetchGet<Balance.BalancePLStatementResponseData>(url)
  return response
}
