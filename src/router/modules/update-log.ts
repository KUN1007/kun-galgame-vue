import type { KUNRouteType } from '@/router/types'

const updateLog: KUNRouteType[] = [
  // KUNGalgame 更新日志页
  {
    name: 'UpdateLog',
    path: '/update-log',
    component: () => import('@/views/update-log/UpdateLog.vue'),
    meta: {
      permission: 'kungalgamer',
      title: '更新日志',
    },
  },
]

export default updateLog
