// KUNGalgame localStorage

// 引入定义的键
import KUNCacheKey from './cache-key'

/*
 * KUNGalgame 语言设置
 */

export const getLangStatus = () => {
  return localStorage.getItem(KUNCacheKey.MAIN_LANG) as string
}

export const setLangStatus = (lang: string) => {
  // true -> chinese, false -> english
  localStorage.setItem(KUNCacheKey.MAIN_LANG, lang)
}
