// core
import { createApp } from "vue";
/* 预设的样式 */
import "./assets/css/reset.css";
import App from "./App.vue";
/* 引入 vue-router */
import router from "./router";
/* 引入 Pinia */
import { createPinia } from "pinia";

/* 导入 Pinia */
const store = createPinia()

// css
import "./assets/css/reset.css";
import "./styles/color.css";
createApp(App).use(router).use(store).mount("#app");
