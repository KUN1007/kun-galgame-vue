export interface HomeStore {
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
