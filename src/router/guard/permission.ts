import { Router } from 'vue-router'
import type { KUNRouteType } from '@/router/types'
import { useKUNGalgamerStore } from '@/store/modules/kungalgamer'
import { WHITE_LIST } from '../router'
import { storeToRefs } from 'pinia'
import { unref } from 'vue'

// 临时使用
import { asyncRoutes } from '../router'

console.log(asyncRoutes)

export const createPermission = (router: Router) => {
  router.beforeEach(async (to, from, next) => {
    const useStore = useKUNGalgamerStore()
    const { getToken: token } = storeToRefs(useStore)
    const getRoute = asyncRoutes

    // 白名单
    if (to.name && WHITE_LIST.includes(<string>to.name)) {
      next()
      return
    }

    // 没有token
    if (!unref(token)) {
      if (!to?.meta?.permission && getRoute.length > 0) {
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
      console.log(1)

      if (router.hasRoute(<string>to.name)) {
        console.log(2)

        next()
      } else {
        next(getRoute[0])
      }
      return
    }

    const routeList = asyncRoutes
    routeList.forEach((route: KUNRouteType) => {
      router.addRoute(route)
    })

    console.log(routeList)

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
