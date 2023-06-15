/*
 * 这个文件用于获取用户系统或浏览器的所有默认环境
 */

// 读取本地存储中的语言配置
const localStorageString = localStorage.getItem('KUNGalgame-settings')

// 这里是为了兼容火狐，火狐的 navigator.language 值为 'zh-CN'，会导致报错
const browser = navigator.language === 'zh-CN' ? 'zh' : 'en'

const KUNGalgameLanguage = localStorageString
  ? JSON.parse(localStorageString).showKUNGalgameLanguage
  : browser

export const lang = KUNGalgameLanguage ? KUNGalgameLanguage : 'en'

// 读取本地的白天黑夜模式，这个函数如果是黑夜模式的话会返回 true
export const mode = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark'
  : 'light'
