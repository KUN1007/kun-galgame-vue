import { type RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/KUNGalgameAPP.vue')

const bylaw: RouteRecordRaw[] = [
  {
    path: '/bylaw',
    component: Layout,
    children: [
      {
        name: 'Bylaw',
        path: '',
        component: () => import('@/views/bylaw/Bylaw.vue'),
        meta: {
          title: 'regulations',
        },
      },
    ],
  },
]

export default bylaw
