type SortOrder = 'asc' | 'desc'

type TopicSortFieldRanking =
  | 'popularity'
  | 'views'
  | 'upvotes_count'
  | 'likes_count'
  | 'replies_count'
  | 'comments'

type UserSortFieldRanking =
  | 'moemoepoint'
  | 'upvote'
  | 'like'
  | 'topic_count'
  | 'reply_count'
  | 'comment_count'

export interface RankingGetTopicsRequestData {
  page: number
  limit: number
  sortField: TopicSortFieldRanking
  sortOrder: SortOrder
}

export interface RankingTopics {
  tid: number
  title: string
  field: string
}

export interface RankingGetUserRequestData {
  page: number
  limit: number
  sortField: UserSortFieldRanking
  sortOrder: SortOrder
}

export interface RankingUsers {
  uid: number
  name: string
  avatar: string
  field: string
}

export type RankingGetTopicsResponseData = KUNGalgameResponseData<
  RankingTopics[]
>

export type RankingGetUsersResponseData = KUNGalgameResponseData<RankingUsers[]>
