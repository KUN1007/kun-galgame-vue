import { createI18n } from 'vue-i18n'
// 获取网站 localStorage 中的默认语言
import { getLangStatus } from '@/utils/cache/local-storage'
// 引入语言文件
import zh from './zh'
import en from './en'

const i18n = createI18n({
  locale: getLangStatus() || 'en',
  // locale: 'zh',
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
