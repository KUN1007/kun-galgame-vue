import { type RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/KUNGalgameAPP.vue')

const ranking: RouteRecordRaw[] = [
  {
    path: '/ranking',
    component: Layout,
    children: [
      {
        name: 'Ranking',
        path: '',
        component: () => import('@/views/ranking/Ranking.vue'),
        meta: {
          title: 'ranking',
        },
      },
    ],
  },
]

export default ranking
