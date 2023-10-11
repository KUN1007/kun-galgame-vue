import { type RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/KUNGalgameAPP.vue')

const kungalgame: RouteRecordRaw[] = [
  // KUNGalgame 关于我们页
  {
    path: '/kungalgame',
    component: Layout,
    children: [
      {
        name: 'KUNGalgame',
        path: '',
        component: () => import('@/views/kungalgame/KUNGalgame.vue'),
        meta: {
          title: '关于我们',
        },
      },
    ],
  },
]

export default kungalgame
