/* 话题详情的 store */
import { defineStore } from 'pinia'

import {
  getRelatedTopicsByTagsApi,
  getPopularTopicsByUserUidApi,
  getRepliesByPidApi,
  getTopicByTidApi,
  TopicCreateReplyRequestData,
  TopicCreateReplyResponseData,
  postReplyByPidApi,
} from '@/api/index'
import {
  TopicAsideOtherTagRequestData,
  TopicAsideMasterRequestData,
  TopicAsideResponseData,
  TopicDetailResponseData,
  TopicReplyRequestData,
  TopicReplyResponseData,
} from '@/api/index'

// 回复的缓存
interface ReplyDraft {
  // 当前话题的 id
  tid: number
  r_uid: number
  // 回复给谁，用于回复面板展示
  replyUserName: string
  to_uid: number
  content: string
  tags: string[]
  // 被回复的人的楼层数，用于跳转
  to_floor: number

  // 是否保存回复
  isSaveReply: boolean
  // 回复发布的状态，如果状态有变化则将发布好的回复数据添加在回复数组里
  // 这里与 true 和 false 无关，关心的是它的状态改变
  publishStatus: boolean
}

// 评论的缓存
interface CommentDraft {
  c_uid: number
  to_uid: number
  content: string
}

// 获取回复的请求
interface ReplyRequest {
  page: number
  limit: number
  sortField: string
  sortOrder: 'asc' | 'desc'
}
// 话题页面的 store
interface Topic {
  // 是否正在被编辑
  isEdit: boolean
  // 是否显示高级编辑模式
  isShowAdvance: boolean
  // 是否激活左侧交互面板
  isActiveAside: boolean
  // 是否滚动到顶部
  isScrollToTop: boolean
  // 加载完了是否还需要加载
  isLoading: boolean
  // 要滚动到的回复 id
  scrollToReplyId: number

  // 回复的缓存
  replyDraft: ReplyDraft
  // 获取回复的请求接口格式
  replyRequest: ReplyRequest

  // 评论的缓存
  commentDraft: CommentDraft
}

export const useKUNGalgameTopicStore = defineStore({
  id: 'topic',
  persist: true,
  state: (): Topic => ({
    isEdit: false,
    isShowAdvance: false,
    isActiveAside: false,
    isScrollToTop: false,
    isLoading: true,
    // 回复 id 从 0 开始，-1 只是为了监测数据变化，用于 watchEffect
    scrollToReplyId: -1,

    replyDraft: {
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
      c_uid: 0,
      to_uid: 0,
      content: '',
    },
  }),
  actions: {
    // 左侧相同标签下的其它话题
    getRelatedTopicsByTags(
      request: TopicAsideOtherTagRequestData
    ): Promise<TopicAsideResponseData> {
      return new Promise((resolve, reject) => {
        getRelatedTopicsByTagsApi(request)
          .then((res) => {
            resolve(res)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    // 楼主的其它话题
    getPopularTopicsByUserUid(
      request: TopicAsideMasterRequestData
    ): Promise<TopicAsideResponseData> {
      return new Promise((resolve, reject) => {
        getPopularTopicsByUserUidApi(request)
          .then((res) => {
            resolve(res)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    // 获取单个话题
    getTopicByTid(tid: number): Promise<TopicDetailResponseData> {
      return new Promise((resolve, reject) => {
        getTopicByTidApi(tid)
          .then((res) => {
            resolve(res)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    // 获取回复
    getReplies(tid: number): Promise<TopicReplyResponseData> {
      return new Promise((resolve, reject) => {
        // 这里的默认值用于初始化
        const requestData: TopicReplyRequestData = {
          tid: tid,
          page: this.replyRequest.page,
          limit: this.replyRequest.limit,
          sortField: this.replyRequest.sortField || 'floor',
          sortOrder: this.replyRequest.sortOrder || 'desc',
        }
        getRepliesByPidApi(requestData)
          .then((res) => {
            resolve(res)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    // 创建回复
    postNewReply(): Promise<TopicCreateReplyResponseData> {
      return new Promise((resolve, reject) => {
        // 这里的值用于初始化回复
        const requestData: TopicCreateReplyRequestData = {
          tid: this.replyDraft.tid,
          r_uid: this.replyDraft.r_uid,
          to_uid: this.replyDraft.to_uid,
          to_floor: this.replyDraft.to_floor,
          tags: this.replyDraft.tags,
          content: this.replyDraft.content,
        }
        postReplyByPidApi(requestData)
          .then((res) => {
            resolve(res)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    // 设置回复草稿为原始值，用于发布按钮
    resetReplyDraft() {
      this.replyDraft.tid = 0
      this.replyDraft.r_uid = 0
      this.replyDraft.replyUserName = ''
      this.replyDraft.to_uid = 0
      this.replyDraft.content = ''
      this.replyDraft.tags = []

      this.replyDraft.isSaveReply = false
    },
    // 重置页数，是否加载，这样排序才能生效
    resetPageStatus() {
      this.replyRequest.page = 1
      this.isLoading = true
    },
  },
})
