interface nav {
  index: number
  name: string
  router: string
}

export const navBarRoute: nav[] = [
  {
    index: 1,
    name: '个人信息',
    router: 'info',
  },
  {
    index: 2,
    name: '信息设置',
    router: 'settings',
  },
  {
    index: 3,
    name: '邮箱密码',
    router: 'password',
  },
  {
    index: 4,
    name: '发的话题',
    router: 'published-topic',
  },
  {
    index: 5,
    name: '赞的话题',
    router: 'liked-topic',
  },
  {
    index: 6,
    name: '推的话题',
    router: 'upvote-topic',
  },
  {
    index: 7,
    name: '发的回复',
    router: 'reply',
  },
  {
    index: 8,
    name: '发的评论',
    router: 'comment',
  },
]
