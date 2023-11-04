import { createApp } from './main'
import { createKUNGalgameRouter } from './router'
import { setupPinia } from './store'
import '@/styles/index.scss'

const { app } = createApp()

const router = createKUNGalgameRouter()
const pinia = setupPinia()

if (window.__INITIAL_STATE__) {
  pinia.state.value = JSON.parse(window.__INITIAL_STATE__)
}

router.isReady().then(() => {
  app.mount('#app', true)
})
