import { type RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/KUNGalgameAPP.vue')

const updateLog: RouteRecordRaw[] = [
  // KUNGalgame 更新日志页
  {
    path: '/update-log',
    component: Layout,
    children: [
      {
        name: 'UpdateLog',
        path: '',
        component: () => import('@/views/update-log/UpdateLog.vue'),
        meta: {
          title: '更新日志',
        },
      },
    ],
  },
]

export default updateLog
