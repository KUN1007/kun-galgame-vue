import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from '@/language/i18n'

import { setupKUNGalgameRouterGuard } from '@/router/guard'
import { setupKUNGalgamePinia } from '@/store/index'
import { setupKUNGalgameDirectives } from './directives'

import '@/styles/index.scss'

const app = createApp(App)

setupKUNGalgameRouterGuard(router)
setupKUNGalgamePinia(app)
setupKUNGalgameDirectives(app)

app.use(router).use(i18n).mount('#app')
