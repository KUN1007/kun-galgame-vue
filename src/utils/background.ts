// 导入设置面板 store
import { useSettingsPanelStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

// 使用设置面板的 store
const settingsStore = useSettingsPanelStore()
const { showKUNGalgameBackground } = storeToRefs(settingsStore)

const currBackground = computed(() => {
  return 'src/assets/images/bg/bg' + showKUNGalgameBackground.value + '.png'
})

export default currBackground
