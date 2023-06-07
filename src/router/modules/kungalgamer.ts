import { type RouteRecordRaw } from 'vue-router'

const kungalgamer: RouteRecordRaw[] = [
  // KUNGalgame 用户页
  {
    name: 'KUNGalgamer',
    path: '/kungalgamer',
    component: () => import('@/views/kungalgamer/KUNGalgamer.vue'),
    redirect: '/kungalgamer/info',
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
          title: 'KUN | info',
          permission: 'kun',
        },
      },
      {
        name: 'Password',
        path: 'password',
        component: () => import('@/views/kungalgamer/content/Password.vue'),
        meta: {
          title: 'KUN | password',
          permission: 'kun',
        },
      },
      {
        // 所有路由的命名是不能重复的！！！！
        name: 'KUNGalgamerTopic',
        path: 'topic',
        component: () => import('@/views/kungalgamer/content/Topic.vue'),
        meta: {
          title: 'KUN | topic',
          permission: 'kun',
        },
      },
    ],
  },
]

export default kungalgamer
