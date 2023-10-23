// Store for topic details
import { defineStore } from 'pinia'
// Topics
import {
  getTopicByTidApi,
  getRelatedTopicsByTagsApi,
  getPopularTopicsByUserUidApi,
  updateTopicUpvoteApi,
  updateTopicLikeApi,
  updateTopicDislikeApi,
} from '@/api'

import type {
  TopicDetailResponseData,
  TopicAsideOtherTagRequestData,
  TopicAsideMasterRequestData,
  TopicAsideResponseData,
  TopicUpvoteTopicRequestData,
  TopicUpvoteTopicResponseData,
  TopicLikeTopicRequestData,
  TopicLikeTopicResponseData,
  TopicDislikeTopicRequestData,
  TopicDislikeTopicResponseData,
} from '@/api'

// Replies
import {
  getRepliesByPidApi,
  postReplyByPidApi,
  updateReplyUpvoteApi,
  updateReplyLikeApi,
  updateReplyDislikeApi,
  updateReplyApi,
} from '@/api'

import type {
  TopicReplyRequestData,
  TopicReplyResponseData,
  TopicCreateReplyRequestData,
  TopicCreateReplyResponseData,
  TopicUpvoteReplyRequestData,
  TopicUpvoteReplyResponseData,
  TopicLikeReplyRequestData,
  TopicLikeReplyResponseData,
  TopicDislikeReplyRequestData,
  TopicDislikeReplyResponseData,
  TopicUpdateReplyRequestData,
  TopicUpdateReplyResponseData,
} from '@/api'

// Comments
import {
  getCommentsByReplyRidApi,
  updateCommentLikeApi,
  updateCommentDislikeApi,
  postCommentByPidAndRidApi,
} from '@/api'

import type {
  TopicCommentResponseData,
  TopicLikeCommentRequestData,
  TopicLikeCommentResponseData,
  TopicDislikeCommentRequestData,
  TopicDislikeCommentResponseData,
  TopicCreateCommentRequestData,
  TopicCreateCommentResponseData,
} from '@/api'

// Import the type of topic store
import { TopicStore } from '../types/topic'

export const useKUNGalgameTopicStore = defineStore({
  id: 'KUNGalgameTopic',
  persist: true,
  state: (): TopicStore => ({
    isEdit: false,
    isShowAdvance: false,
    isActiveAside: false,
    isScrollToTop: false,
    isLoading: true,
    // Reply ID starts from 0, -1 is just for monitoring data changes
    // , used for watchEffect
    scrollToReplyId: -1,

    replyPanelWidth: 90,
    replyDraft: {
      editorHeight: 200,
      textCount: 0,
      mode: 'minimal',
      theme: 'snow',
      isShowHotKeywords: true,

      tid: 0,
      toUserName: '',
      to_uid: 0,
      content: '',
      tags: [],
      to_floor: 0,

      isSaveReply: false,
    },
    replyRequest: {
      page: 1,
      limit: 3,
      sortField: 'floor',
      sortOrder: 'asc',
    },
    replyRewrite: {
      tid: 0,
      rid: 0,
      content: '',
      tags: [],

      isReplyRewriting: false,
    },
  }),
  actions: {
    // Other topics under the same tag on the left
    async getRelatedTopicsByTags(
      request: TopicAsideOtherTagRequestData
    ): Promise<TopicAsideResponseData> {
      return await getRelatedTopicsByTagsApi(request)
    },

    // Other topics by the master
    async getPopularTopicsByUserUid(
      request: TopicAsideMasterRequestData
    ): Promise<TopicAsideResponseData> {
      return await getPopularTopicsByUserUidApi(request)
    },

    // Get a single topic
    async getTopicByTid(tid: number): Promise<TopicDetailResponseData> {
      return await getTopicByTidApi(tid)
    },

    // Upvote a topic
    async updateTopicUpvote(
      tid: number,
      toUid: number
    ): Promise<TopicUpvoteTopicResponseData> {
      const requestData: TopicUpvoteTopicRequestData = {
        tid: tid,
        to_uid: toUid,
      }
      return await updateTopicUpvoteApi(requestData)
    },

    // Like a topic
    async updateTopicLike(
      tid: number,
      toUid: number,
      isPush: boolean
    ): Promise<TopicLikeTopicResponseData> {
      const requestData: TopicLikeTopicRequestData = {
        tid: tid,
        to_uid: toUid,
        isPush: isPush,
      }
      return await updateTopicLikeApi(requestData)
    },

    // Dislike a topic
    async updateTopicDislike(
      tid: number,
      toUid: number,
      isPush: boolean
    ): Promise<TopicDislikeTopicResponseData> {
      const requestData: TopicDislikeTopicRequestData = {
        tid: tid,
        to_uid: toUid,
        isPush: isPush,
      }
      return await updateTopicDislikeApi(requestData)
    },

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

    // Create a new reply
    async postNewReply(): Promise<TopicCreateReplyResponseData> {
      // The values here are used to initialize the reply
      const requestData: TopicCreateReplyRequestData = {
        tid: this.replyDraft.tid,
        to_uid: this.replyDraft.to_uid,
        to_floor: this.replyDraft.to_floor,
        tags: this.replyDraft.tags,
        content: this.replyDraft.content,
      }
      return await postReplyByPidApi(requestData)
    },

    // Update a reply
    async updateReply(): Promise<TopicUpdateReplyResponseData> {
      const requestData: TopicUpdateReplyRequestData = {
        tid: this.replyRewrite.tid,
        rid: this.replyRewrite.rid,
        content: this.replyRewrite.content,
        tags: this.replyRewrite.tags,
      }
      return await updateReplyApi(requestData)
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

    // Get comments
    async getComments(
      tid: number,
      rid: number
    ): Promise<TopicCommentResponseData> {
      return await getCommentsByReplyRidApi(tid, rid)
    },

    // Like a comment
    async updateCommentLike(
      tid: number,
      cid: number,
      toUid: number
    ): Promise<TopicLikeCommentResponseData> {
      const requestData: TopicLikeCommentRequestData = {
        tid: tid,
        cid: cid,
        to_uid: toUid,
      }
      return await updateCommentLikeApi(requestData)
    },

    // Dislike a comment
    async updateCommentDislike(
      tid: number,
      cid: number,
      toUid: number
    ): Promise<TopicDislikeCommentResponseData> {
      const requestData: TopicDislikeCommentRequestData = {
        tid: tid,
        cid: cid,
        to_uid: toUid,
      }
      return await updateCommentDislikeApi(requestData)
    },

    // Create a new comment
    async postNewComment(
      tid: number,
      rid: number,
      toUid: number,
      content: string
    ): Promise<TopicCreateCommentResponseData> {
      const requestData: TopicCreateCommentRequestData = {
        tid: tid,
        rid: rid,
        to_uid: toUid,
        content: content,
      }
      return await postCommentByPidAndRidApi(requestData)
    },

    // Reset reply draft to its original value, used for the reply publish button
    resetReplyDraft() {
      this.replyDraft.textCount = 0
      this.replyDraft.tid = 0
      this.replyDraft.toUserName = ''
      this.replyDraft.to_uid = 0
      this.replyDraft.content = ''
      this.replyDraft.tags = []

      this.replyDraft.isSaveReply = false
    },
    // Reset page number and loading status for reply sorting to take effect
    resetPageStatus() {
      this.replyRequest.page = 1
      this.isLoading = true
    },
    // Reset data for re-editing a reply
    resetRewriteTopicData() {
      this.replyDraft.textCount = 0
      this.replyRewrite.tid = 0
      this.replyRewrite.rid = 0
      this.replyRewrite.content = ''
      this.replyRewrite.tags = []

      this.replyRewrite.isReplyRewriting = false
    },
  },
})
