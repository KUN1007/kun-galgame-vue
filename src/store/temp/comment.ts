// 评论的临时数据，用于组件间传输
import { defineStore } from 'pinia'

export const useTempCommentStore = defineStore({
  id: 'tempComment',
  // 不持久
  persist: false,
  state: () => ({
    tid: 0,
    rid: 0,
    toUid: 0,
    toUsername: '',
    content: '',

    // 要展示哪个回复底下的评论面板
    isShowCommentPanelRid: 0,
  }),
  getters: {},
  actions: {},
})
