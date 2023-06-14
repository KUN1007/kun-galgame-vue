import { Router } from 'vue-router'
import { type RouteRecordRaw } from 'vue-router'
import { useKUNGalgamerStore } from '@/store/modules/kungalgamer'
import { WHITE_LIST } from '../router'
import { storeToRefs } from 'pinia'
import { unref } from 'vue'

// 临时使用
import { asyncRoutes } from '../router'

export const createPermission = (router: Router) => {
  router.beforeEach(async (to, from, next) => {
    const useStore = useKUNGalgamerStore()
    const { token } = storeToRefs(useStore)
    const getRoute = asyncRoutes

    // 白名单
    if (to.name && WHITE_LIST.includes(to.name as string)) {
      next()
      return
    }

    // 没有token
    if (!unref(token)) {
      if (!to.meta?.permission && getRoute.length > 0) {
        next()
        return
      }
      const redirectData: { path: string; replace: boolean; query?: any } = {
        path: '/login',
        replace: true,
      }
      if (to.path) {
        redirectData.query = {
          redirect: to.path,
        }
      }
      next(redirectData)
      return
    }

    // 是否已经挂载过路由
    if (getRoute.length > 0) {
      if (router.hasRoute(to.name as string)) {
        next()
      } else {
        // 回到主页
        next(getRoute[3])
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
}
