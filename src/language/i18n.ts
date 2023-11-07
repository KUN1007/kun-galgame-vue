import { createI18n as _createI18n } from 'vue-i18n'
// Get localeStorage language config
import { KUNGalgameLanguage } from '@/utils/getDefaultEnv'

// Import language file
import zh from './zh'
import en from './en'

const createI18n = (language?: string) =>
  _createI18n({
    locale: language || KUNGalgameLanguage,
    legacy: false,
    messages: {
      zh,
      en,
    },
  })

export default createI18n
