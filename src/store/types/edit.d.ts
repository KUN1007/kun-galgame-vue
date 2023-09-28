// 啊哈哈哈，我就是要起 rewrite 这个名字，来打我呀
interface TopicRewrite {
  // 话题 id
  tid: number
  // 话题标题
  title: string
  // 话题内容
  content: string
  // 话题标签
  tags: Array<string>
  // 话题分区
  category: Array<string>

  // 是否正在重新编辑话题
  isTopicRewriting: boolean
}

export interface EditStore {
  /**
   * 编辑器相关
   * @param {number} editorHeight - 编辑器高度
   * @param {'' | 'essential' | 'minimal' | 'full'} mode - 编辑器 toolbar 模式
   * @param {'snow' | 'bubble'} theme - 编辑器主题
   */
  editorHeight: number
  textCount: number
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
  // 是否显示热门关键词
  isShowHotKeywords: boolean
  // 是否保存话题
  isSaveTopic: boolean

  /* 重新编辑话题 */
  topicRewrite: TopicRewrite
}
