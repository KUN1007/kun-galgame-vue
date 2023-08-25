interface UserInfo {
  uid: number
  avatar: string
  name: string
}

export interface HotTopic {
  tid: number
  title: string
  popularity: number
}

export interface NewTopic {
  tid: number
  title: string
  time: string
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
  likes: number
  replies: number
  comments: number
  time: string
  content: string
  upvotes: number
  tags: Array<string>
  category: Array<string>
  popularity: number
  uid: UserInfo
}

// 首页响应数据的格式

// 左侧热门话题 10 个
export type HotTopicResponseData = KUNGalgameResponseData<HotTopic[]>

// 左侧最新话题 10 个
export type NewTopicResponseData = KUNGalgameResponseData<NewTopic[]>

// 中间展示的话题
export type HomeTopicResponseData = KUNGalgameResponseData<HomeTopic[]>
