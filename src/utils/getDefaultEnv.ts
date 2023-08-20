/*
 * 这个文件用于获取用户系统或浏览器的所有默认环境
 */

// 读取本地存储中的语言配置
const localStorageString = localStorage.getItem('KUNGalgame-settings')

// 这里是为了兼容各种浏览器，某些浏览器的 navigator.language 值为 'zh-CN'，会导致报错
const getInitLanguage = () => {
  const userLanguage = navigator.language

  if (userLanguage.includes('en')) {
    return 'en'
  } else if (userLanguage.includes('zh')) {
    return 'zh'
  } else {
    // 返回默认语言或其他处理逻辑
    return 'en'
  }
}

export const KUNGalgameLanguage = localStorageString
  ? JSON.parse(localStorageString).showKUNGalgameLanguage
  : getInitLanguage()

// 读取本地的白天黑夜模式，这个函数如果是黑夜模式的话会返回 true
export const mode = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark'
  : 'light'
