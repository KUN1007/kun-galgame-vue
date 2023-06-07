import { type RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/KUNGalgameAPP.vue')

const bylaw: RouteRecordRaw[] = [
  // KUNGalgame 执行条例
  {
    path: '/bylaw',
    component: Layout,
    redirect: '/bylaw/index',
    children: [
      {
        name: 'Bylaw',
        path: 'index',
        component: () => import('@/views/bylaw/Bylaw.vue'),
        meta: {
          permission: 'kungalgamer',
          title: '执行条例（试行）',
        },
      },
    ],
  },
]

export default bylaw
