/**
 * KUNGalgame heavily relies on Pinia and pinia-plugin-persistedstate for its frontend.
 * Both are essential libraries for the website to run and are considered core components.
 */
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import type { App } from 'vue'

import { useKUNGalgameEditStore } from './modules/edit'
import { usePersistKUNGalgameHomeStore } from './modules/home'
import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'
import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
import { usePersistKUNGalgameTopicStore } from '@/store/modules/topic/topic'
import { usePersistKUNGalgameReplyStore } from '@/store/modules/topic/reply'

const store = createPinia()

export function setupKUNGalgamePinia(app: App<Element>) {
  store.use(piniaPluginPersistedstate)
  app.use(store)
}

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
