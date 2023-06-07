import { type RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/KUNGalgameAPP.vue')

const topic: RouteRecordRaw[] = [
  // KUNgalgame 帖子详情页
  {
    path: '/topic',
    component: Layout,
    redirect: '/topic/index',
    children: [
      {
        name: 'Topic',
        path: 'index',
        // 路由懒加载
        component: () => import('@/views/topic/KUNGalgameTopicPage.vue'),
        meta: {
          permission: 'kungalgamer',
          title: '帖子',
        },
      },
    ],
  },
]

export default topic
