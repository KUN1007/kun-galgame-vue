// 顶部导航栏单个项目的接口
interface navItem {
  index: number
  icon: string
  name: string
}

// 导航栏的项目
export const asideNavItem: navItem[] = [
  { index: 1, icon: 'line-md:arrow-close-up', name: 'top' },
  { index: 2, icon: 'svg-spinners:clock', name: 'timeSort' },
  { index: 3, icon: 'line-md:thumbs-up-twotone', name: 'likeSort' },
  { index: 4, icon: 'fa-regular:comment-dots', name: 'commentSort' },
]
