/* 主页的 store */
import { defineStore } from 'pinia'

import { getHomeTopicApi } from '@/api/index'

import { HomeTopicRequestData, HomeTopicResponseData } from '@/api/index'

interface HomeStore {
  keywords: string
  category: string
  page: number
  limit: number
  sortField: string
  sortOrder: string
  // 加载完了是否还需要加载
  isLoading: boolean

  // 其它的 store
  // 是否激活主页的左侧交互面板
  isActiveMainPageAside: boolean

  // 搜索历史存储
  searchHistory: string[]
}

export const useKUNGalgameHomeStore = defineStore({
  id: 'home',
  persist: true,
  state: (): HomeStore => ({
    // 搜索框的 store
    /**
     * @param {String} keywords - 搜索关键词，不填默认全部
     * @param {Array} category - 话题的分类，目前有三种，Galgame, Technique, Others
     * @param {Number} page - 分页页数
     * @param {Number} limit - 每页的数据数
     * @param {String} sortField - 按照哪个字段排序
     * @param {String} sortOrder - 排序的顺序，有 `asc`, `desc`
     * @returns {HomeTopicResponseData} topicData
     */
    keywords: '',
    category: '',
    page: 1,
    limit: 17,
    sortField: 'updated',
    sortOrder: 'desc',
    isLoading: true,

    // 其它的 store
    // 是否激活主页的左侧交互面板
    isActiveMainPageAside: true,

    // 搜索历史存储
    searchHistory: [],
  }),
  getters: {},
  actions: {
    // 获取首页话题
    getHomeTopic(): Promise<HomeTopicResponseData> {
      // 这里的值用于初始化
      const requestData: HomeTopicRequestData = {
        keywords: this.keywords,
        category: this.category,
        page: this.page,
        limit: this.limit,
        sortField: this.sortField,
        sortOrder: this.sortOrder,
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
    // 重置页数，是否加载，这样排序才能生效
    resetPageStatus() {
      this.page = 1
      this.isLoading = true
    },
  },
})
