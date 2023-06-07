import { type RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/KUNGalgameAPP.vue')

const nonMoe: RouteRecordRaw[] = [
  // KUNGalgame 不萌萌页
  {
    path: '/non-moe',
    component: Layout,
    redirect: '/non-moe/index',
    children: [
      {
        name: 'NonMoe',
        path: 'index',
        component: () => import('@/views/non-moe/NonMoe.vue'),
        meta: {
          permission: 'kungalgamer',
          title: '不萌萌',
        },
      },
    ],
  },
]

export default nonMoe
