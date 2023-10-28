// Ahahaha, I just want to use "rewrite" in the name to tease you
interface TopicRewrite {
  // Topic ID
  tid: number
  // Topic title
  title: string
  // Topic content
  content: string
  // Topic tags
  tags: Array<string>
  // Topic category
  category: Array<string>

  // Whether the topic is being rewritten
  isTopicRewriting: boolean
}

export interface EditStore {
  editorHeight: number
  textCount: number

  /**
   * Topic related
   * @param {string} title - Topic title
   * @param {string} content - Topic content (rich text)
   * @param {Array<string>} tags - Topic tags
   * @param {Array<string>} category - Topic category
   * @param {boolean} isSave - Whether to save the topic draft
   */
  // Topic title
  title: string
  // Topic content
  content: string
  // Topic tags
  tags: Array<string>
  // Topic category
  category: Array<string>
  // Whether to display hot keywords
  isShowHotKeywords: boolean
  // Whether to save the topic
  isSaveTopic: boolean

  /* Rewrite a topic */
  topicRewrite: TopicRewrite
}
