import { type RouteRecordRaw } from 'vue-router'

export const constantRoutes: RouteRecordRaw[] = [
  // KUNGalgame 登录
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/login/Login.vue'),
    meta: {
      title: '登录',
    },
  },
  // KUNGalgame 联系我们
  {
    name: 'Contact',
    path: '/contact',
    component: () => import('@/views/contact/Contact.vue'),
    meta: {
      title: '联系我们',
    },
  },

  // KUNGalgame 捐助我们
  {
    name: 'Donate',
    path: '/donate',
    component: () => import('@/views/donate/Donate.vue'),
    meta: {
      title: '捐助我们',
    },
  },

  // KUNGalgame  用户协议
  {
    name: 'Licence',
    path: '/licence',
    component: () => import('@/views/licence/Licence.vue'),
    meta: {
      title: '用户协议',
    },
  },

  // KUNGalgame 隐私政策
  {
    name: 'Privacy',
    path: '/privacy',
    component: () => import('@/views/privacy/Privacy.vue'),
    meta: {
      title: '隐私政策',
    },
  },

  // KUNGalgame 重定向页面
  {
    name: 'Redirect',
    path: '/redirect',
    redirect: '/',
    component: () => import('@/views/redirect/Redirect.vue'),
    meta: {
      title: '重定向',
    },
    children: [], // 添加一个空的 children 数组，redirect 配置项必须有 children
  },

  // KUNGalgame 404
  {
    name: '404',
    path: '/:path(.*)*',
    component: () => import('@/views/404/404.vue'),
    meta: {
      title: '404',
    },
  },

  // KUNGalgame 403 TODO:
  {
    name: '403',
    path: '/admin',
    component: () => import('@/views/403/403.vue'),
    meta: {
      title: '403',
    },
  },
]

const isArray = (val: any): val is object =>
  toString.call(val) === '[object Array]'

// 获取动态路由表
const getAsyncRoute = (): RouteRecordRaw[] => {
  const modules = import.meta.glob('./modules/*.ts', {
    eager: true,
    import: 'default',
  })
  const asyncRoute: RouteRecordRaw[] = []
  Object.values(modules).forEach((value) => {
    const moduleList = isArray(value)
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
export const WHITE_LIST = getRouteName(constantRoutes)
