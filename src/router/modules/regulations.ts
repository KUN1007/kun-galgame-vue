import type { KUNRouteType } from '@/router/types'

const bylaw: KUNRouteType[] = [
  // KUNGalgame 执行条例
  {
    name: 'Bylaw',
    path: '/bylaw',
    component: () => import('@/views/bylaw/Bylaw.vue'),
    meta: {
      permission: 'kungalgamer',
      title: '执行条例（试行）',
    },
  },
]

export default bylaw
