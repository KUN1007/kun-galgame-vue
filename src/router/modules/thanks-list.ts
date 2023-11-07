import { type RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/KUNGalgameAPP.vue')

const thanksList: RouteRecordRaw[] = [
  {
    path: '/thanks-list',
    component: Layout,
    children: [
      {
        name: 'ThanksList',
        path: '',
        component: () => import('@/views/thanks-list/ThanksList.vue'),
        meta: {
          title: 'thanks',
        },
      },
    ],
  },
]

export default thanksList
