<!-- 重新编辑话题信息显示 -->
<!-- 我就要把这个组件拆出来！因为是！Rewrite！啊哈哈哈（我不会告诉你这个实际上应该命名 Reedit） -->
<script setup lang="ts">
import { computed } from 'vue'
import dayjs from 'dayjs'
import 'dayjs/locale/en' // 导入英文语言包

// 使用设置界面的 store，目的是获取网站整体的语言
import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'

const props = defineProps<{
  time: number
}>()

// 使用设置面板的 store
const settingsStore = useKUNGalgameSettingsStore()
const { showKUNGalgameLanguage } = storeToRefs(settingsStore)

// 设置使用英文语言
dayjs.locale('en')
const formattedCNDate = dayjs(props.time).format('YYYY年MM月DD日-HH:mm:ss')
const formattedENDate = dayjs(props.time).format('M / D, YYYY - h:mm:ss A')

const loliTime = computed(() => {
  if (showKUNGalgameLanguage.value === 'en') {
    return formattedENDate
  }

  if (showKUNGalgameLanguage.value === 'zh') {
    return formattedCNDate
  }

  return ''
})
</script>

<template>
  <!-- 是否重新编辑 -->
  <!-- 为什么这里没有 i18n 呢，别问我为什么，问就是 Rewrite，啊哈哈哈 -->
  <span>{{ `Rewrite at ${loliTime}` }}</span>
</template>

<style lang="scss" scoped>
/* 内容区域下方字体样式 */
span {
  margin: 0 10px;
  font-size: 12px;
  letter-spacing: 1px;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--kungalgame-font-color-3);
}

@media (max-width: 1000px) {
  span {
    margin-right: 10px;
  }
}
</style>
