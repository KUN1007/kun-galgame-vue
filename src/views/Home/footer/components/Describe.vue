<script setup lang="ts"></script>

<template>
  <!-- 右侧的网站信息容器 -->
  <div class="kungalgame-footer-right-wrap">
    <!-- 网站名 -->
    <div class="kungalgame">
      <span>KUNgalgame</span>
    </div>
    <!-- 网站描述 -->
    <div class="kungalgame-describe">
      <span>世界上最萌的 galgame 论坛!</span>
      <span>KUNgalgame以营造最良好的氛围为理念</span>
      <span>KUNgalgame永远不会有广告</span>
      <span>KUNgalgame永远不会收费</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 右侧的网站信息容器 */
.kungalgame-footer-right-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* 右侧网站介绍部分相对于左侧的占比 */
  flex-grow: 1;
  color: var(--kungalgame-font-color-2);
}
/* 网站名 */
.kungalgame {
  font-size: larger;
  padding-bottom: 20px;
  font-weight: bold;
}
/* 网站描述 */
.kungalgame-describe {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
