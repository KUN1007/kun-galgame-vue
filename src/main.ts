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
import './assets/css/reset.css'
import './assets/css/color.less'
createApp(App).use(router).use(store).mount('#app')
