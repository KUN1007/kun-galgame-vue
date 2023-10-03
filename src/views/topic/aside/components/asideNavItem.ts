// 顶部导航栏单个项目的接口
interface navItem {
  index: number
  sortField: string
  icon: string
  name: string
}

// 导航栏的项目
export const asideNavItem: navItem[] = [
  {
    index: 1,
    sortField: 'floor',
    icon: 'line-md:arrows-vertical',
    name: 'floorSort',
  },
  {
    index: 2,
    sortField: 'time',
    icon: 'eos-icons:hourglass',
    name: 'timeSort',
  },
  {
    index: 3,
    sortField: 'likes',
    icon: 'line-md:thumbs-up-twotone',
    name: 'likeSort',
  },
  {
    index: 4,
    sortField: 'comment',
    icon: 'fa-regular:comment-dots',
    name: 'commentSort',
  },
  {
    index: 5,
    sortField: 'updatedAt',
    icon: 'line-md:arrow-up-square',
    name: 'updatedSort',
  },
]
