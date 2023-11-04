/**
 * KUNGalgame heavily relies on Pinia and pinia-plugin-persistedstate for its frontend.
 * Both are essential libraries for the website to run and are considered core components.
 */
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// Import store for the income and expense public disclosure page
import { useKUNGalgameBalanceStore } from './modules/balance'

// Import store for the editing interface
import { useKUNGalgameEditStore } from './modules/edit'

// Import home store
import { useKUNGalgameHomeStore } from './modules/home'

// Import user store
import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'

// Import message store
import { useKUNGalgameMessageStore } from './modules/message'

// Import non-moe records store
import { useKUNGalgameNonMoeStore } from './modules/nonMoe'

// Import ranking store
import { useKUNGalgameRankingStore } from './modules/ranking'

// Import website settings panel store
import { useKUNGalgameSettingsStore } from '@/store/modules/settings'

// Import store for the topic detail page
import { useKUNGalgameTopicStore } from './modules/topic'

const pinia = createPinia()

// Function to set up Pinia, to be called in main.ts
export const setupPinia = () => {
  if (!import.meta.env.SSR) {
    pinia.use(piniaPluginPersistedstate)
  }

  return pinia
}

// Reset all stores, used for logging out
export const kungalgameStoreReset = () => {
  const balanceStore = useKUNGalgameBalanceStore()
  const editStore = useKUNGalgameEditStore()
  const homeStore = useKUNGalgameHomeStore()
  const userStore = useKUNGalgameUserStore()
  const messageStore = useKUNGalgameMessageStore()
  const nonMoeStore = useKUNGalgameNonMoeStore()
  const rankingStore = useKUNGalgameRankingStore()
  const settingsStore = useKUNGalgameSettingsStore()
  const topicStore = useKUNGalgameTopicStore()

  balanceStore.$reset()
  editStore.$reset()
  homeStore.$reset()
  userStore.$reset()
  messageStore.$reset()
  nonMoeStore.$reset()
  rankingStore.$reset()
  settingsStore.$reset()
  topicStore.$reset()
}
