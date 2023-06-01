import type { KUNRouteType } from '@/router/types'

const kungalgamer: KUNRouteType[] = [
  // KUNGalgame 用户页
  {
    name: 'KUNGalgamer',
    path: '/kungalgamer',
    component: () => import('@/views/kungalgamer/KUNGalgamer.vue'),
    meta: {
      permission: 'kungalgamer',
      title: '用户页',
    },
    children: [
      {
        name: 'Info',
        path: 'info',
        component: () => import('@/views/kungalgamer/content/Info.vue'),
        meta: {
          title: 'KUN',
          permission: 'kun',
        },
      },
      {
        name: 'Password',
        path: 'password',
        component: () => import('@/views/kungalgamer/content/Password.vue'),
        meta: {
          title: 'KUN',
          permission: 'kun',
        },
      },
      {
        name: 'CreatedTopic',
        path: 'created',
        component: () => import('@/views/kungalgamer/content/Topic.vue'),
        meta: {
          title: 'KUN',
          permission: 'kun',
        },
      },
    ],
  },
]

export default kungalgamer
