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
  likes: number[]
  replies: number[]
  comments: number
  time: number
  content: string
  upvotes: number[]
  tags: string[]
  category: string[]
  popularity: number
  user: HomeUserInfo
}

// 首页响应数据的格式

// 左侧热门话题 10 个
export type HomeHotTopicResponseData = KUNGalgameResponseData<HomeHotTopic[]>

// 左侧最新话题 10 个
export type HomeNewTopicResponseData = KUNGalgameResponseData<HomeNewTopic[]>

// 中间展示的话题
export type HomeTopicResponseData = KUNGalgameResponseData<HomeTopic[]>
