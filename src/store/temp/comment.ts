// Temporary data for comments, used for inter-component communication
import { defineStore } from 'pinia'

export const useTempCommentStore = defineStore({
  id: 'tempComment',
  // Not persistent
  persist: false,
  state: () => ({
    tid: 0,
    rid: 0,
    toUid: 0,
    toUsername: '',
    content: '',

    // Which reply's comment panel to display
    isShowCommentPanelRid: 0,
  }),
  getters: {},
  actions: {},
})
