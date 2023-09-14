import { type RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/KUNGalgameAPP.vue')

const topic: RouteRecordRaw[] = [
  // KUNgalgame 话题详情页
  {
    path: '/topic',
    component: Layout,
    redirect: '/kun',
    children: [
      {
        name: 'Topic',
        path: ':tid',
        // 路由懒加载
        component: () => import('@/views/topic/KUNGalgameTopicPage.vue'),
        // 使路由参数作为组件的 props 传递
        props: true,
        meta: {
          transition: 'animate__fadeIn animate__faster',
          permission: 'kungalgamer',
          title: '话题',
        },
      },
    ],
  },
]

export default topic
