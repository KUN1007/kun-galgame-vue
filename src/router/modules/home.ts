import { type RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/KUNGalgameAPP.vue')

const index: RouteRecordRaw[] = [
  // KUNGalgame 主页
  {
    path: '/',
    component: Layout,
    alias: '/kun',
    children: [
      {
        name: 'KUN',
        path: '',
        component: () => import('@/views/Home/KUNGalgameMainPage.vue'),
        meta: {
          title: '主页',
        },
      },
    ],
  },
]

export default index
