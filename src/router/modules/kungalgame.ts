import type { KUNRouteType } from '@/router/types'

const kungalgame: KUNRouteType[] = [
  // KUNGalgame 关于我们页
  {
    name: 'KUNGalgame',
    path: '/kungalgame',
    component: () => import('@/views/kungalgame/KUNGalgame.vue'),
    meta: {
      permission: 'kungalgamer',
      title: '关于我们',
    },
  },
]

export default kungalgame
