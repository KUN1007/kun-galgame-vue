<!-- 发帖的时间 -->
<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{
  time?: number
}>()
</script>

<template>
  <!-- 发帖时间 -->
  <div class="time">
    <!-- 沙漏图标字体 -->
    <Icon class="hourglass" icon="eos-icons:hourglass" />
    <div>2019年10月7日-10:07:00 发布</div>
  </div>
</template>

<style lang="scss" scoped>
/* 发帖时间 */
.time {
  display: flex;
  align-items: center;
  justify-content: center;
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
</style>
