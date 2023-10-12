/* 话题详情的 store */
import { defineStore } from 'pinia'
// 话题
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

// 回复
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

// 评论
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

// 导入 topic store 的类型
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
    // 回复 id 从 0 开始，-1 只是为了监测数据变化，用于 watchEffect
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
      limit: 5,
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
    // 左侧相同标签下的其它话题
    async getRelatedTopicsByTags(
      request: TopicAsideOtherTagRequestData
    ): Promise<TopicAsideResponseData> {
      return await getRelatedTopicsByTagsApi(request)
    },

    // 楼主的其它话题
    async getPopularTopicsByUserUid(
      request: TopicAsideMasterRequestData
    ): Promise<TopicAsideResponseData> {
      return await getPopularTopicsByUserUidApi(request)
    },

    // 获取单个话题
    async getTopicByTid(tid: number): Promise<TopicDetailResponseData> {
      return await getTopicByTidApi(tid)
    },

    // 推话题
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

    // 点赞话题
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

    // 点踩话题
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

    // 获取回复
    async getReplies(tid: number): Promise<TopicReplyResponseData> {
      // 这里的默认值用于初始化
      const requestData: TopicReplyRequestData = {
        tid: tid,
        page: this.replyRequest.page,
        limit: this.replyRequest.limit,
        sortField: this.replyRequest.sortField || 'floor',
        sortOrder: this.replyRequest.sortOrder || 'desc',
      }
      return await getRepliesByPidApi(requestData)
    },

    // 创建回复
    async postNewReply(): Promise<TopicCreateReplyResponseData> {
      // 这里的值用于初始化回复
      const requestData: TopicCreateReplyRequestData = {
        tid: this.replyDraft.tid,
        to_uid: this.replyDraft.to_uid,
        to_floor: this.replyDraft.to_floor,
        tags: this.replyDraft.tags,
        content: this.replyDraft.content,
      }
      return await postReplyByPidApi(requestData)
    },

    // 更新回复
    async updateReply(): Promise<TopicUpdateReplyResponseData> {
      const requestData: TopicUpdateReplyRequestData = {
        tid: this.replyRewrite.tid,
        rid: this.replyRewrite.rid,
        content: this.replyRewrite.content,
        tags: this.replyRewrite.tags,
      }
      return await updateReplyApi(requestData)
    },

    // 推回复
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

    // 点赞回复
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

    // 点踩回复
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

    // 获取评论
    async getComments(
      tid: number,
      rid: number
    ): Promise<TopicCommentResponseData> {
      return await getCommentsByReplyRidApi(tid, rid)
    },

    // 点赞评论
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

    // 点踩评论
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

    // 创建一个评论
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

    // 设置回复草稿为原始值，用于回复发布按钮
    resetReplyDraft() {
      this.replyDraft.textCount = 0
      this.replyDraft.tid = 0
      this.replyDraft.toUserName = ''
      this.replyDraft.to_uid = 0
      this.replyDraft.content = ''
      this.replyDraft.tags = []

      this.replyDraft.isSaveReply = false
    },
    // 重置页数，是否加载，这样回复排序才能生效
    resetPageStatus() {
      this.replyRequest.page = 1
      this.isLoading = true
    },
    // 重置重新编辑回复数据，用于重新编辑回复
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
