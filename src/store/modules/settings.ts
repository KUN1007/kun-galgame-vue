// KUNGalgame 设置面板的 store
import { defineStore } from 'pinia'

// 网站的默认设置
import { KUNGalgameLanguage, mode } from '@/utils/getDefaultEnv'

// settings store 的类型
import { KUNGalgameSettingsStore } from '../types/settings'

export const useKUNGalgameSettingsStore = defineStore({
  id: 'KUNGalgame-settings',
  persist: true,
  // 默认值
  state: (): KUNGalgameSettingsStore => ({
    showKUNGalgameMode: mode,
    showKUNGalgameLanguage: KUNGalgameLanguage,
    showKUNGalgamePageWidth: {
      KUN: 61.8,
      Topic: 90,
      Edit: 90,
      KUNGalgame: 90,
      Pool: 90,
      Bylaw: 90,
      Technique: 90,
      ThanksList: 90,
    },
    showKUNGalgameFontStyle: 'system-ui',
    showKUNGalgameBackground: 'none',
    showKUNGalgameCustomBackground: '',

    isShowPageWidth: true,
  }),
  actions: {
    // 设置主题，只有两种模式 light 和 dark，light 为 ''
    setKUNGalgameTheme(theme: string) {
      this.showKUNGalgameMode = theme
      document.documentElement.className = theme
    },
    // 设置字体，用户自己设置，默认为系统 UI
    setKUNGalgameFontStyle(font: string) {
      this.showKUNGalgameFontStyle = font
      document.documentElement.style.fontFamily = font
    },
    // 恢复所有设置，由于调用了 document，所以 pinia 响应式不生效
    setKUNGalgameSettingsRecover() {
      this.$reset()
      this.setKUNGalgameTheme('')
      this.setKUNGalgameFontStyle('system-ui')
    },
  },
})
