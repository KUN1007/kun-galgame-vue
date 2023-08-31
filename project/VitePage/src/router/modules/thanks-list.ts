import { type RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/KUNGalgameAPP.vue')

const thanksList: RouteRecordRaw[] = [
  // KUNGalgame 感谢名单
  {
    path: '/thanks-list',
    component: Layout,
    redirect: '/thanks-list/index',
    children: [
      {
        name: 'ThanksList',
        path: 'index',
        component: () => import('@/views/thanks-list/ThanksList.vue'),
        meta: {
          permission: 'kungalgamer',
          title: '感谢名单',
        },
      },
    ],
  },
]

export default thanksList
