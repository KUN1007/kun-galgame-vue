// Reply cache
interface ReplyDraft {
  /**
   * Editor related
   * @param {number} editorHeight - Editor height
   * @param {'' | 'essential' | 'minimal' | 'full'} mode - Editor toolbar mode
   * @param {'snow' | 'bubble'} theme - Editor theme
   */
  editorHeight: number
  textCount: number
  // Only three modes are supported here
  mode: '' | 'essential' | 'minimal'
  theme: 'snow' | 'bubble'
  // Whether to display hot keywords
  isShowHotKeywords: boolean

  // Current topic ID
  tid: number
  // Who to reply to, used for reply panel display
  toUserName: string
  to_uid: number
  content: string
  tags: string[]
  // Floor number of the person being replied to, used for navigation
  to_floor: number

  // Whether to save the reply
  isSaveReply: boolean
}

// Request to get replies
interface ReplyRequest {
  page: number
  limit: number
  sortField: string
  sortOrder: 'asc' | 'desc'
}

// Update comment cache
interface ReplyRewrite {
  tid: number
  rid: number
  content: string
  tags: string[]

  // Whether the reply is being rewritten
  isReplyRewriting: boolean
}

// Topic page store
export interface TopicStore {
  // Whether it's being edited
  isEdit: boolean
  // Whether to show advanced editing mode
  isShowAdvance: boolean
  // Whether to activate the left interaction panel
  isActiveAside: boolean
  // Whether to scroll to the top
  isScrollToTop: boolean
  // Whether to continue loading after it's done
  isLoading: boolean
  // Reply ID to scroll to
  scrollToReplyId: number

  // Width of the reply panel
  replyPanelWidth: number
  // Reply cache
  replyDraft: ReplyDraft
  // Request format for getting replies
  replyRequest: ReplyRequest
  // Update comment cache
  replyRewrite: ReplyRewrite
}
