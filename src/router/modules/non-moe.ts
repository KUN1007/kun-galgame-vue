import { type RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/KUNGalgameAPP.vue')

const nonMoe: RouteRecordRaw[] = [
  // KUNGalgame 不萌萌页
  {
    path: '/non-moe',
    component: Layout,
    children: [
      {
        name: 'NonMoe',
        path: '',
        component: () => import('@/views/non-moe/NonMoe.vue'),
        meta: {
          title: 'nonMoe',
        },
      },
    ],
  },
]

export default nonMoe
