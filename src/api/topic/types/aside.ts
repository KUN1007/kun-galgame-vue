// 话题详情界面的侧边栏

export interface TopicAside {
  title: string
  tid: number
}

export interface TopicAsideOtherTagRequestData {
  // 本话题的 tags
  tags: string[]
  // 当前话题的 tid，因为相同标签下的其它话题不包括本话题
  tid: number
}

export interface TopicAsideMasterRequestData {
  // 楼主 id
  uid: number
  // 当前话题的 tid，因为相同标签下的其它话题不包括本话题
  tid: string
}

// Aside 响应数据的格式
export type TopicAsideResponseData = KUNGalgameResponseData<TopicAside[]>
