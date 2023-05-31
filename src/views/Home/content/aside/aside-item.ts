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
  { index: 4, name: 'regulations', router: '/regulations' },
  { index: 5, name: 'contacts', router: '/contacts' },
  { index: 6, name: 'antiMoe', router: '/anti-moe' },
]

export default asideItem
