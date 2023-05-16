// KUNGalgame 设置面板的 store
import { ref } from 'vue'
import { defineStore } from 'pinia'
import kungalgameSettings from '@/config/setting-panel'

export const useSettingsPanelStore = defineStore('settings', () => {
  const showSettings = ref<boolean>(kungalgameSettings.settings)

  return {
    showSettings,
  }
})
