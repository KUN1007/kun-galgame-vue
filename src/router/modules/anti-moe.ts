import type { KUNRouteType } from '@/router/types'

const antiMoe: KUNRouteType[] = [
  // KUNGalgame 不萌萌页
  {
    name: 'AntiMoe',
    path: '/anti-moe',
    component: () => import('@/views/anti-moe/AntiMoe.vue'),
    meta: {
      permission: 'kungalgamer',
      title: '不萌萌',
    },
  },
]

export default antiMoe
