import { type RouteRecordRaw } from 'vue-router'

const nonMoe: RouteRecordRaw[] = [
  // KUNGalgame 不萌萌页
  {
    name: 'NonMoe',
    path: '/non-moe',
    component: () => import('@/views/non-moe/NonMoe.vue'),
    meta: {
      permission: 'kungalgamer',
      title: '不萌萌',
    },
  },
]

export default nonMoe
