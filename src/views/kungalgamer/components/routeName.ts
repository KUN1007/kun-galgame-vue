interface nav {
  index: number
  name: string
  router: string
  permission: number[]
}

export const navBarRoute: nav[] = [
  {
    index: 1,
    name: '个人信息',
    router: 'info',
    permission: [1, 2, 3, 4],
  },
  {
    index: 2,
    name: '信息设置',
    router: 'settings',
    permission: [4],
  },
  {
    index: 3,
    name: '邮箱密码',
    router: 'password',
    permission: [4],
  },
  {
    index: 4,
    name: '发的话题',
    router: 'published-topic',
    permission: [1, 2, 3, 4],
  },
  {
    index: 5,
    name: '赞的话题',
    router: 'liked-topic',
    permission: [2, 3, 4],
  },
  {
    index: 6,
    name: '推的话题',
    router: 'upvote-topic',
    permission: [2, 3, 4],
  },
  {
    index: 7,
    name: '发的回复',
    router: 'reply',
    permission: [1, 2, 3, 4],
  },
  {
    index: 8,
    name: '发的评论',
    router: 'comment',
    permission: [1, 2, 3, 4],
  },
]
