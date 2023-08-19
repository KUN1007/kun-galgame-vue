// 发帖人，评论人的数据接口
export interface KUNGalgameAuthor {
  // 头像
  avatar: string
  // 名字
  name: string
  // 萌萌点
  moemoePoints: number
}

// 话题评论接口
export interface KUNGalgameTopicComment {
  // 评论 ID
  commentId: number
  // 评论者的头像
  commenterAvatar: string
  // 评论者的名字
  commenterName: string
  // 评论给谁
  commentedTo: string
  // 评论的点赞数
  commentUpvotes: number
  // 评论的踩
  commentDislikes: number
  // 评论的内容
  commentContent: string
}

// 话题回复接口
export interface KUNGalgameTopicReply {
  // 回复的 ID
  replyId: number
  //   回复者的个人信息
  replier: KUNGalgameAuthor
  //   回复给谁
  repliedTo: string
  //   是否重新编辑
  isEdited: boolean
  //   重新编辑的时间戳
  editedTimestamp: number
  //   回复的时间戳
  replyTime: number
  //   回复内容
  replyContent: string
  //   回复的被推数
  replyUpvotes: number
  //   回复的点赞数
  replyLikes: number
  //   回复的点踩数
  replyDislikes: number
  //   回复的评论
  replyComments: KUNGalgameTopicComment[]
  //   回复的数量
  replyCount: number
}

// 单个话题信息接口
export interface KUNGalgameTopic {
  // 话题 ID
  topicId: number
  //   话题标题
  topicTitle: string
  //   话题的楼层数
  topicFloorCount: number
  //   话题的内容
  topicContent: string
  //   话题的发布时间
  topicPublishTime: number
  //   话题的热度值
  topicPopularity: number
  //   话题的标签
  topicTags: string[]
  //   话题的被推数
  topicUpvotes: number
  //   话题的点击数
  topicViews: number
  //   话题的点赞数
  topicLikes: number
  //   话题的点踩数
  topicDislikes: number
  //   话题的回复数
  topicReplyCount: 1
  //   话题的分区
  topicCategory: string[]
  //   话题的状态
  topicStatus: number
  //   话题是否被重新编辑
  topicIsEdited: false
  //   话题的发布者
  topicAuthor: KUNGalgameAuthor
}
