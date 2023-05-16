// 钩子函数，是否固定看板娘

import { ref, watchEffect } from 'vue'
import {
  getLoliStatus,
  setLoliStatus,
  getLoliButtonStatus,
  setLoliButtonStatus,
} from '@/utils/cache/local-storage'

const kungalgameLoliStatus = ref<string>(getLoliStatus() || 'false')
const kungalgameLoliBtnStatus = ref<string>(getLoliButtonStatus() || 'false')

const setLoli = (status: string) => {
  kungalgameLoliStatus.value = status
}

const setLoliBtn = (status: string) => {
  kungalgameLoliBtnStatus.value = status
}

const initLoli = () => {
  watchEffect(() => {
    const loli = kungalgameLoliStatus.value
    const loliBtn = kungalgameLoliStatus.value
    setLoliStatus(loli)
    setLoliButtonStatus(loliBtn)
  })
}

// 全局 hook
export function useFixedLoli() {
  return { kungalgameLoliStatus, setLoli, setLoliBtn, initLoli }
}
