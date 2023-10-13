import { type RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/KUNGalgameAPP.vue')

const pool: RouteRecordRaw[] = [
  // KUNGalgame 话题池页
  {
    path: '/pool',
    component: Layout,
    children: [
      {
        name: 'Pool',
        path: '',
        component: () => import('@/views/pool/Pool.vue'),
        meta: {
          title: 'pool',
        },
      },
    ],
  },
]

export default pool
