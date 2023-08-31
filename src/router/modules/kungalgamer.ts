import { type RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/KUNGalgameAPP.vue')

const kungalgamer: RouteRecordRaw[] = [
  // KUNGalgame 用户页
  {
    path: '/kungalgamer',
    component: Layout,
    redirect: '/kungalgamer/kungalgamer/info',
    children: [
      {
        // 这里的路径之后会改成单个用户的 id
        name: 'KUNGalgamer',
        path: 'kungalgamer',
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
              title: 'KUN | Info',
              permission: 'kun',
            },
          },
          {
            name: 'Settings',
            path: 'settings',
            component: () => import('@/views/kungalgamer/content/Settings.vue'),
            meta: {
              title: 'KUN | Settings',
              permission: 'kun',
            },
          },
          {
            name: 'Password',
            path: 'password',
            component: () => import('@/views/kungalgamer/content/Password.vue'),
            meta: {
              title: 'KUN | Password',
              permission: 'kun',
            },
          },
          {
            // 所有路由的命名是不能重复的！！！！
            name: 'KUNGalgamerTopic',
            path: 'topic',
            component: () => import('@/views/kungalgamer/content/Topic.vue'),
            meta: {
              title: 'KUN | Topic',
              permission: 'kun',
            },
          },
        ],
      },
    ],
  },
]

export default kungalgamer
