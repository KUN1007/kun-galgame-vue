export interface CreateTopicRequestData {
  title: string
  content: string
  time: string
  tags: string
  category: string
  uid: string
}

export interface KUNGalgameTopic {
  tid: number
  title: string
  content: string
  uid: number
  tags: Array<string>
  category: Array<string>
  rid: Array<number>
  time: string
  popularity: number
  upvotes: number
  views: number
  likes: number
  replies: number
  share: number
  comments: number
  dislikes: number
  status: number
  edited: number
}

// 登录响应数据的格式
export type CreateTopicResponseData = KUNGalgameResponseData<KUNGalgameTopic>
