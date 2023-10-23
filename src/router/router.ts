import { type RouteRecordRaw } from 'vue-router'

export const constantRoutes: RouteRecordRaw[] = [
  // KUNGalgame 登录
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/login/Login.vue'),
    meta: {
      title: 'login',
    },
  },
  // KUNGalgame 忘记密码
  {
    name: 'Forgot',
    path: '/forgot',
    component: () => import('@/views/forgot/Forgot.vue'),
    meta: {
      title: 'forget',
    },
  },
  // KUNGalgame 联系我们
  {
    name: 'Contact',
    path: '/contact',
    component: () => import('@/views/contact/Contact.vue'),
    meta: {
      title: 'contact',
    },
  },

  // KUNGalgame 捐助我们
  {
    name: 'Donate',
    path: '/donate',
    component: () => import('@/views/donate/Donate.vue'),
    meta: {
      title: 'donate',
    },
  },

  // KUNGalgame  用户协议
  {
    name: 'Agreement',
    path: '/agreement',
    component: () => import('@/views/agreement/Agreement.vue'),
    meta: {
      title: 'agreement',
    },
  },

  // KUNGalgame 隐私政策
  {
    name: 'Privacy',
    path: '/privacy',
    component: () => import('@/views/privacy/Privacy.vue'),
    meta: {
      title: 'privacy',
    },
  },

  // KUNGalgame 重定向页面
  {
    name: 'Redirect',
    path: '/redirect',
    redirect: '/',
    component: () => import('@/views/redirect/Redirect.vue'),
    meta: {
      title: 'redirect',
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

  // KUNGalgame 403
  {
    name: '403',
    path: '/kungalgame403',
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
export const whiteList = getRouteName(constantRoutes)
