import { Router } from 'vue-router'
import { createPermission } from './permission'
import i18n from '@/language/i18n'

const createPageTitle = (router: Router) => {
  router.beforeEach((to) => {
    const title = to.meta.title as string
    document.title = i18n.global.tm(`router.${title}`)
    return true
  })
}

export function setupKUNGalgameRouterGuard(router: Router) {
  createPermission(router)
  createPageTitle(router)
}
