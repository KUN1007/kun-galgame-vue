// 评论的临时数据，用于组件间传输
import { defineStore } from 'pinia'

import type {
  RankingGetTopicsRequestData,
  RankingGetTopicsResponseData,
  RankingGetUserRequestData,
  RankingGetUsersResponseData,
} from '@/api'

import { getRankingTopicsApi, getRankingUsersApi } from '@/api'

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
      page: 1,
      limit: 30,
      sortField: 'popularity',
      sortOrder: 'desc',
    },
    user: {
      page: 1,
      limit: 30,
      sortField: 'moemoepoint',
      sortOrder: 'desc',
    },
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

    async getUsers(): Promise<RankingGetUsersResponseData> {
      const requestData: RankingGetUserRequestData = {
        page: this.user.page,
        limit: this.user.limit,
        sortField: this.user.sortField,
        sortOrder: this.user.sortOrder,
      }

      return await getRankingUsersApi(requestData)
    },
  },
})
