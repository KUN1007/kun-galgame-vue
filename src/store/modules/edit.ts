/* 编辑区的 store */
import { defineStore } from 'pinia'
// api
import { postNewTopicApi, updateNewTopicApi, getTopTagsApi } from '@/api'
// api 请求格式
import {
  EditCreateTopicRequestData,
  EditCreateTopicResponseData,
  EditUpdateTopicRequestData,
  EditUpdateTopicResponseData,
  EditGetHotTagsRequestData,
  EditGetHotTagsResponseData,
} from '@/api'
// store interface
import { EditStore } from '../types/edit'
// some utils to check topic publish data is valid
import { checkTopicPublish } from '../utils/checkTopicPublish'

export const useKUNGalgameEditStore = defineStore({
  id: 'edit',
  persist: true,
  state: (): EditStore => ({
    editorHeight: 300,
    textCount: 0,
    mode: '',
    theme: 'snow',

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
    // 创建话题
    async createNewTopic(): Promise<EditCreateTopicResponseData | undefined> {
      // 当前话题的数据
      const requestData: EditCreateTopicRequestData = {
        title: this.title,
        content: this.content,
        time: Date.now(),
        tags: this.tags,
        category: this.category,
      }
      // 检查话题数据不合法直接返回
      if (!checkTopicPublish(this.textCount, requestData)) {
        return
      }
      // 合法则请求接口发布话题
      return await postNewTopicApi(requestData)
    },
    // 更新话题
    async rewriteTopic(): Promise<EditUpdateTopicResponseData | undefined> {
      const requestData: EditUpdateTopicRequestData = {
        tid: this.topicRewrite.tid,
        title: this.topicRewrite.title,
        content: this.topicRewrite.content,
        tags: this.topicRewrite.tags,
        category: this.topicRewrite.category,
      }

      // 检查话题数据不合法直接返回
      if (!checkTopicPublish(this.textCount, requestData)) {
        return
      }

      return await updateNewTopicApi(requestData)
    },
    // 获取热门 tags
    async getHotTags(limit: number): Promise<EditGetHotTagsResponseData> {
      const requestData: EditGetHotTagsRequestData = { limit }
      return await getTopTagsApi(requestData)
    },
    // 重置话题草稿数据，用于发布时
    resetTopicData() {
      this.textCount = 0
      this.title = ''
      this.content = ''
      this.tags = []
      this.category = []

      this.isSaveTopic = false
    },
    // 重置重新发布话题数据，用于重新编辑
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
