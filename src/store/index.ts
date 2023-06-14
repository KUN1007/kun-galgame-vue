import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import type { App } from 'vue'

// 导入用户 store
import { useKUNGalgamerStore } from '@/store/modules/kungalgamer'

// 导入网站设置面板 store
import { useKUNGalgameSettingsStore } from '@/store/modules/settings'

const store = createPinia()

export function setupPinia(app: App<Element>) {
  store.use(piniaPluginPersistedstate)
  app.use(store)
}

export function storeReset() {
  const userStore = useKUNGalgamerStore()
  const settingsStore = useKUNGalgameSettingsStore()

  userStore.$reset()
  settingsStore.$reset()
}

export { store }
