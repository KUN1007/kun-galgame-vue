interface Topic {
  index: number
  icon: string
  name: string
  sortField: string
}

export const topicNavSortItem: Topic[] = [
  {
    index: 1,
    icon: 'bi:fire',
    name: 'popularity',
    sortField: 'popularity',
  },
  {
    index: 2,
    icon: 'bi:rocket',
    name: 'upvote',
    sortField: 'upvotes_count',
  },
  {
    index: 3,
    icon: 'ic:outline-remove-red-eye',
    name: 'views',
    sortField: 'views',
  },
  {
    index: 4,
    icon: 'line-md:thumbs-up-twotone',
    name: 'likes',
    sortField: 'likes_count',
  },
  {
    index: 5,
    icon: 'ri:reply-line',
    name: 'replies',
    sortField: 'replies_count',
  },
  {
    index: 6,
    icon: 'fa-regular:comment-dots',
    name: 'comments',
    sortField: 'comments',
  },
]
