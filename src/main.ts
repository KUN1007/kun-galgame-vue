// Vue core
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Import vue i18n
import i18n from '@/language/i18n'

import { setupRouterGuard } from '@/router/guard'
import { setupPinia } from '@/store/index'

// Import css styles, color, theme, etc.
import '@/styles/index.scss'

// Get vue App instance
const app = createApp(App)

// Setup router guard
setupRouterGuard(router)
// Setup pinia
setupPinia(app)

app.use(router).use(i18n).mount('#app')
