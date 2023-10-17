export interface RankingGetTopicsRequestData {
  page: number
  limit: number
  sortField: string
  sortOrder: string
}

export interface RankingTopics {
  tid: number
  title: string
  field: string
}

export interface RankingGetUserRequestData {}

export type RankingGetTopicsResponseData = KUNGalgameResponseData<
  RankingTopics[]
>
