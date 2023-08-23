/* 主页的 store */
import { defineStore } from 'pinia'

import { getHomeTopicApi } from '@/api/home/index'

import {
  HomeTopicRequestData,
  HomeTopicResponseData,
} from '@/api/home/types/home'

export const useKUNGalgameHomeStore = defineStore({
  id: 'home',
  persist: true,
  state: (): HomeTopicRequestData => ({
    sortField: 'updatedAt',
    sortOrder: 'desc',
    page: 1,
    limit: 17,
  }),
  getters: {},
  actions: {
    // 获取首页话题
    getHomeTopic(): Promise<HomeTopicResponseData> {
      const requestData = {
        sortField: this.sortField,
        sortOrder: this.sortOrder,
        page: this.page,
        limit: this.limit,
      }
      return new Promise((resolve, reject) => {
        getHomeTopicApi(requestData)
          .then((res) => {
            resolve(res)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
  },
})
