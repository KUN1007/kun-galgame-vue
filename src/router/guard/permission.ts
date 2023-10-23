// Import rooter
import { Router } from 'vue-router'
// Import public routes that do not require authentication
import { whiteList } from '../router'
// Use user store
import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'
// Progress bar
import NProgress from 'nprogress'
import '@/styles/nprogress/nprogress.scss'
// Get the current user's role based on UID
import { getCurrentUserRole } from '@/utils/getCurrentUserRole'

// Do not display the NProgress spinner
NProgress.configure({ showSpinner: false })

export const createPermission = (router: Router) => {
  router.beforeEach(async (to, from) => {
    // Start NProgress
    NProgress.start()
    // Get the current token, access token;
    // refresh token is stored on the server as HttpOnly
    const token = useKUNGalgameUserStore().getToken()
    // Check if the route is in the whitelist
    const isInWhitelist = whiteList.includes(to.name as string)
    // Get the required permissions for the target route
    const requiredPermissions = to.meta.permission
      ? (to.meta.permission as number[])
      : [1, 2, 3, 4]

    // If there is no token and it's not in the whitelist
    // , redirect to the login page
    if (!token && !isInWhitelist) {
      // Redirect other pages without access to the login page
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
