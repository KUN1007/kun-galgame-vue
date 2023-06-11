import { type Ref, ref } from 'vue'

interface Button {
  index: number
  name: string
  isActive: Ref<boolean>
}

export const button: Button[] = [
  {
    index: 1,
    name: 'galgame',
    isActive: ref(false),
  },
  {
    index: 2,
    name: '技术交流',
    isActive: ref(false),
  },
  {
    index: 3,
    name: '其它',
    isActive: ref(false),
  },
]
