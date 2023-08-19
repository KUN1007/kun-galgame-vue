<!-- 这个部分为话题的楼层信息，标记话题为多少楼 -->
<script setup lang="ts">
const { width, font } = defineProps(['width', 'font'])
</script>

<template>
  <!-- 楼主标志 -->
  <div class="floor">
    <button class="btn">F0</button>
  </div>
</template>

<style lang="scss" scoped>
/* 楼主标志位置 */
.floor {
  /* 标志在最左边 */
  margin-left: 100%;
  /* 定位 */
  margin-bottom: -70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  /* 位于内容上方 */
  z-index: 1;
}
/* 楼主标志属性 */
.btn {
  border: none;
  /* 大小 */
  width: v-bind(width);
  height: v-bind(width);
  border-radius: 50%;
  letter-spacing: 2px;
  background: linear-gradient(
    var(--kungalgame-blue-1),
    var(--kungalgame-red-1)
  );
  opacity: 0.8;
  font-size: v-bind(font);
  font-weight: bold;
  font-style: oblique;
  color: var(--kungalgame-red-1);
  text-shadow: -1px 0 var(--kungalgame-blue-4), 0 -1px var(--kungalgame-blue-4),
    1px 0 var(--kungalgame-blue-4), 0 1px var(--kungalgame-blue-4),
    1px 1px var(--kungalgame-font-color-3),
    -1px -1px var(--kungalgame-font-color-3),
    -1px 1px var(--kungalgame-font-color-3),
    1px -1px var(--kungalgame-font-color-3), 4px 2px 2px var(--kungalgame-red-4);
}
</style>
