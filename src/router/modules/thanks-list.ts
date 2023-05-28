import type { KUNRouteType } from '@/router/types'

const thanksList: KUNRouteType[] = [
  // KUNGalgame 感谢名单
  {
    name: 'ThanksList',
    path: '/thanks-list',
    component: () => import('@/views/thanks-list/ThanksList.vue'),
    meta: {
      permission: 'kungalgamer',
      title: '感谢名单',
    },
  },
]

export default thanksList
