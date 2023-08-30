import { type RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/KUNGalgameAPP.vue')

const edit: RouteRecordRaw[] = [
  // KUNGalgame 编辑页面
  {
    path: '/edit',
    component: Layout,
    redirect: '/edit/index',
    children: [
      {
        name: 'Edit',
        path: 'index',
        component: () => import('@/views/edit/Edit.vue'),
        meta: {
          permission: 'kungalgamer',
          title: '编辑',
        },
      },
    ],
  },
]

export default edit
