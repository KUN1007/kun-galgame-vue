// KUNGalgame 设置面板的 store
import { ref } from 'vue'
import { defineStore } from 'pinia'

// 设置面板配置
interface KUNGalgameSettings {
  // 是否显示设置面板
  settings: boolean
  // 主页宽度
  mainPageWidth: string
}

// 读出 localStorage 中主页的宽度数据
const loadMainPageWidth =
  (localStorage.getItem('KUNGalgame-main-page-width') as string) || '61.8%'

const kungalgameSettings: KUNGalgameSettings = {
  // false -> settings panel off, true -> settings panel on
  settings: false,
  mainPageWidth: loadMainPageWidth,
}

export const useSettingsPanelStore = defineStore('settings', () => {
  const showSettings = ref<boolean>(kungalgameSettings.settings)
  const showMainPageWidth = ref<string>(kungalgameSettings.mainPageWidth)

  return {
    showSettings,
    showMainPageWidth,
  }
})
