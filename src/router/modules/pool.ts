import { type RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/KUNGalgameAPP.vue')

const pool: RouteRecordRaw[] = [
  // KUNGalgame 话题池页
  {
    path: '/pool',
    component: Layout,
    redirect: '/pool/index',
    children: [
      {
        name: 'Pool',
        path: 'index',
        component: () => import('@/views/pool/Pool.vue'),
        meta: {
          permission: 'kungalgamer',
          title: '话题池',
        },
      },
    ],
  },
]

export default pool
