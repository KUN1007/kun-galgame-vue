// 设置面板配置
interface KUNGalgameSettings {
  // 是否显示设置面板
  showSettings: boolean
  // 是否黑夜模式
  showDarkMode: boolean
  // 主页面宽度设置
  pageWidth: number
  // 论坛背景设置，0 为无背景
  kungalgameBackground: number
  // 是否固定看板娘
  fixLoli: boolean
}

const kungalgameSettings: KUNGalgameSettings = {
  showSettings: false,
  showDarkMode: false,
  pageWidth: 61.8,
  kungalgameBackground: 0,
  fixLoli:false
}

export default kungalgameSettings
