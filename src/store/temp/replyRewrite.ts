// Temporary data for reply rewriting, used for inter-component communication
import { defineStore } from 'pinia'

export const useTempReplyRewriteStore = defineStore({
  id: 'tempReplyRewrite',
  // Not persistent
  persist: false,
  // Only these three data are affected by reply rewriting
  // , updating these three data makes it reactive
  state: () => ({ rid: 0, replyContent: '', tags: [''], edited: 0 }),
  getters: {},
  actions: {},
})
