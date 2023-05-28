import type { KUNRouteType } from '@/router/types'

const topic: KUNRouteType[] = [
  // KUNgalgame 帖子详情页
  {
    name: 'Topic',
    path: '/topic',
    // 路由懒加载
    component: () => import('@/views/topic/KUNGalgameTopicPage.vue'),
    meta: {
      permission: 'kungalgamer',
      title: '帖子',
    },
  },
]

export default topic
