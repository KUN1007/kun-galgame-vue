import { type RouteRecordRaw, createWebHistory, createRouter } from 'vue-router'
import { constantRoutes, whiteList } from './router'
import { asyncRoutes } from './router'

// Create a Vue Router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...constantRoutes, ...asyncRoutes] as RouteRecordRaw[],
  // Scroll to the top of the page with a smooth animation on each page navigation
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  },
})

// A function to reset the router by removing routes that are not in the whiteList
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name && !whiteList.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

export default router
