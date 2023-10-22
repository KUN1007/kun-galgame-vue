// 设置面板配置
export interface KUNGalgameSettingsStore {
  // 白天黑夜模式切换
  showKUNGalgameMode: string
  // 网站显示语言
  showKUNGalgameLanguage: 'en' | 'zh'
  // 主页宽度
  showKUNGalgamePageWidth: Record<string, number>
  // 网站字体
  showKUNGalgameFontStyle: string
  // 背景图
  showKUNGalgameBackground: string
  // 自定义背景图
  showKUNGalgameCustomBackground: string

  // 显示页面宽度还是显示字体设置
  isShowPageWidth: boolean
}
