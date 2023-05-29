// 导入设置面板 store
import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'
import { computed, watch } from 'vue'

// 使用设置面板的 store
const settingsStore = useKUNGalgameSettingsStore()
const { showKUNGalgameBackground } = storeToRefs(settingsStore)

// 恢复空白背景
export const restoreBackground = () => {
  showKUNGalgameBackground.value = '0'
}

export const currBackground = computed(() => {
  if (
    showKUNGalgameBackground.value === '0' ||
    showKUNGalgameBackground.value === 'none'
  ) {
    return 'none'
  } else {
    // TODO: 替换为后端接口
    return `url(src/assets/images/bg/bg${showKUNGalgameBackground.value}.png)`
  }
})
