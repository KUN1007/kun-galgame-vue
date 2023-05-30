// KUNGalgame 设置面板的 store
import { defineStore } from 'pinia'

// 设置面板配置
interface KUNGalgameSettings {
  // 是否显示设置面板
  showKUNGalgamePanel: boolean
  // 网站显示语言
  showKUNGalgameLanguage: string
  // 主页宽度
  showKUNGalgameMainPageWidth: string
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
    showKUNGalgamePanel: false,
    showKUNGalgameLanguage: 'en',
    showKUNGalgameMainPageWidth: '61.8',
    showKUNGalgameBackground: 'none',
    showKUNGalgameCustomBackground: '',
  }),
  actions: {
    // 恢复出厂设置()
    restoreSettings() {
      this.showKUNGalgamePanel = false
      this.showKUNGalgameLanguage = 'en'
      this.showKUNGalgameMainPageWidth = '61.8'
      this.showKUNGalgameBackground = 'none'
      this.showKUNGalgameCustomBackground = ''
    },
  },
})
