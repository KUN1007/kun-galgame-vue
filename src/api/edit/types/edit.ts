export interface EditCreateTopicRequestData {
  title: string
  content: string
  time: number
  tags: Array<string>
  category: Array<string>
  uid: number
}

export interface EditKUNGalgameTopic {
  tid: number
  // title: string
  // content: string
  // uid: number
  // tags: Array<string>
  // category: Array<string>
  // rid: Array<number>
  // time: number
  // popularity: number
  // upvotes: number
  // views: number
  // likes: number
  // replies: number
  // share: number
  // comments: number
  // dislikes: number
  // status: number
  // edited: number
}

// 获取热门 tag 的请求数据格式
export interface EditGetHotTagsRequestData {
  limit: number
}

// 创建话题响应数据的格式
export type EditCreateTopicResponseData =
  KUNGalgameResponseData<EditKUNGalgameTopic>

// 热门 tag 的返回数据格式
export type EditGetHotTagsResponseData = KUNGalgameResponseData<string[]>
