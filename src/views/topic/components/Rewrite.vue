<!-- 重新编辑话题信息显示 -->
<!-- 我就要把这个组件拆出来！因为是！Rewrite！啊哈哈哈（我不会告诉你这个实际上应该命名 Reedit） -->
<script setup lang="ts">
const props = defineProps<{
  time: number
}>()
</script>

<template>
  <!-- 是否重新编辑 -->
  <span>在2019年10月7日10:07:00重新编辑</span>
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
