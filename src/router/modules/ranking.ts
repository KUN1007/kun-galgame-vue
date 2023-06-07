import { type RouteRecordRaw } from 'vue-router'

const ranking: RouteRecordRaw[] = [
  // KUNGalgame 排行榜
  {
    name: 'Ranking',
    path: '/ranking',
    component: () => import('@/views/ranking/Ranking.vue'),
    meta: {
      permission: 'kungalgamer',
      title: '排行榜',
    },
  },
]

export default ranking
