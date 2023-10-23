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
  keywords: string
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

// 10 hot topics on the left side
export type HomeHotTopicResponseData = KUNGalgameResponseData<HomeHotTopic[]>

// 10 latest topics on the left side
export type HomeNewTopicResponseData = KUNGalgameResponseData<HomeNewTopic[]>

// Topics displayed in the middle
export type HomeTopicResponseData = KUNGalgameResponseData<HomeTopic[]>
