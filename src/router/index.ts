import { type RouteRecordRaw, createWebHistory, createRouter } from 'vue-router'
import { constantRoutes } from './router'
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

export default router
