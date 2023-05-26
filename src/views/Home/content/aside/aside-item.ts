/* 这是 KUNGalgame 主页侧边栏的单个项目内容 */

// 单个项目的接口
interface aside {
  index: number
  name: string
  router: string
}

// 顶部导航栏的项目 TODO:（i18n）
const asideItem: aside[] = [
  { index: 1, name: '更新日志', router: '/update-log' },
  { index: 2, name: '收支公示', router: '/balance' },
  { index: 3, name: '排行榜单', router: '/rank' },
  { index: 4, name: '执行条例', router: '/regulations' },
  { index: 5, name: '加入我们', router: '/contacts' },
  { index: 6, name: '不萌记录', router: '/anti-moe' },
]

export default asideItem
