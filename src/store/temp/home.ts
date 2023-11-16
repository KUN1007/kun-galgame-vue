import { defineStore } from 'pinia'
import { getHomeTopicApi } from '@/api/index'
import type { HomeTopicRequestData, HomeTopicResponseData } from '@/api/index'
import type { HomeStoreTemp } from '../types/home'

export const useTempHomeStore = defineStore({
  id: 'tempHome',
  persist: false,
  state: (): HomeStoreTemp => ({
    // Search box store
    /**
     * @param {String} keywords - Search keywords, default to all if not provided
     * @param {Array} category - Topic categories, currently there are three: Galgame, Technique, Others
     * @param {Number} page - Page number for pagination
     * @param {Number} limit - Number of data per page
     * @param {String} sortField - Field to sort by
     * @param {String} sortOrder - Sorting order, can be 'asc' or 'desc'
     * @returns {HomeTopicResponseData} topicData
     */
    keywords: '',
    category: ['Galgame'],
    page: 1,
    limit: 17,
    sortField: 'updated',
    sortOrder: 'desc',
    isLoading: true,
  }),
  getters: {},
  actions: {
    async getHomeTopic(): Promise<HomeTopicResponseData> {
      const requestData: HomeTopicRequestData = {
        keywords: this.keywords,
        category: JSON.stringify(this.category),
        page: this.page,
        limit: this.limit,
        sortField: this.sortField,
        sortOrder: this.sortOrder,
      }
      return await getHomeTopicApi(requestData)
    },

    resetPageStatus() {
      this.page = 1
      this.isLoading = true
    },
  },
})
