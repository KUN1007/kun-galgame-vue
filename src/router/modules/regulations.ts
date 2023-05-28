import type { KUNRouteType } from '@/router/types'

const regulations: KUNRouteType[] = [
  // KUNGalgame 执行条例
  {
    name: 'Regulations',
    path: '/regulations',
    component: () => import('@/views/regulations/Regulations.vue'),
    meta: {
      permission: 'kungalgamer',
      title: '执行条例（试行）',
    },
  },
]

export default regulations
