import { type RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/KUNGalgameAPP.vue')

const balance: RouteRecordRaw[] = [
  // KUNGalgame 收支公示
  {
    path: '/balance',
    component: Layout,
    children: [
      {
        name: 'Balance',
        path: '',
        component: () => import('@/views/balance/Balance.vue'),
        meta: {
          title: 'balance',
        },
      },
    ],
  },
]

export default balance
