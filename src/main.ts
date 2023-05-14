// core
import { createApp } from 'vue'
// APP
import App from './App.vue'
/* 引入 vue-router */
import router from './router'
/* 引入 Pinia */
import { createPinia } from 'pinia'

/* 导入 Pinia */
const store = createPinia()

// css
import '@/styles/reset.css'
import '@/styles/theme/theme.less'
createApp(App).use(router).use(store).mount('#app')
