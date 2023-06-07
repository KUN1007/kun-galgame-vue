import { type RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/KUNGalgameAPP.vue')

const balance: RouteRecordRaw[] = [
  // KUNGalgame 收支公示
  {
    path: '/balance',
    component: Layout,
    redirect: '/balance/index',
    children: [
      {
        name: 'Balance',
        path: 'index',
        component: () => import('@/views/balance/Balance.vue'),
        meta: {
          permission: 'kungalgamer',
          title: '收支公示',
        },
      },
    ],
  },
]

export default balance
