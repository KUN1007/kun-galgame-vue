export interface EditCreateTopicRequestData {
  title: string
  content: string
  time: number
  tags: Array<string>
  category: Array<string>
}

export interface EditKUNGalgameTopic {
  tid: number
}

// Request data format for updating a topic
export interface EditUpdateTopicRequestData {
  tid: number
  title: string
  content: string
  tags: string[]
  category: string[]
  edited: number
}

// Request data format for getting hot tags
export interface EditGetHotTagsRequestData {
  limit: number
}

// Response data format for creating a topic
export type EditCreateTopicResponseData =
  KUNGalgameResponseData<EditKUNGalgameTopic>

// Response data format for updating a topic
export type EditUpdateTopicResponseData = KUNGalgameResponseData<{}>

// Response data format for hot tags
export type EditGetHotTagsResponseData = KUNGalgameResponseData<string[]>
