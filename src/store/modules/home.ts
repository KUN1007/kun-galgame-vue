/* Home Page Store */
import { defineStore } from 'pinia'
// API
import { getHomeTopicApi } from '@/api/index'
// Data interface types
import { HomeTopicRequestData, HomeTopicResponseData } from '@/api/index'

// Home store type
import { HomeStore } from '../types/home'

export const useKUNGalgameHomeStore = defineStore({
  id: 'KUNGalgameHome',
  persist: true,
  state: (): HomeStore => ({
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
    category: '',
    page: 1,
    limit: 17,
    sortField: 'updated',
    sortOrder: 'desc',
    isLoading: true,

    // Other store
    // Whether to activate the left interaction panel on the main page
    isActiveMainPageAside: true,

    // Search history storage
    searchHistory: [],
  }),
  getters: {},
  actions: {
    // Get home topics
    async getHomeTopic(): Promise<HomeTopicResponseData> {
      // The values here are used for initialization
      const requestData: HomeTopicRequestData = {
        keywords: this.keywords,
        category: this.category,
        page: this.page,
        limit: this.limit,
        sortField: this.sortField,
        sortOrder: this.sortOrder,
      }
      return await getHomeTopicApi(requestData)
    },
    // Reset page number and loading status for sorting to take effect
    resetPageStatus() {
      this.page = 1
      this.isLoading = true
    },
  },
})
