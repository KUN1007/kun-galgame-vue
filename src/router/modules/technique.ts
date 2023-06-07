import { type RouteRecordRaw } from 'vue-router'

const technique: RouteRecordRaw[] = [
  // KUNGalgame 技术交流页
  {
    name: 'Technology',
    path: '/technique',
    component: () => import('@/views/technique/Technique.vue'),
    meta: {
      permission: 'kungalgamer',
      title: '技术交流',
    },
  },
]

export default technique
