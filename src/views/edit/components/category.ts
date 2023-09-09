import { type Ref, ref } from 'vue'

export interface Category {
  index: number
  name: string
}

export const category: Category[] = [
  {
    index: 1,
    name: 'Galgame',
  },
  {
    index: 2,
    name: 'Technique',
  },
  {
    index: 3,
    name: 'Others',
  },
]
