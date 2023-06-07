import { type RouteRecordRaw } from 'vue-router'

const edit: RouteRecordRaw[] = [
  // KUNGalgame 编辑页面
  {
    name: 'Edit',
    path: '/edit',
    component: () => import('@/views/edit/Edit.vue'),
    meta: {
      permission: 'kungalgamer',
      title: '编辑',
    },
  },
]

export default edit
