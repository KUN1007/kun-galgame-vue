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
  // 是否保存
  isSave: boolean
}

export const useKUNGalgameEditStore = defineStore({
  id: 'edit',
  persist: true,
  state: (): Topic => ({
    title: '',
    content: '',
    tags: [],
    category: [],
    isSave: false,
  }),
  getters: {},
  actions: {
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
