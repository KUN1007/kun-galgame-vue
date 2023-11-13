/**
 * KUNGalgame heavily relies on Pinia and pinia-plugin-persistedstate for its frontend.
 * Both are essential libraries for the website to run and are considered core components.
 */
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import type { App } from 'vue'

// Import store for the editing interface
import { useKUNGalgameEditStore } from './modules/edit'

// Import home store
import { usePersistKUNGalgameHomeStore } from './modules/home'

// Import user store
import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'

// Import website settings panel store
import { useKUNGalgameSettingsStore } from '@/store/modules/settings'

// Import store for the topic detail page
import { usePersistKUNGalgameTopicStore } from '@/store/modules/topic/topic'
import { usePersistKUNGalgameReplyStore } from '@/store/modules/topic/reply'

const store = createPinia()

// Function to set up Pinia, to be called in main.ts
export function setupKUNGalgamePinia(app: App<Element>) {
  store.use(piniaPluginPersistedstate)
  app.use(store)
}

// Reset all stores, used for logging out
export function kungalgameStoreReset() {
  const editStore = useKUNGalgameEditStore()
  const homeStore = usePersistKUNGalgameHomeStore()
  const userStore = useKUNGalgameUserStore()
  const settingsStore = useKUNGalgameSettingsStore()
  const topicStore = usePersistKUNGalgameTopicStore()
  const replyStore = usePersistKUNGalgameReplyStore()

  editStore.$reset()
  homeStore.$reset()
  userStore.$reset()
  settingsStore.$reset()
  topicStore.$reset()
  replyStore.$reset()
}
