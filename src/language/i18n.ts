import { createI18n } from 'vue-i18n'
// 引入语言文件
import zh from './zh'
import en from './en'

// 读取本地存储中的语言配置
const localStorageString = localStorage.getItem('KUNGalgame-settings')
const lang = localStorageString
  ? JSON.parse(localStorageString).showKUNGalgameLanguage
  : 'en'

const i18n = createI18n({
  locale: lang,
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
