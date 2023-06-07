import { type RouteRecordRaw } from 'vue-router'

const balance: RouteRecordRaw[] = [
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
