import { Router } from 'vue-router'
import { createPermission } from './permission'

const createPageTitle = (router: Router) => {
  router.beforeEach((to) => {
    document.title = to.meta.title as string
    return true
  })
}

export function setupRouterGuard(router: Router) {
  createPermission(router)
  createPageTitle(router)
}
