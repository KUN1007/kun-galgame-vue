// Import rooter
import { Router } from 'vue-router'
import { whiteList } from '../router'
import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'
import { storeToRefs } from 'pinia'

import NProgress from 'nprogress'
import '@/styles/nprogress/nprogress.scss'

// Do not display the NProgress spinner
NProgress.configure({ showSpinner: false })

export const createPermission = (router: Router) => {
  router.beforeEach(async (to, from) => {
    NProgress.start()

    const token = useKUNGalgameUserStore().getToken()
    const { uid, roles } = storeToRefs(useKUNGalgameUserStore())

    const isInWhitelist = whiteList.includes(to.name as string)
    // Get the required permissions for the target route
    const requiredPermissions = to.meta.permission
      ? (to.meta.permission as number[])
      : [1, 2, 3, 4]

    if (!token && !isInWhitelist) {
      NProgress.done()
      return { name: 'Login' }
    }

    // Authentication is required
    const currentPageUid = parseInt(to.params.uid as string)

    const currentUserRoles = () => {
      if (currentPageUid === uid.value) {
        return 4
      } else {
        return roles.value
      }
    }

    if (!requiredPermissions.includes(currentUserRoles())) {
      if (to.matched[0].path === '/kungalgamer') {
        return { name: 'KUNGalgamerInfo' }
      }
    }

    if (
      !requiredPermissions.includes(currentUserRoles()) &&
      to.name === '403'
    ) {
      return { name: '403' }
    }
  })

  // Finish NProgress
  router.afterEach(() => {
    NProgress.done()
  })
}
