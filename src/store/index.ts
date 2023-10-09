/**
 * KUNGalgame 的前端是高度依赖于 pinia 和 pinia-plugin-persistedstate 的
 * 所以二者对于网站运行必不可少，是核心库
 */
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import type { App } from 'vue'

// 导入编辑界面 store
import { useKUNGalgameEditStore } from './modules/edit'

// 导入 home store
import { useKUNGalgameHomeStore } from './modules/home'

// 导入用户 store
import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'

// 导入 message store
import { useKUNGalgameMessageStore } from './modules/message'

// 导入网站设置面板 store
import { useKUNGalgameSettingsStore } from '@/store/modules/settings'

// 导入话题详情页面的 store
import { useKUNGalgameTopicStore } from './modules/topic'

const store = createPinia()

// 设置 pinia 的函数，在 main.ts 挂载
export function setupPinia(app: App<Element>) {
  store.use(piniaPluginPersistedstate)
  app.use(store)
}

// 重置所有 store，用于登出
export function kungalgameStoreReset() {
  const editStore = useKUNGalgameEditStore()
  const homeStore = useKUNGalgameHomeStore()
  const userStore = useKUNGalgameUserStore()
  const messageStore = useKUNGalgameMessageStore()
  const settingsStore = useKUNGalgameSettingsStore()
  const topicStore = useKUNGalgameTopicStore()

  editStore.$reset()
  homeStore.$reset()
  userStore.$reset()
  messageStore.$reset()
  settingsStore.$reset()
  topicStore.$reset()
}

export { store }
