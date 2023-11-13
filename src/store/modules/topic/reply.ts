import { defineStore } from 'pinia'

// Replies
import { postReplyByPidApi, updateReplyApi } from '@/api'

import type {
  TopicCreateReplyRequestData,
  TopicCreateReplyResponseData,
  TopicUpdateReplyRequestData,
  TopicUpdateReplyResponseData,
} from '@/api'

import { ReplyStorePersist } from '@/store/types/topic/reply'
import { checkReplyPublish } from '@/store/utils/checkReplyPublish'

export const usePersistKUNGalgameReplyStore = defineStore({
  id: 'KUNGalgameReply',
  persist: true,
  state: (): ReplyStorePersist => ({
    replyPanelWidth: 90,

    isSaveReply: false,
    isShowHotKeywords: true,
    editorHeight: 200,

    // Whether the reply is being rewritten
    isReplyRewriting: false,

    replyDraft: {
      tid: 0,
      toUserName: '',
      toUid: 0,
      content: '',
      tags: [],
      toFloor: 0,
    },
    replyRewrite: {
      tid: 0,
      rid: 0,
      content: '',
      tags: [],
      edited: 0,
    },
  }),
  actions: {
    // Create a new reply
    async postNewReply(): Promise<TopicCreateReplyResponseData | undefined> {
      // The values here are used to initialize the reply
      const requestData: TopicCreateReplyRequestData = {
        tid: this.replyDraft.tid,
        to_uid: this.replyDraft.toUid,
        to_floor: this.replyDraft.toFloor,
        tags: this.replyDraft.tags,
        content: this.replyDraft.content,
      }

      if (!checkReplyPublish(requestData.tags, requestData.content)) {
        return
      }

      return await postReplyByPidApi(requestData)
    },

    // Update a reply
    async updateReply(): Promise<TopicUpdateReplyResponseData | undefined> {
      const requestData: TopicUpdateReplyRequestData = {
        tid: this.replyRewrite.tid,
        rid: this.replyRewrite.rid,
        content: this.replyRewrite.content,
        tags: this.replyRewrite.tags,
      }

      if (!checkReplyPublish(requestData.tags, requestData.content)) {
        return
      }

      return await updateReplyApi(requestData)
    },

    // Reset reply draft to its original value, used for the reply publish button
    resetReplyDraft() {
      this.replyDraft.tid = 0
      this.replyDraft.toUserName = ''
      this.replyDraft.toUid = 0
      this.replyDraft.content = ''
      this.replyDraft.tags = []
      this.replyDraft.toFloor = 0

      this.isSaveReply = false
    },

    // Reset data for re-editing a reply
    resetRewriteReplyData() {
      this.replyRewrite.tid = 0
      this.replyRewrite.rid = 0
      this.replyRewrite.content = ''
      this.replyRewrite.tags = []

      this.isReplyRewriting = false
    },
  },
})
