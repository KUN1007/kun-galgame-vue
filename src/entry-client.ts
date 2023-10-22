import { createApp } from './main'
import router from './router'
import i18n from '@/language/i18n'
import { setupRouterGuard } from '@/router/guard'
import { setupPinia } from '@/store/index'
import '@/styles/index.scss'

const { app } = createApp()

// 使用路由守卫
setupRouterGuard(router)
// 使用 pinia
setupPinia(app)

app.use(router).use(i18n).mount('#app')
