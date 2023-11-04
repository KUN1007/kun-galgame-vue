import App from './App.vue'
import { createSSRApp } from 'vue'

import { createKUNGalgameRouter } from './router'
import { setupRouterGuard } from '@/router/guard'

import i18n from '@/language/i18n'

import { setupPinia } from '@/store/index'

import '@/styles/index.scss'

export function createApp() {
  const app = createSSRApp(App)
  const pinia = setupPinia(app)
  app.use(pinia)

  const router = createKUNGalgameRouter()
  setupRouterGuard(router)
  app.use(router)

  app.use(i18n)

  return { app, router, pinia }
}
