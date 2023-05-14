// 设置面板配置
interface KUNGalgameSettings {
  // 是否显示设置面板
  settings: boolean
  // 是否黑夜模式
  darkMode: boolean
  // 主页面宽度设置
  pageWidth: number
  // 论坛背景设置，0 为无背景
  kungalgameBackground: number
  // 是否固定看板娘
  fixLoli: boolean
}

const kungalgameSettings: KUNGalgameSettings = {
  settings: true,
  darkMode: false,
  pageWidth: 61.8,
  kungalgameBackground: 0,
  fixLoli: true,
}

export default kungalgameSettings
