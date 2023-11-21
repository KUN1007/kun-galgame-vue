import { defineStore } from 'pinia'
import { postNewTopicApi, updateNewTopicApi, getTopTagsApi } from '@/api'
import {
  EditCreateTopicRequestData,
  EditCreateTopicResponseData,
  EditUpdateTopicRequestData,
  EditUpdateTopicResponseData,
  EditGetHotTagsRequestData,
  EditGetHotTagsResponseData,
} from '@/api'
import { EditStore } from '../types/edit'
import { checkTopicPublish } from '../utils/checkTopicPublish'

export const useKUNGalgameEditStore = defineStore({
  id: 'KUNGalgameEdit',
  persist: true,
  state: (): EditStore => ({
    editorHeight: 300,
    textCount: 0,

    title: '',
    content: '',
    tags: [],
    category: [],
    isShowHotKeywords: true,
    isSaveTopic: false,

    topicRewrite: {
      tid: 0,
      title: '',
      content: '',
      tags: [],
      category: [],

      isTopicRewriting: false,
    },
  }),
  getters: {},
  actions: {
    // Create a new topic
    async createNewTopic(): Promise<EditCreateTopicResponseData | undefined> {
      // Data for the current topic
      const requestData: EditCreateTopicRequestData = {
        title: this.title,
        content: this.content,
        time: Date.now(),
        tags: this.tags,
        category: this.category,
      }
      // If the topic data is invalid, return directly
      if (!checkTopicPublish(this.textCount, requestData)) {
        return
      }
      // If valid, make an API request to publish the topic
      return await postNewTopicApi(requestData)
    },

    // Update a topic
    async rewriteTopic(): Promise<EditUpdateTopicResponseData | undefined> {
      const requestData: EditUpdateTopicRequestData = {
        tid: this.topicRewrite.tid,
        title: this.topicRewrite.title,
        content: this.topicRewrite.content,
        tags: this.topicRewrite.tags,
        category: this.topicRewrite.category,
        edited: Date.now(),
      }

      // If the topic data is invalid, return directly
      if (!checkTopicPublish(this.textCount, requestData)) {
        return
      }

      return await updateNewTopicApi(requestData)
    },

    // Get popular tags
    async getHotTags(limit: number): Promise<EditGetHotTagsResponseData> {
      const requestData: EditGetHotTagsRequestData = { limit }
      return await getTopTagsApi(requestData)
    },

    // Reset topic draft data for publishing
    resetTopicData() {
      this.textCount = 0
      this.title = ''
      this.content = ''
      this.tags = []
      this.category = []

      this.isSaveTopic = false
    },

    // Reset data for re-editing a topic
    resetRewriteTopicData() {
      this.textCount = 0
      this.topicRewrite.title = ''
      this.topicRewrite.content = ''
      this.topicRewrite.tags = []
      this.topicRewrite.category = []

      this.topicRewrite.isTopicRewriting = false
    },
  },
})
