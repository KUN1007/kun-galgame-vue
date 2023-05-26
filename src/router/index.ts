import {
  type RouteRecordRaw,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'

declare module 'vue-router' {
  interface RouterMeta {
    title: string
    transition: string
  }
}

/** 常驻路由 */
export const constantRoutes: RouteRecordRaw[] = [
  // KUNGalgame 主页
  {
    name: 'KUN',
    path: '/',
    component: () => import('@/views/Home/KUNGalgameMainPage.vue'),
    meta: {
      title: '主页',
      transition: 'animate__backInUp',
    },
  },
  // KUNgalgame 帖子详情页
  {
    name: 'Topic',
    path: '/topic',
    // 路由懒加载
    component: () => import('@/views/topic/KUNGalgameTopicPage.vue'),
    meta: {
      title: '帖子',
      transition: 'animate__backInUp',
    },
  },
  // KUNGalgame 登陆页
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/login/Login.vue'),
    meta: {
      title: '登录',
      transition: 'animate__backInUp',
    },
  },
  // KUNGalgame 技术交流页
  {
    name: 'Technology',
    path: '/technology',
    component: () => import('@/views/technology/Technology.vue'),
    meta: {
      title: '技术交流',
      transition: 'animate__backInUp',
    },
  },
  // KUNGalgame 帖子池页
  {
    name: 'Pool',
    path: '/pool',
    component: () => import('@/views/pool/Pool.vue'),
    meta: {
      title: '帖子池',
      transition: 'animate__backInUp',
    },
  },
  // KUNGalgame 关于我们页
  {
    name: 'KUNGalgame',
    path: '/kungalgame',
    component: () => import('@/views/kungalgame/KUNGalgame.vue'),
    meta: {
      title: '帖子池',
      transition: 'animate__backInUp',
    },
  },
  // KUNGalgame 403
  {
    name: '403',
    path: '/403',
    component: () => import('@/views/403/403.vue'),
    meta: {
      title: '禁止访问',
      transition: 'animate__backInUp',
    },
  },
  // KUNGalgame 404
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/404/404.vue'),
    meta: {
      title: '错误',
      transition: 'animate__backInUp',
    },
  },
  // KUNGalgame 收支公示
  {
    name: 'Balance',
    path: '/balance',
    component: () => import('@/views/balance/Balance.vue'),
    meta: {
      title: '收支公示',
      transition: 'animate__backInUp',
    },
  },
  // KUNGalgame 联系我们
  {
    name: 'Contacts',
    path: '/contacts',
    component: () => import('@/views/contacts/Contacts.vue'),
    meta: {
      title: '联系我们',
      transition: 'animate__backInUp',
    },
  },
  // KUNGalgame 捐助我们
  {
    name: 'Donate',
    path: '/donate',
    component: () => import('@/views/donate/Donate.vue'),
    meta: {
      title: '捐助我们',
      transition: 'animate__backInUp',
    },
  },
  // KUNGalgame 编辑页面
  {
    name: 'Edit',
    path: '/edit',
    component: () => import('@/views/edit/Edit.vue'),
    meta: {
      title: '编辑',
      transition: 'animate__backInUp',
    },
  },
  // KUNGalgame  用户协议
  {
    name: 'Licence',
    path: '/kungalgame',
    component: () => import('@/views/licence/Licence.vue'),
    meta: {
      title: '用户协议',
      transition: 'animate__backInUp',
    },
  },
  // KUNGalgame 隐私政策
  {
    name: 'Privacy',
    path: '/privacy',
    component: () => import('@/views/privacy/Privacy.vue'),
    meta: {
      title: '隐私政策',
      transition: 'animate__backInUp',
    },
  },
  // KUNGalgame 排行榜
  {
    name: 'Ranking',
    path: '/ranking',
    component: () => import('@/views/ranking/Ranking.vue'),
    meta: {
      title: '排行榜',
      transition: 'animate__backInUp',
    },
  },
  // KUNGalgame 重定向页面
  {
    name: 'Redirect',
    path: '/redirect',
    component: () => import('@/views/redirect/Redirect.vue'),
    meta: {
      title: '帖子池',
      transition: 'animate__backInUp',
    },
  },
  // KUNGalgame 执行条例
  {
    name: 'Regulations',
    path: '/regulations',
    component: () => import('@/views/regulations/Regulations.vue'),
    meta: {
      title: '执行条例（试行）',
      transition: 'animate__backInUp',
    },
  },
  // KUNGalgame 感谢名单
  {
    name: 'ThanksList',
    path: '/thanks-list',
    component: () => import('@/views/thanks-list/ThanksList.vue'),
    meta: {
      title: '感谢名单',
      transition: 'animate__backInUp',
    },
  },
  // KUNGalgame 不萌萌页
  {
    name: 'AntiMoe',
    path: '/anti-moe',
    component: () => import('@/views/anti-moe/AntiMoe.vue'),
    meta: {
      title: '不萌萌',
      transition: 'animate__backInUp',
    },
  },
  // KUNGalgame 更新日志页
  {
    name: 'UpdateLog',
    path: '/update-log',
    component: () => import('@/views/update-log/UpdateLog.vue'),
    meta: {
      title: '更新日志',
      transition: 'animate__backInUp',
    },
  },
  // KUNGalgame 用户页
  {
    name: 'KUNGalgamer',
    path: '/kungalgamer',
    component: () => import('@/views/kungalgamer/KUNGalgamer.vue'),
    meta: {
      title: '用户页',
      transition: 'animate__backInUp',
    },
  },
]

const router = createRouter({
  history:
    import.meta.env.VITE_ROUTER_HISTORY === 'hash'
      ? createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH)
      : createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: constantRoutes,
})

/** 重置路由 */
export function resetRouter() {
  // 注意：所有动态路由路由必须带有 Name 属性，否则可能会不能完全重置干净
  try {
    router.getRoutes().forEach((route: { name: any; meta: any }) => {
      const { name, meta } = route
      if (name && meta.roles?.length) {
        router.hasRoute(name) && router.removeRoute(name)
      }
    })
  } catch (error) {
    // 强制刷新浏览器也行，只是交互体验不是很好
    window.location.reload()
  }
}

export default router
