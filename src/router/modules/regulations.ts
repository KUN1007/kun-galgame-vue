import { type RouteRecordRaw } from 'vue-router'

const bylaw: RouteRecordRaw[] = [
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
