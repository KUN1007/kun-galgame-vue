// Temporary data for replies, used for inter-component communication
import { defineStore } from 'pinia'
import type { TopicReply } from '@/api'

export const useTempReplyStore = defineStore({
  id: 'tempReply',
  // Not persistent
  persist: false,
  state: () => ({
    tempReply: {
      rid: 0,
      tid: 0,
      // Floor where the reply is located
      floor: 0,
      // Floor where the replied reply is located
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
      comment: [],
    } as TopicReply,
  }),
  getters: {},
  actions: {},
})
