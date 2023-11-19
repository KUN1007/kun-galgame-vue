interface PoolTopic {
  tid: number
  title: string
  views: number
  likesCount: number
  time: number
  content: string
}

export interface PoolTopicsRequestData {
  page: number
  limit: number
  sortField: string
  sortOrder: string
}

export type PoolTopicResponseData = KUNGalgameResponseData<PoolTopic[]>
