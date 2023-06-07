import { type RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/KUNGalgameAPP.vue')

const ranking: RouteRecordRaw[] = [
  // KUNGalgame 排行榜
  {
    path: '/ranking',
    component: Layout,
    redirect: '/ranking/index',
    children: [
      {
        name: 'Ranking',
        path: 'index',
        component: () => import('@/views/ranking/Ranking.vue'),
        meta: {
          permission: 'kungalgamer',
          title: '排行榜',
        },
      },
    ],
  },
]

export default ranking
