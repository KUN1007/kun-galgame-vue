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
   * @param {'' | 'essential' | 'minimal' | 'full'} mode - 编辑器 toolbar 模式
   * @param {'snow' | 'bubble'} theme - 编辑器主题
   */
  editorHeight: number
  mode: '' | 'essential' | 'minimal' | 'full'
  theme: 'snow' | 'bubble'

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
    isSave: false,
    mode: '',
    theme: 'snow',

    editorHeight: 300,
    title: '',
    content: '',
    tags: [],
    category: [],
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
