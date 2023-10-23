import { type RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/KUNGalgameAPP.vue')

const updateLog: RouteRecordRaw[] = [
  {
    path: '/update-log',
    component: Layout,
    children: [
      {
        name: 'UpdateLog',
        path: '',
        component: () => import('@/views/update-log/UpdateLog.vue'),
        meta: {
          title: 'update',
        },
      },
    ],
  },
]

export default updateLog
