import { type RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/KUNGalgameAPP.vue')

const technique: RouteRecordRaw[] = [
  {
    path: '/technique',
    component: Layout,
    children: [
      {
        name: 'Technique',
        path: '',
        component: () => import('@/views/technique/Technique.vue'),
        meta: {
          title: 'technique',
        },
      },
    ],
  },
]

export default technique
