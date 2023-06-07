import { type RouteRecordRaw } from 'vue-router'

const topic: RouteRecordRaw[] = [
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
