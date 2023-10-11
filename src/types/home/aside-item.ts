/* 这是 KUNGalgame 主页侧边栏的单个项目内容 */

// 单个项目的接口
interface aside {
  index: number
  name: string
  router: string
}

// 顶部导航栏的项目
const asideItem: aside[] = [
  { index: 1, name: 'update', router: '/update-log' },
  { index: 2, name: 'balance', router: '/balance' },
  { index: 3, name: 'ranking', router: '/ranking' },
  { index: 4, name: 'bylaw', router: '/bylaw' },
  { index: 5, name: 'contact', router: '/contact' },
  { index: 6, name: 'nonMoe', router: '/non-moe' },
]

export default asideItem
