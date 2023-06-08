// 读取本地存储中的语言配置
const localStorageString = localStorage.getItem('KUNGalgame-settings')
export const lang = localStorageString
  ? JSON.parse(localStorageString).showKUNGalgameLanguage
  : 'en'
