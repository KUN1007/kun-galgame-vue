interface Sort {
  index: number
  icon: string
  name: string
  sortField: string
}

export const navSortItem: Sort[] = [
  {
    index: 1,
    icon: 'line-md:rotate-270',
    name: 'updated',
    sortField: 'updated',
  },
  {
    index: 2,
    icon: 'svg-spinners:clock',
    name: 'time',
    sortField: 'time',
  },
  {
    index: 3,
    icon: 'bi:fire',
    name: 'popularity',
    sortField: 'popularity',
  },
  {
    index: 4,
    icon: 'ic:outline-remove-red-eye',
    name: 'views',
    sortField: 'views',
  },
  {
    index: 5,
    icon: 'line-md:thumbs-up-twotone',
    name: 'likes',
    sortField: 'likes',
  },
  {
    index: 6,
    icon: 'ri:reply-line',
    name: 'replies',
    sortField: 'replies',
  },
  {
    index: 7,
    icon: 'fa-regular:comment-dots',
    name: 'comments',
    sortField: 'comments',
  },
]
