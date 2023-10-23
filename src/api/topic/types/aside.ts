// Topic detail page sidebar

export interface TopicAside {
  title: string
  tid: number
}

export interface TopicAsideOtherTagRequestData {
  // Tags of the current topic
  tags: string[]
  // The tid of the current topic, as other topics under the same tag should not include the current one
  tid: number
}

export interface TopicAsideMasterRequestData {
  // The tid of the current topic, as other topics under the same tag should not include the current one
  tid: string
}

// Format of Aside response data
export type TopicAsideResponseData = KUNGalgameResponseData<TopicAside[]>
