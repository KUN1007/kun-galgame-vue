/* 编辑区的 store */
import { defineStore } from 'pinia'
import { postEditNewTopicApi } from '@/api/index'
import {
  EditCreateTopicRequestData,
  EditCreateTopicResponseData,
} from '@/api/index'

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
      createTopicRequestData: EditCreateTopicRequestData
    ): Promise<EditCreateTopicResponseData> {
      return new Promise((resolve, reject) => {
        postEditNewTopicApi(createTopicRequestData)
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
