import { type RouteRecordRaw } from 'vue-router'

export const constantRoutes: RouteRecordRaw[] = []

// 获取动态路由表
const getAsyncRoute = (): RouteRecordRaw[] => {
  const modules = import.meta.glob('./modules/*.ts', {
    eager: true,
    import: 'default',
  })
  const asyncRoute: RouteRecordRaw[] = []
  Object.values(modules).forEach((value) => {
    const moduleList = Array.isArray(value)
      ? [...(value as RouteRecordRaw[])]
      : [value as RouteRecordRaw]
    asyncRoute.push(...moduleList)
  })
  return asyncRoute
}

const getRouteName = (routeList: RouteRecordRaw[]) => {
  const routeArr: string[] = []
  routeList.forEach((item) => {
    routeArr.push(item.name as string)
    if (item?.children) {
      routeArr.push(...getRouteName(item?.children))
    }
  })
  return routeArr
}

// 异步路由
export const asyncRoutes = getAsyncRoute()

// 路由白名单
export const whiteList = getRouteName(constantRoutes)
