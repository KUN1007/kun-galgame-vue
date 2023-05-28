import type { KUNRouteType } from '@/router/types'

const index: KUNRouteType[] = [
  // KUNGalgame 主页
  {
    name: 'index',
    path: '/',
    component: () => import('@/views/Home/KUNGalgameMainPage.vue'),
    meta: {
      permission: 'kungalgamer',
      title: '主页',
    },
  },
]

export default index
