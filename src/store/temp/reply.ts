// 回复的临时数据，用于组件间传输
import { defineStore } from 'pinia'
import type { TopicReply } from '@/api'

export const useTempReplyStore = defineStore({
  id: 'tempReply',
  // 不持久
  persist: false,
  state: () => ({
    tempReply: {
      rid: 0,
      tid: 0,
      // reply 所在的楼层
      floor: 0,
      // 被回复的 reply 所在的楼层
      to_floor: 0,
      r_user: {
        uid: 0,
        name: '',
        avatar: '',
        moemoepoint: 0,
      },
      to_user: {
        uid: 0,
        name: '',
      },
      edited: 0,
      content: '',
      upvotes: [],
      upvote_time: 0,
      likes: [],
      dislikes: [],
      tags: [],
      time: 0,
      cid: [],
    } as TopicReply,
  }),
  getters: {},
  actions: {},
})
