// 评论的临时数据，用于组件间传输
import { defineStore } from 'pinia'

import type {
  BalanceIncomeRequestData,
  BalanceExpenditureRequestData,
  BalanceIncomeResponseData,
  BalanceExpenditureResponseData,
} from '@/api'

import { getIncomeApi, getExpenditureApi } from '@/api'

interface BalanceStore {
  income: BalanceIncomeRequestData
  expenditure: BalanceExpenditureRequestData
}

export const useKUNGalgameBalanceStore = defineStore({
  id: 'KUNGalgameBalance',
  // 不持久
  persist: false,
  state: (): BalanceStore => ({
    income: {
      page: 0,
      limit: 0,
      sortField: 'time',
      sortOrder: 'desc',
    },
    expenditure: {
      page: 0,
      limit: 0,
      sortField: 'time',
      sortOrder: 'desc',
    },
  }),
  getters: {},
  actions: {
    // 获取 income
    async getIncome(): Promise<BalanceIncomeResponseData> {
      // 这里的默认值用于初始化
      const requestData: BalanceIncomeRequestData = {
        page: this.income.page,
        limit: this.income.limit,
        sortField: this.income.sortField,
        sortOrder: this.income.sortOrder,
      }
      return await getIncomeApi(requestData)
    },

    // 获取 expenditure
    async getExpenditure(): Promise<BalanceExpenditureResponseData> {
      // 这里的默认值用于初始化
      const requestData: BalanceExpenditureRequestData = {
        page: this.income.page,
        limit: this.income.limit,
        sortField: this.income.sortField,
        sortOrder: this.income.sortOrder,
      }
      return await getExpenditureApi(requestData)
    },
  },
})
