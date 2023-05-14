// KUNGalgame 设置面板的 store
import { ref } from 'vue'
import { defineStore } from 'pinia'
import kungalgameSettings from '@/config/setting-panel'

export const useSettingsPanelStore = defineStore('settings', () => {
  const showSettings = ref<boolean>(kungalgameSettings.settings)
  const showDarkMode = ref<boolean>(kungalgameSettings.darkMode)
  const showPageWidth = ref<number>(kungalgameSettings.pageWidth)
  const showKUNGalgameBackground = ref<number>(
    kungalgameSettings.kungalgameBackground
  )
  const showFixedLoli = ref<boolean>(kungalgameSettings.fixLoli)

  return {
    showSettings,
    showDarkMode,
    showPageWidth,
    showKUNGalgameBackground,
    showFixedLoli,
  }
})
