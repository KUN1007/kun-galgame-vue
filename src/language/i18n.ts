import { createI18n as _createI18n } from 'vue-i18n'
// 读取本地存储中的语言配置
import { KUNGalgameLanguage } from '@/utils/getDefaultEnv'

// 引入语言文件
import zh from './zh'
import en from './en'

const createI18n = (language?: string) => _createI18n({
  locale: language || KUNGalgameLanguage,
  legacy: false,
  messages: {
    zh,
    en,
  },
})

export default createI18n
