import { defineStore } from 'pinia'

import type { NonMoeLogRequestData, NonMoeGetLogsResponseData } from '@/api'

import { getNonMoeLogsApi } from '@/api'

export const useKUNGalgameNonMoeStore = defineStore({
  id: 'KUNGalgameNonMoe',
  // 不持久
  persist: false,
  state: (): NonMoeLogRequestData => ({
    page: 1,
    limit: 30,
    sortOrder: 'desc',
  }),
  getters: {},
  actions: {
    // 获取不萌记录
    async getLogs(): Promise<NonMoeGetLogsResponseData> {
      const requestData: NonMoeLogRequestData = {
        page: this.page,
        limit: this.limit,
        sortOrder: this.sortOrder,
      }
      return await getNonMoeLogsApi(requestData)
    },
  },
})
