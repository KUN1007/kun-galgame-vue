// 钩子函数，网站显示语言

import { ref, watchEffect } from 'vue'
import { getLangStatus, setLangStatus } from '@/utils/cache/local-storage'

// 初始化 KUNGalgame 语言设置，true 为中文
const kungalgameLang = ref<string>(getLangStatus() || 'true')

const setLang = (status: string) => {
  kungalgameLang.value = status
}

const initLang = () => {
  watchEffect(() => {
    setLangStatus(kungalgameLang.value)
  })
}

// 全局 hook
export function useLang() {
  return {
    kungalgameLang,
    setLang,
    initLang,
  }
}
