/* 编辑区的 store */
import { defineStore } from 'pinia'
interface Tag {
  index: number
  name: string
}

interface Topic {
  // 话题标题
  title: string
  // 话题内容
  article: string
  // 话题标签
  tags: Tag[]
  // 话题分区
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
