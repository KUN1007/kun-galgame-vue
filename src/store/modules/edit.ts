/* 编辑区的 store */
import { defineStore } from 'pinia'
interface Tag {
  index: number
  name: string
}

interface Topic {
  // 帖子标题
  title: string
  // 帖子内容
  article: string
  // 帖子标签
  tags: Tag[]
  // 帖子分区
  category: string[]
}

export const useKUNGalgameEditStore = defineStore({
  id: 'edit',
  persist: true,
  state: (): Topic => ({
    title: '',
    article: '',
    tags: [],
    category: [],
  }),
})
