import { defineStore } from 'pinia'
// Replies
import {
  getRepliesByPidApi,
  updateReplyUpvoteApi,
  updateReplyLikeApi,
  updateReplyDislikeApi,
} from '@/api'

import type {
  TopicReplyRequestData,
  TopicReplyResponseData,
  TopicUpvoteReplyRequestData,
  TopicUpvoteReplyResponseData,
  TopicLikeReplyRequestData,
  TopicLikeReplyResponseData,
  TopicDislikeReplyRequestData,
  TopicDislikeReplyResponseData,
} from '@/api'

import type { ReplyStoreTemp } from '@/store/types/topic/reply'

export const useTempReplyStore = defineStore({
  id: 'tempReply',
  persist: false,
  state: (): ReplyStoreTemp => ({
    textCount: 0,
    isEdit: false,
    isScrollToTop: false,
    isLoading: true,
    // Reply ID starts from 0, -1 is just for monitoring data changes
    scrollToReplyId: -1,

    replyRequest: {
      page: 1,
      limit: 3,
      sortField: 'floor',
      sortOrder: 'asc',
    },

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
    },

    tempReplyRewrite: { rid: 0, content: '', tags: [''], edited: 0 },
  }),
  actions: {
    // Get replies
    async getReplies(tid: number): Promise<TopicReplyResponseData> {
      // The default values here are used for initialization
      const requestData: TopicReplyRequestData = {
        tid: tid,
        page: this.replyRequest.page,
        limit: this.replyRequest.limit,
        sortField: this.replyRequest.sortField || 'floor',
        sortOrder: this.replyRequest.sortOrder || 'desc',
      }
      return await getRepliesByPidApi(requestData)
    },

    // Upvote a reply
    async updateReplyUpvote(
      tid: number,
      toUid: number,
      rid: number
    ): Promise<TopicUpvoteReplyResponseData> {
      const requestData: TopicUpvoteReplyRequestData = {
        tid: tid,
        to_uid: toUid,
        rid: rid,
      }
      return await updateReplyUpvoteApi(requestData)
    },

    // Like a reply
    async updateReplyLike(
      tid: number,
      toUid: number,
      rid: number,
      isPush: boolean
    ): Promise<TopicLikeReplyResponseData> {
      const requestData: TopicLikeReplyRequestData = {
        tid: tid,
        to_uid: toUid,
        rid: rid,
        isPush: isPush,
      }
      return await updateReplyLikeApi(requestData)
    },

    // Dislike a reply
    async updateReplyDislike(
      tid: number,
      toUid: number,
      rid: number,
      isPush: boolean
    ): Promise<TopicDislikeReplyResponseData> {
      const requestData: TopicDislikeReplyRequestData = {
        tid: tid,
        to_uid: toUid,
        rid: rid,
        isPush: isPush,
      }
      return await updateReplyDislikeApi(requestData)
    },

    resetPageStatus() {
      this.replyRequest.page = 1
      this.isLoading = true
    },
  },
})
