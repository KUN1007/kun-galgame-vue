/* KUNGalgame cache key 的名字 */

const KUN = 'KUNGalgame'

// KUNGalgame 的 cache 键
class KUNCacheKey {
  // 白天 / 黑夜模式
  static THEME_STATUS = `${KUN}-theme`
  // 主页的宽度
  static MAIN_PAGE_WIDTH = `${KUN}-main-page-width`
  // 背景图片
  static BACKGROUND_PICTURE = `${KUN}-background-picture`
  // 是否固定看板娘
  static LOLI_STATUS = `${KUN}-loli-status`
  // 看板娘点击按钮的选中状态
  static LOLI_BTN_STATUS = `${KUN}-loli-btn-status`
}

export default KUNCacheKey
