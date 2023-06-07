import { type RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/KUNGalgameAPP.vue')

const pool: RouteRecordRaw[] = [
  // KUNGalgame 帖子池页
  {
    name: 'Pool',
    path: '/pool',
    component: () => import('@/views/pool/Pool.vue'),
    meta: {
      permission: 'kungalgamer',
      title: '帖子池',
    },
  },
]

export default pool
