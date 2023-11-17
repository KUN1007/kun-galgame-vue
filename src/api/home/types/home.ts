export interface HomeSearchTopic {
  tid: number
  title: string
  content: string
  category: string[]
}

export interface HomeSearchTopicRequestData {
  keywords: string
  category: string
  page: number
  limit: number
  sortField: string
  sortOrder: string
}

interface HomeUserInfo {
  uid: number
  avatar: string
  name: string
}

export interface HomeHotTopic {
  tid: number
  title: string
  popularity: number
}

export interface HomeNewTopic {
  tid: number
  title: string
  time: number
}

export interface HomeTopicRequestData {
  category: string
  page: number
  limit: number
  sortField: string
  sortOrder: string
}

export interface HomeTopic {
  tid: number
  title: string
  views: number
  upvotesCount: number
  likesCount: number
  repliesCount: number
  comments: number

  time: number
  content: string
  tags: string[]
  category: string[]
  popularity: number
  user: HomeUserInfo
  status: number
  upvote_time: number
}

export type HomeSearchTopicResponseData = KUNGalgameResponseData<
  HomeSearchTopic[]
>

export type HomeHotTopicResponseData = KUNGalgameResponseData<HomeHotTopic[]>

export type HomeNewTopicResponseData = KUNGalgameResponseData<HomeNewTopic[]>

export type HomeTopicResponseData = KUNGalgameResponseData<HomeTopic[]>
