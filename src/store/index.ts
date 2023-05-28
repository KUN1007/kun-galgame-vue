import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import type { App } from 'vue'

import { useKUNGalgamerStore } from '@/store/modules/kungalgamer'

const store = createPinia()

export function setupPinia(app: App<Element>) {
  store.use(piniaPluginPersistedstate)
  app.use(store)
}

export function storeReset() {
  const userStore = useKUNGalgamerStore()
  userStore.$reset()
}

export { store }
