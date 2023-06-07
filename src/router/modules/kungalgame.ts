import { type RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/KUNGalgameAPP.vue')

const kungalgame: RouteRecordRaw[] = [
  // KUNGalgame 关于我们页
  {
    path: '/kungalgame',
    component: Layout,
    redirect: '/kungalgame/index',
    children: [
      {
        name: 'KUNGalgame',
        path: 'index',
        component: () => import('@/views/kungalgame/KUNGalgame.vue'),
        meta: {
          permission: 'kungalgamer',
          title: '关于我们',
        },
      },
    ],
  },
]

export default kungalgame
