// core
import { createApp } from 'vue'
// APP
import App from './App.vue'
/* 引入 vue-router */
import router from './router'
/* 引入 Pinia */
import { createPinia } from 'pinia'
// 引入 css 动画
import 'animate.css'
// 引入 i18n
import i18n from '@/language/i18n'

/* 导入 Pinia */
const store = createPinia()

// css
import '@/styles/reset.css'
createApp(App).use(router).use(store).use(i18n).mount('#app')
