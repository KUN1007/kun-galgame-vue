import type { KUNRouteType } from '@/router/types'

const kungalgame: KUNRouteType[] = [
  // KUNGalgame 关于我们页
  {
    name: 'KUNGalgame',
    path: '/kungalgame',
    component: () => import('@/views/kungalgame/KUNGalgame.vue'),
    meta: {
      permission: 'kungalgamer',
      title: '帖子池',
    },
  },
]

export default kungalgame
