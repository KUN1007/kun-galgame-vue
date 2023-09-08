import { type Ref, ref } from 'vue'

export interface Category {
  index: number
  name: string
}

export const category: Category[] = [
  {
    index: 1,
    name: 'btnGalgame',
  },
  {
    index: 2,
    name: 'btnTechnique',
  },
  {
    index: 3,
    name: 'btnOthers',
  },
]
