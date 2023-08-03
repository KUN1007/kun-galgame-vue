/* 帖子详情的 store */
import { defineStore } from 'pinia'

interface Tag {
  index: number
  name: string
}

interface Topic {
  // 是否正在被编辑
  isEdit: boolean
  // 帖子标题
  title: string
  // 帖子内容
  article: string
  // 帖子标签
  tags: Tag[]
}

export const useKUNGalgameTopicStore = defineStore({
  id: 'topic',
  persist: true,
  state: (): Topic => ({
    isEdit: false,
    title: '',
    article: '',
    tags: [],
  }),
})
