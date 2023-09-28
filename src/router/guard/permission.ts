// 导入 rooter
import { Router, RouteRecordRaw } from 'vue-router'
// 导入公共路由，无需鉴权
import { WHITE_LIST } from '../router'
// 使用用户 store
import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'
// 进度条
import NProgress from 'nprogress'
import '@/styles/nprogress/nprogress.scss'

// 临时使用
import { asyncRoutes } from '../router'
// 不显示 nprogress 的 spinner
NProgress.configure({ showSpinner: false })

export const createPermission = (router: Router) => {
  router.beforeEach(async (to, from, next) => {
    // 启动 nprogress
    NProgress.start()
    // 获取当前 token，access token，refresh 在 服务器端 http only
    const token = useKUNGalgameUserStore().getToken()
    // 是否在白名单内
    const isInWhitelist = WHITE_LIST.includes(to.name as string) ? true : false

    // 没有token
    if (!token) {
      // 如果在免登录的白名单中，则直接进入
      if (isInWhitelist) {
        next()
      } else {
        // 其他没有访问权限的页面将被重定向到登录页面
        NProgress.done()
        next('/login')
      }
      return
    }

    // 如果已经登录，并准备进入 Login 页面，则重定向到主页
    // 不太喜欢这样做，就不做了，来打我呀 www

    // if (to.path === '/login') {
    //   message(
    //     'You are already logged in, no need to log in again',
    //     '您已经登录，无需重复登陆',
    //     'info'
    //   )
    //   NProgress.done()
    //   return next({ path: '/' })
    // }

    /*
     * 确保在路由未挂载时，动态添加路由并进行相应的路由重定向，以确保用户能够正确访问目标页面
     * 如果路由已经挂载过，则直接放行路由访问
     */

    // 是否已经挂载过路由
    if (asyncRoutes.length > 0) {
      if (router.hasRoute(to.name as string)) {
        next()
      } else {
        // 回到主页
        next('/kun')
      }
      return
    }

    const routeList = asyncRoutes
    routeList.forEach((route: RouteRecordRaw) => {
      router.addRoute(route)
    })

    let redirectPath = (from.query.redirect || to.path) as string
    if (redirectPath === '/') {
      redirectPath = routeList[0].path
    }
    const redirect = decodeURIComponent(redirectPath)
    const nextData =
      to.path === redirect ? { ...to, replace: true } : { path: redirect }
    next(nextData)
  })

  // 结束 nprogress
  router.afterEach(() => {
    NProgress.done()
  })
}
