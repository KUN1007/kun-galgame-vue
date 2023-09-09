// KUNGalgame 设置面板的 store
import { defineStore } from 'pinia'

// 网站的默认设置
import { KUNGalgameLanguage, mode } from '@/utils/getDefaultEnv'

// 设置面板配置
interface KUNGalgameSettings {
  // 白天黑夜模式切换
  showKUNGalgameMode: string
  // 网站显示语言
  showKUNGalgameLanguage: string
  // 主页宽度
  showKUNGalgamePageWidth: Record<string, number>
  // 背景图
  showKUNGalgameBackground: string
  // 自定义背景图
  showKUNGalgameCustomBackground: string
}

export const useKUNGalgameSettingsStore = defineStore({
  id: 'KUNGalgame-settings',
  persist: true,
  // 默认值
  state: (): KUNGalgameSettings => ({
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
    showKUNGalgameBackground: 'none',
    showKUNGalgameCustomBackground: '',
  }),
  actions: {
    // 设置主题，只有两种模式 light 和 dark，light 为 ''
    setKUNGalgameTheme(theme: string) {
      this.showKUNGalgameMode = theme
      document.documentElement.className = theme
    },
  },
})
