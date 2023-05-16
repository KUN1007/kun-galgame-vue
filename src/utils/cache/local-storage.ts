// KUNGalgame localStorage

// 引入定义的键
import KUNCacheKey from './cache-key'

export const getThemeStatus = () => {
  return localStorage.getItem(KUNCacheKey.THEME_STATUS)
}
export const setThemeStatus = (themeName: 'light' | 'dark') => {
  // 主题有两个模式，白天或者是黑夜，设定在 localStorage 中
  localStorage.setItem(KUNCacheKey.THEME_STATUS, themeName)
}

export const getMainPageWidth = () => {
  return localStorage.getItem(KUNCacheKey.MAIN_PAGE_WIDTH)
}
export const setMainPageWidth = (mainPageWidth: string) => {
  // 主页的宽度是一个数值，在 61.8 ~ 90 之间
  localStorage.setItem(KUNCacheKey.MAIN_PAGE_WIDTH, mainPageWidth)
}

export const getBackgroundPicture = () => {
  const pictureNumber = localStorage.getItem(KUNCacheKey.BACKGROUND_PICTURE)
  if (pictureNumber) {
    return parseInt(pictureNumber)
  } else {
    throw new Error(
      'Invalid background picture status! Please check your localeStorage -> KUNCacheKey.BACKGROUND_PICTURE'
    )
  }
}
export const setBackgroundPicture = (backgroundPicture: string) => {
  // 背景的图片是一个数字，对应着一个图片
  return localStorage.setItem(KUNCacheKey.BACKGROUND_PICTURE, backgroundPicture)
}

// 转换字符串为布尔值的函数
function parseBoolean(kun: string): boolean {
  return kun.toLowerCase() === 'true' ? true : false
}

// 将 localeStorage 中的字符串看板娘状态转换为布尔值返回
export const getLoliStatus = (): boolean => {
  const loli = localStorage.getItem(KUNCacheKey.LOLI_STATUS)
  if (loli) {
    return parseBoolean(loli)
  } else {
    throw new Error(
      'Invalid loli status! Please check your localeStorage -> KUNGgalgame.LOLI_STATUS'
    )
  }
}
export const setLoliStatus = (loli: boolean) => {
  // 看板娘的状态是一个布尔值，对应着固定还是不固定
  localStorage.setItem(KUNCacheKey.LOLI_STATUS, loli.toString())
}
