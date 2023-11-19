export interface TechniqueTopic {
  tid: number
  title: string
  views: number
  likesCount: number
  replyCount: number
  content: string
  tags: string[]
}

export interface TechniqueTopicsRequestData {
  page: number
  limit: number
  sortField: string
  sortOrder: string
}

export type TechniqueTopicResponseData = KUNGalgameResponseData<
  TechniqueTopic[]
>
