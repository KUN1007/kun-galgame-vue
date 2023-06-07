import { type RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/KUNGalgameAPP.vue')

const index: RouteRecordRaw[] = [
  // KUNGalgame 主页
  {
    path: '/',
    component: Layout,
    redirect: '/kun',
    children: [
      {
        name: 'index',
        path: 'kun',
        component: () => import('@/views/Home/KUNGalgameMainPage.vue'),
        meta: {
          permission: 'kungalgamer',
          title: '主页',
        },
      },
    ],
  },
]

export default index
