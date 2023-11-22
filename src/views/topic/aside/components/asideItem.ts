interface Item {
  index: number
  sortField: string
  icon: string
  name: string
}

export const asideItem: Item[] = [
  {
    index: 1,
    sortField: 'floor',
    icon: 'line-md:arrows-vertical',
    name: 'floor',
  },
  {
    index: 2,
    sortField: 'likes_count',
    icon: 'line-md:thumbs-up-twotone',
    name: 'like',
  },
  {
    index: 3,
    sortField: 'comments_count',
    icon: 'fa-regular:comment-dots',
    name: 'comment',
  },
]
