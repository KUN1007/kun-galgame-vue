/* 编辑区的 store */
import { defineStore } from 'pinia'
import { postEditNewTopicApi } from '@/api/index'
import {
  EditCreateTopicRequestData,
  EditCreateTopicResponseData,
} from '@/api/index'

interface Topic {
  /**
   * 编辑器相关
   * @param {number} editorHeight - 编辑器高度
   */
  editorHeight: number

  /**
   * 话题相关
   * @param {string} title - 话题标题
   * @param {string} content - 话题内容（富文本）
   * @param {Array<string>} tags - 话题标签
   * @param {Array<string>} category - 话题类别
   * @param {boolean} isSave - 是否保存话题草稿
   */
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
    editorHeight: 300,
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
