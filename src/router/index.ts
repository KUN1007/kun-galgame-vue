import { type RouteRecordRaw, createWebHistory, createRouter } from 'vue-router'
import { constantRoutes, WHITE_LIST } from './router'
import { asyncRoutes } from './router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...constantRoutes, ...asyncRoutes] as RouteRecordRaw[],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  },
})

export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name && !WHITE_LIST.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

export default router
