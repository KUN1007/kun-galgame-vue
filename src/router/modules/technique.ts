import { type RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/KUNGalgameAPP.vue')

const technique: RouteRecordRaw[] = [
  // KUNGalgame 技术交流页
  {
    path: '/technique',
    component: Layout,
    children: [
      {
        name: 'Technique',
        path: '',
        component: () => import('@/views/technique/Technique.vue'),
        meta: {
          title: '技术交流',
        },
      },
    ],
  },
]

export default technique
