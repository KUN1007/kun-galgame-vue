<!-- 发帖的时间 -->
<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import dayjs from 'dayjs'
import 'dayjs/locale/en' // 导入英文语言包

// 使用设置界面的 store，目的是获取网站整体的语言
import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'

const props = defineProps<{
  time?: number
}>()

// 使用设置面板的 store
const settingsStore = useKUNGalgameSettingsStore()
const { showKUNGalgameLanguage } = storeToRefs(settingsStore)

// 设置使用英文语言
dayjs.locale('en')
const formattedCNDate = dayjs(props.time).format('YYYY年MM月DD日-HH:mm:ss 发布')
const formattedENDate = dayjs(props.time).format('MMMM D, YYYY - h:mm:ss A')

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
  <!-- 发帖时间 -->
  <div class="time">
    <!-- 沙漏图标字体 -->
    <Icon class="hourglass" icon="eos-icons:hourglass" />
    <div>{{ loliTime }}</div>
  </div>
</template>

<style lang="scss" scoped>
/* 发帖时间 */
.time {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-size: small;
  /* 文字间距 */
  letter-spacing: 1px;
  /* 窗口缩小不换行 */
  overflow: hidden;
  white-space: nowrap;
  color: var(--kungalgame-font-color-3);
  /* 发帖时间的样式 */
  div {
    padding-right: 20px;
  }
}
/* 沙漏的样式 */
.hourglass {
  font-size: 23px;
  margin: 0 10px;
  color: var(--kungalgame-red-4);
}

/* 适配手机端 */
@media (max-width: 700px) {
  .time {
    justify-content: center;
  }
}
</style>
