// Import rooter
import { Router } from 'vue-router'
import { whiteList } from '../router'
import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'

import { getCurrentUserRole } from '@/utils/getCurrentUserRole'

import NProgress from 'nprogress'
import '@/styles/nprogress/nprogress.scss'

// Do not display the NProgress spinner
NProgress.configure({ showSpinner: false })

export const createPermission = (router: Router) => {
  router.beforeEach(async (to, from) => {
    NProgress.start()

    const token = useKUNGalgameUserStore().getToken()

    const isInWhitelist = whiteList.includes(to.name as string)
    // Get the required permissions for the target route
    const requiredPermissions = to.meta.permission
      ? (to.meta.permission as number[])
      : [1, 2, 3, 4]

    if (!token && !isInWhitelist) {
      NProgress.done()
      return '/login'
    }

    // Authentication is required
    if (requiredPermissions) {
      const currentPageUid = parseInt(to.params.uid as string)
      const currentUserRole = getCurrentUserRole(currentPageUid)

      if (!requiredPermissions.includes(currentUserRole)) {
        // If it's a user interface, redirect to 'info';
        // Otherwise, redirect to '403'
        return to.matched[0].path === '/kungalgamer'
          ? `/kungalgamer/${currentPageUid}/info`
          : '/kungalgame403'
      }
    }
  })

  // Finish NProgress
  router.afterEach(() => {
    NProgress.done()
  })
}
