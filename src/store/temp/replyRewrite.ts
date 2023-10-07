// 回复重新编辑的临时数据，用于组件间传输
import { defineStore } from 'pinia'

export const useTempReplyRewriteStore = defineStore({
  id: 'tempReplyRewrite',
  // 不持久
  persist: false,
  // 重新编辑影响的只有这三个数据，更新这三个数据即可做到响应式
  state: () => ({ rid: 0, replyContent: '', tags: [''], edited: 0 }),
  getters: {},
  actions: {},
})
