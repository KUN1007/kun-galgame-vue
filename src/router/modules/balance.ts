import type { KUNRouteType } from '@/router/types'

const balance: KUNRouteType[] = [
  // KUNGalgame 收支公示
  {
    name: 'Balance',
    path: '/balance',
    component: () => import('@/views/balance/Balance.vue'),
    meta: {
      permission: 'kungalgamer',
      title: '收支公示',
    },
  },
]

export default balance
