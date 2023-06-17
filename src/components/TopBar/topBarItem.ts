// 顶部导航栏单个项目的接口
interface topBar {
  index: number
  name: string
  router: string
}

// 顶部导航栏的项目（这里一定要加上 '/' 不然子路由会出问题！！！）
export const topBarItem: topBar[] = [
  { index: 1, name: 'pool', router: '/pool/index' },
  { index: 2, name: 'create', router: '/edit/index' },
  { index: 3, name: 'technique', router: '/technique/index' },
  { index: 4, name: 'about', router: '/kungalgame/index' },
]
