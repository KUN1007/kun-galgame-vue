/* 编辑区的 store */
import { defineStore } from 'pinia'
import { createNewTopicApi } from '@/api/edit/index'
import {
  CreateTopicRequestData,
  CreateTopicResponseData,
} from '@/api/edit/types/edit'

interface Topic {
  // 话题标题
  title: string
  // 话题内容
  content: string
  // 话题标签
  tags: Array<string>
  // 话题分区
  category: Array<string>
}

export const useKUNGalgameEditStore = defineStore({
  id: 'edit',
  persist: true,
  state: (): Topic => ({
    title: '',
    content: '',
    tags: [],
    category: [],
  }),
  getters: {},
  actions: {
    // 保存草稿
    saveTopicDraft(
      title: string,
      content: string,
      tags: Array<string>,
      category: Array<string>
    ) {
      this.title = title
      this.content = content
      this.tags = tags
      this.category = category
    },
    // 清空草稿
    clearTopicDraft() {
      this.title = ''
      this.content = ''
      this.tags = []
      this.category = []
    },
    // 创建话题
    createNewTopic(
      createTopicRequestData: CreateTopicRequestData
    ): Promise<CreateTopicResponseData> {
      return new Promise((resolve, reject) => {
        createNewTopicApi(createTopicRequestData)
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
