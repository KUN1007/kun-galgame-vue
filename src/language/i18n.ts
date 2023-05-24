import { createI18n } from 'vue-i18n'
// 引入语言文件
import zh from './zh'
import en from './en'

const i18n = createI18n({
  locale: localStorage.getItem('KUNGalgame-locale') || 'en',
  // 支持 Vue3 composition API
  legacy: false,
  // 全局注册 ts 方法
  globalInjection: true,
  messages: {
    zh,
    en,
  },
})

export default i18n
