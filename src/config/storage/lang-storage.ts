/*
 * 网站的语言设置
 */

// 导入 vue 函数
import { ref, watch, onMounted } from 'vue'
// 导入 i18n
import { useI18n } from 'vue-i18n'

const { locale } = useI18n({ useScope: 'global' })

const selectedLocale = ref(locale.value)

// 监听selectedLocale的变化，并更新Vue I18n的locale
watch(selectedLocale, (newVal) => {
  locale.value = newVal
})

// 在页面加载时从localStorage中读取保存的语言设置
onMounted(() => {
  const savedLocale = localStorage.getItem('KUNGalgame-locale')
  if (savedLocale) {
    selectedLocale.value = savedLocale
  }
})

// 监听语言变化，并将语言设置保存到localStorage
watch(locale, (newVal) => {
  localStorage.setItem('KUNGalgame-locale', newVal)
})

const changeLanguage = () => {
  locale.value = selectedLocale.value
}

export default {
  selectedLocale,
  changeLanguage,
}
