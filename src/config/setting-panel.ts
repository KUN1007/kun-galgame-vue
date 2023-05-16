// 导入 localStorage 中的面板数据

import {
  getThemeStatus,
  getMainPageWidth,
  getBackgroundPicture,
  getLoliStatus,
} from '@/utils/cache/local-storage'
import { type Ref, ref, watchEffect } from 'vue'

// 设置面板配置
interface KUNGalgameSettings {
  // 是否显示设置面板
  settings: boolean
  // 是否黑夜模式
  darkMode: Ref<boolean>
  // 主页面宽度设置
  pageWidth: Ref<number>
  // 论坛背景设置，0 为无背景
  kungalgameBackground: Ref<number>
  // 是否固定看板娘
  fixLoli: Ref<boolean>
}

// 获取 localStorage 中的主题设置
const KUNGalgameTheme = ref<boolean>(getThemeStatus() || false)

// 获取 localeStorage 中的主页宽度设置
const KUNGalgameMainPageWidth = ref<number>(getMainPageWidth() || 61.8)

// 获取 localeStorage 中的背景图片设置
const KUNGalgameBackgroundPicture = ref<number>(getBackgroundPicture() || 61.8)

// 获取 localStorage 中的看板娘状态设置
const KUNGalgameLoliStatus = ref<boolean>(getLoliStatus() || false)

const setLoliStatus = (status: boolean) => {
  KUNGalgameLoliStatus.value = status
}

const initLoli = () => {
  watchEffect(() => {
    const value = KUNGalgameLoliStatus.value
    setLoliStatus(value)
  })
}

const kungalgameSettings: KUNGalgameSettings = {
  settings: true,
  darkMode: KUNGalgameTheme,
  pageWidth: KUNGalgameMainPageWidth,
  kungalgameBackground: KUNGalgameBackgroundPicture || 0,
  fixLoli: KUNGalgameLoliStatus || true,
}

export default kungalgameSettings
