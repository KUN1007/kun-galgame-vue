import { type RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/KUNGalgameAPP.vue')

const topic: RouteRecordRaw[] = [
  {
    path: '/topic',
    component: Layout,
    redirect: '/kun',
    children: [
      {
        name: 'Topic',
        path: ':tid',
        // Lazy loading of the route
        component: () => import('@/views/topic/KUNGalgameTopicPage.vue'),
        // Pass route parameters as component props
        props: true,
        meta: {
          transition: 'animate__fadeIn animate__faster',
          title: 'topics',
        },
      },
    ],
  },
]

export default topic
