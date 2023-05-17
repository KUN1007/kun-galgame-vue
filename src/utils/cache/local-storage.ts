// KUNGalgame localStorage

// 引入定义的键
import KUNCacheKey from './cache-key'

export const getThemeStatus = () => {
  return localStorage.getItem(KUNCacheKey.THEME_STATUS)
}
export const setThemeStatus = (themeName: boolean) => {
  // 主题有两个模式，白天或者是黑夜，白天为 true，黑夜为 false，设定在 localStorage 中
  localStorage.setItem(KUNCacheKey.THEME_STATUS, themeName.toString())
}

export const getMainPageWidth = () => {
  return localStorage.getItem(KUNCacheKey.MAIN_PAGE_WIDTH)
}
export const setMainPageWidth = (mainPageWidth: string) => {
  // 主页的宽度是一个数值，在 61.8 ~ 90 之间
  localStorage.setItem(KUNCacheKey.MAIN_PAGE_WIDTH, mainPageWidth)
}

export const getBackgroundPicture = () => {
  return localStorage.getItem(KUNCacheKey.BACKGROUND_PICTURE)
}
export const setBackgroundPicture = (backgroundPicture: string) => {
  // 背景的图片是一个数字，对应着一个图片
  return localStorage.setItem(KUNCacheKey.BACKGROUND_PICTURE, backgroundPicture)
}

// 将 localeStorage 中的字符串看板娘状态转换为布尔值返回
export const getLoliStatus = () => {
  return localStorage.getItem(KUNCacheKey.LOLI_STATUS) as string
}
export const setLoliStatus = (loli: string) => {
  // 看板娘的状态是一个布尔值，对应着固定还是不固定
  localStorage.setItem(KUNCacheKey.LOLI_STATUS, loli)
}
// 看板娘的水平位置
export const getLoliPositionX = () => {
  return localStorage.getItem(KUNCacheKey.LOLI_POSITION_X) as string
}
export const setLoliPositionX = (loliX: string) => {
  localStorage.setItem(KUNCacheKey.LOLI_POSITION_X, loliX)
}
// 看板娘的竖直位置
export const getLoliPositionY = () => {
  return localStorage.getItem(KUNCacheKey.LOLI_POSITION_Y) as string
}
export const setLoliPositionY = (loliY: string) => {
  localStorage.setItem(KUNCacheKey.LOLI_POSITION_Y, loliY)
}
