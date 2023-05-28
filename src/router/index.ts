import { createWebHistory, createRouter } from 'vue-router'
import { KUNRouteType } from './types'
import { noCertRoutes, WHITE_LIST } from './router'
import { asyncRoutes } from './router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...noCertRoutes, ...asyncRoutes] as KUNRouteType[],
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
