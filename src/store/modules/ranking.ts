// 评论的临时数据，用于组件间传输
import { defineStore } from 'pinia'

import type {
  RankingGetTopicsRequestData,
  RankingGetTopicsResponseData,
  RankingGetUserRequestData,
} from '@/api'

import { getRankingTopicsApi } from '@/api'

interface RankingStore {
  topic: RankingGetTopicsRequestData
  user: RankingGetUserRequestData
}

export const useKUNGalgameRankingStore = defineStore({
  id: 'KUNGalgameRanking',
  // 不持久
  persist: false,
  state: (): RankingStore => ({
    topic: {
      page: 0,
      limit: 0,
      sortField: 'popularity',
      sortOrder: 'desc',
    },
    user: {},
  }),
  getters: {},
  actions: {
    async getTopics(): Promise<RankingGetTopicsResponseData> {
      const requestData: RankingGetTopicsRequestData = {
        page: this.topic.page,
        limit: this.topic.limit,
        sortField: this.topic.sortField,
        sortOrder: this.topic.sortOrder,
      }

      return await getRankingTopicsApi(requestData)
    },
  },
})
