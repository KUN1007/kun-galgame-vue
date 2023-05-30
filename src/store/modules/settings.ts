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
  showCustomBackground: string
}

export const useKUNGalgameSettingsStore = defineStore({
  id: 'KUNGalgame-settings',
  persist: true,
  state: (): KUNGalgameSettings => ({
    showKUNGalgamePanel: false,
    showKUNGalgameLanguage: 'en',
    showKUNGalgameMainPageWidth: '61.8',
    showKUNGalgameBackground: 'none',
    showCustomBackground: '',
  }),
})
