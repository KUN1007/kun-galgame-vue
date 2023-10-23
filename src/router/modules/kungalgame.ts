import { type RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/KUNGalgameAPP.vue')

const kungalgame: RouteRecordRaw[] = [
  {
    path: '/kungalgame',
    component: Layout,
    children: [
      {
        name: 'KUNGalgame',
        path: '',
        component: () => import('@/views/kungalgame/KUNGalgame.vue'),
        meta: {
          title: 'about',
        },
      },
    ],
  },
]

export default kungalgame
