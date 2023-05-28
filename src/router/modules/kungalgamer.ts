import type { KUNRouteType } from '@/router/types'

const kungalgamer: KUNRouteType[] = [
  // KUNGalgame 用户页
  {
    name: 'KUNGalgamer',
    path: '/kungalgamer',
    component: () => import('@/views/kungalgamer/KUNGalgamer.vue'),
    meta: {
      permission: 'kungalgamer',
      title: '用户页',
    },
  },
]

export default kungalgamer
