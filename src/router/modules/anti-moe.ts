import type { KUNRouteType } from '@/router/types'

const nonMoe: KUNRouteType[] = [
  // KUNGalgame 不萌萌页
  {
    name: 'NonMoe',
    path: '/non-moe',
    component: () => import('@/views/non-moe/NonMoe.vue'),
    meta: {
      permission: 'kungalgamer',
      title: '不萌萌',
    },
  },
]

export default nonMoe
