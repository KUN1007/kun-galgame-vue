import LoginVue from '@/views/login/Login.vue'
import {
  type RouteRecordRaw,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'

declare module 'vue-router' {
  interface RouterMeta {
    title: string
    transition: string
  }
}

/** 常驻路由 */
export const constantRoutes: RouteRecordRaw[] = [
  // KUNGalgame 主页
  {
    name: 'KUN',
    path: '/',
    component: () => import('@/views/Home/KUNGalgameMainPage.vue'),
    meta: {
      title: '主页',
      transition: 'animate__backInUp',
    },
  },
  // KUNgalgame 帖子详情页
  {
    name: 'Topic',
    path: '/topic',
    // 路由懒加载
    component: () => import('@/views/topic/KUNGalgameTopicPage.vue'),
    meta: {
      title: '帖子',
      transition: 'animate__backInUp',
    },
  },
  // KUNGalgame 登陆页
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/login/Login.vue'),
    meta: {
      title: '登录',
      transition: 'animate__backInUp',
    },
  },
  // KUNGalgame 技术交流页
  {
    name: 'Technology',
    path: '/technology',
    component: () => import('@/views/login/Login.vue'),
    meta: {
      title: '技术交流',
      transition: 'animate__backInUp',
    },
  },
  // KUNGalgame 帖子池页
  {
    name: 'Pool',
    path: '/pool',
    component: () => import('@/views/login/Login.vue'),
    meta: {
      title: '帖子池',
      transition: 'animate__backInUp',
    },
  },
]

const router = createRouter({
  history:
    import.meta.env.VITE_ROUTER_HISTORY === 'hash'
      ? createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH)
      : createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: constantRoutes,
})

/** 重置路由 */
export function resetRouter() {
  // 注意：所有动态路由路由必须带有 Name 属性，否则可能会不能完全重置干净
  try {
    router.getRoutes().forEach((route: { name: any; meta: any }) => {
      const { name, meta } = route
      if (name && meta.roles?.length) {
        router.hasRoute(name) && router.removeRoute(name)
      }
    })
  } catch (error) {
    // 强制刷新浏览器也行，只是交互体验不是很好
    window.location.reload()
  }
}

export default router
