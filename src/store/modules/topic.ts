/* 话题详情的 store */
import { defineStore } from 'pinia'
// 话题
import {
  getTopicByTidApi,
  TopicDetailResponseData,
  TopicAsideOtherTagRequestData,
  getRelatedTopicsByTagsApi,
  TopicAsideMasterRequestData,
  getPopularTopicsByUserUidApi,
  TopicAsideResponseData,
} from '@/api'

// 点赞等动作
import {
  updateTopicUpvoteApi,
  TopicUpvoteTopicRequestData,
  TopicUpvoteTopicResponseData,
  updateTopicLikeApi,
  TopicLikeTopicRequestData,
  TopicLikeTopicResponseData,
} from '@/api'

// 回复
import {
  getRepliesByPidApi,
  postReplyByPidApi,
  TopicReplyRequestData,
  TopicReplyResponseData,
  TopicCreateReplyRequestData,
  TopicCreateReplyResponseData,
} from '@/api'

// 评论
import {
  getCommentsByReplyRidApi,
  TopicCommentResponseData,
  postCommentByPidAndRidApi,
  TopicCreateCommentRequestData,
  TopicCreateCommentResponseData,
} from '@/api'

// 导入 topic store 的类型
import { TopicStore } from '../types/topic'

export const useKUNGalgameTopicStore = defineStore({
  id: 'topic',
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
      r_uid: 0,
      replyUserName: '',
      to_uid: 0,
      content: '',
      tags: [],
      to_floor: 0,

      isSaveReply: false,
      publishStatus: false,
    },
    replyRequest: {
      page: 1,
      limit: 5,
      sortField: 'floor',
      sortOrder: 'asc',
    },
    commentDraft: {
      tid: 0,
      rid: 0,
      c_uid: 0,
      to_uid: 0,
      content: '',

      isShowCommentPanelRid: 0,
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

    // 获取评论
    async getComments(
      tid: number,
      rid: number
    ): Promise<TopicCommentResponseData> {
      return await getCommentsByReplyRidApi(tid, rid)
    },

    // 创建一个评论
    async postNewComment(): Promise<TopicCreateCommentResponseData> {
      const requestData: TopicCreateCommentRequestData = {
        tid: this.commentDraft.tid,
        rid: this.commentDraft.rid,
        to_uid: this.commentDraft.to_uid,
        content: this.commentDraft.content,
      }
      return await postCommentByPidAndRidApi(requestData)
    },

    // 设置回复草稿为原始值，用于回复发布按钮
    resetReplyDraft() {
      this.replyDraft.textCount = 0
      this.replyDraft.tid = 0
      this.replyDraft.r_uid = 0
      this.replyDraft.replyUserName = ''
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
    // 设置评论草稿为原始值，用于评论发布按钮
    resetCommentDraft() {
      this.commentDraft.tid = 0
      this.commentDraft.rid = 0
      this.commentDraft.c_uid = 0
      this.commentDraft.to_uid = 0
      this.commentDraft.content = ''

      this.commentDraft.isShowCommentPanelRid = 0
    },
  },
})
