import { createI18n } from 'vue-i18n'
// 读取本地存储中的语言配置
import { KUNGalgameLanguage } from '@/utils/getDefaultEnv'

// 引入语言文件
import zh from './zh'
import en from './en'

const i18n = createI18n({
  locale: KUNGalgameLanguage,
  legacy: false,
  messages: {
    zh,
    en,
  },
})

export default i18n
