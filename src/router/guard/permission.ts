// 导入 rooter
import { Router } from 'vue-router'
// 导入公共路由，无需鉴权
import { WHITE_LIST } from '../router'
// 使用用户 store
import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'
// 进度条
import NProgress from 'nprogress'
import '@/styles/nprogress/nprogress.scss'
// 根据 uid 获取当前用户的权限
import { getCurrentUserRole } from '@/utils/getCurrentUserRole'

// 不显示 nprogress 的 spinner
NProgress.configure({ showSpinner: false })

export const createPermission = (router: Router) => {
  router.beforeEach(async (to, from) => {
    // 启动 nprogress
    NProgress.start()
    // 获取当前 token，access token，refresh 在 服务器端 http only
    const token = useKUNGalgameUserStore().getToken()
    // 是否在白名单内
    const isInWhitelist = WHITE_LIST.includes(to.name as string)
    // 获取目标路由的权限要求
    const requiredPermissions = to.meta.permission
      ? (to.meta.permission as number[])
      : [1, 2, 3, 4]

    // 没有 token 且不在白名单内，跳转到登录
    if (!token && !isInWhitelist) {
      // 其他没有访问权限的页面将被重定向到登录页面
      NProgress.done()
      return '/login'
    }

    // 需要鉴权
    if (requiredPermissions) {
      const currentPageUid = parseInt(to.params.uid as string)
      const currentUserRole = getCurrentUserRole(currentPageUid)

      if (!requiredPermissions.includes(currentUserRole)) {
        // 是用户界面则跳转到 info，不是则跳转到 403
        return to.matched[0].path === '/kungalgamer'
          ? `/kungalgamer/${currentPageUid}/info`
          : '/kungalgame403'
      }
    }
  })

  // 结束 nprogress
  router.afterEach(() => {
    NProgress.done()
  })
}
