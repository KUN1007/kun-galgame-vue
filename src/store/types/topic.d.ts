// 回复的缓存
interface ReplyDraft {
  /**
   * 编辑器相关
   * @param {number} editorHeight - 编辑器高度
   * @param {'' | 'essential' | 'minimal' | 'full'} mode - 编辑器 toolbar 模式
   * @param {'snow' | 'bubble'} theme - 编辑器主题
   */
  editorHeight: number
  textCount: number
  // 这里仅支持三种模式
  mode: '' | 'essential' | 'minimal'
  theme: 'snow' | 'bubble'
  // 是否显示热门关键词
  isShowHotKeywords: boolean

  // 当前话题的 id
  tid: number
  // 回复给谁，用于回复面板展示
  toUserName: string
  to_uid: number
  content: string
  tags: string[]
  // 被回复的人的楼层数，用于跳转
  to_floor: number

  // 是否保存回复
  isSaveReply: boolean
}

// 获取回复的请求
interface ReplyRequest {
  page: number
  limit: number
  sortField: string
  sortOrder: 'asc' | 'desc'
}

// 更新评论的缓存
interface ReplyRewrite {
  tid: number
  rid: number
  content: string
  tags: string[]

  // 回复是否正在被重新编辑
  isReplyRewriting: boolean
}

// 话题页面的 store
export interface TopicStore {
  // 是否正在被编辑
  isEdit: boolean
  // 是否显示高级编辑模式
  isShowAdvance: boolean
  // 是否激活左侧交互面板
  isActiveAside: boolean
  // 是否滚动到顶部
  isScrollToTop: boolean
  // 加载完了是否还需要加载
  isLoading: boolean
  // 要滚动到的回复 id
  scrollToReplyId: number

  // 回复面板的宽度
  replyPanelWidth: number
  // 回复的缓存
  replyDraft: ReplyDraft
  // 获取回复的请求接口格式
  replyRequest: ReplyRequest
  // 更新评论的缓存
  replyRewrite: ReplyRewrite
}
