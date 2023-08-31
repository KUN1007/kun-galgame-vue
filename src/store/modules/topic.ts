/* 话题详情的 store */
import { defineStore } from 'pinia'

import { getRepliesByPidApi, getTopicByTidApi } from '@/api/index'
import {
  TopicDetailResponseData,
  TopicReplyRequestData,
  TopicReplyResponseData,
} from '@/api/index'

// 回复的缓存
interface ReplyDraft {
  r_uid: number
  to_uid: number
  content: string
  tags: string[]
}

// 评论的缓存
interface CommentDraft {
  c_uid: number
  to_uid: number
  content: string
}

// 话题页面的 store
interface Topic {
  // 是否正在被编辑
  isEdit: boolean
  // 是否显示高级编辑模式
  isShowAdvance: boolean
  // 回复的缓存
  replyDraft: ReplyDraft
  // 获取回复的请求接口格式
  replyRequest: TopicReplyRequestData
  // 评论的缓存
  commentDraft: CommentDraft
}

export const useKUNGalgameTopicStore = defineStore({
  id: 'topic',
  persist: true,
  state: (): Topic => ({
    isEdit: false,
    isShowAdvance: false,
    replyDraft: {
      r_uid: 0,
      to_uid: 0,
      content: '',
      tags: [],
    },
    replyRequest: {
      tid: 0,
      page: 0,
      limit: 0,
      sortField: '',
      sortOrder: '',
    },
    commentDraft: {
      c_uid: 0,
      to_uid: 0,
      content: '',
    },
  }),
  actions: {
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
        const requestData: TopicReplyRequestData = {
          tid: tid,
          page: this.replyRequest.page,
          limit: this.replyRequest.limit,
          sortField: this.replyRequest.sortField,
          sortOrder: this.replyRequest.sortOrder,
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
  },
})
