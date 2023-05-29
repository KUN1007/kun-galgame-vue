// core
import { createApp } from 'vue'
// APP
import App from './App.vue'
/* 引入 vue-router */
import router from './router'
/* 引入 Pinia */
// import { createPinia } from 'pinia'
// 引入 css 动画
import 'animate.css'
// 引入 i18n
import i18n from '@/language/i18n'
// 导入路由守卫
import { setupRouterGuard } from '@/router/guard'
// 导入 TanStack Query V4
import { VueQueryPlugin } from '@tanstack/vue-query'
/* 导入 Pinia */
// const store = createPinia()
import { setupPinia } from '@/store/index'
// 注册全局指令
// import replyDirective from '@/directive/spanEffect'

// 获取 App 实例
const app = createApp(App)

setupPinia(app)

// app.directive('reply', replyDirective)

// css
import '@/styles/reset.css'
app
  .use(router)
  //   .use(store)
  .use(i18n)
  .use(VueQueryPlugin)
  .mount('#app')

// 使用路由守卫
setupRouterGuard(router)
