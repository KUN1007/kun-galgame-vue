import { type RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/KUNGalgameAPP.vue')

const index: RouteRecordRaw[] = [
  // KUNGalgame 主页
  {
    path: '/',
    component: Layout,
    redirect: '/kun',
    alias: '/index',
    children: [
      {
        name: 'KUN',
        path: 'kun',
        component: () => import('@/views/Home/KUNGalgameMainPage.vue'),
        meta: {
          permission: 'kungalgamer',
          title: '主页',
          // transition: 'animate__fadeIn',
        },
      },
    ],
  },
]

export default index
