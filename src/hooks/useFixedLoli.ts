// 钩子函数，是否固定看板娘

import { ref, watchEffect } from 'vue'
import {
  getLoliStatus,
  setLoliStatus,
  getLoliPositionX,
  setLoliPositionX,
  getLoliPositionY,
  setLoliPositionY,
} from '@/utils/cache/local-storage'

// 初始化看板娘状态
const kungalgameLoliStatus = ref<string>(getLoliStatus() || 'false')
const kungalgameLoliPositionX = ref<string>(getLoliPositionX() || '120')
const kungalgameLoliPositionY = ref<string>(getLoliPositionY() || '-250')

const setLoli = (status: string) => {
  kungalgameLoliStatus.value = status
}

const setLoliX = (x: string) => {
  kungalgameLoliPositionX.value = x
}

const setLoliY = (y: string) => {
  kungalgameLoliPositionY.value = y
}

const initLoli = () => {
  watchEffect(() => {
    setLoliStatus(kungalgameLoliStatus.value)
    setLoliPositionX(kungalgameLoliPositionX.value)
    setLoliPositionY(kungalgameLoliPositionY.value)
  })
}

// 全局 hook
export function useFixedLoli() {
  return {
    kungalgameLoliStatus,
    kungalgameLoliPositionX,
    kungalgameLoliPositionY,
    setLoli,
    setLoliX,
    setLoliY,
    initLoli,
  }
}
