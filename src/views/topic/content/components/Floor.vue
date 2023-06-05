<!-- 这个部分为帖子的楼层信息，标记帖子为多少楼 -->
<script setup lang="ts"></script>

<template>
  <!-- 楼主标志 -->
  <div class="master-topic-floor">
    <button class="master-btn">F0</button>
  </div>
</template>

<style lang="scss" scoped>
/* 楼主标志位置 */
.master-topic-floor {
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
.master-btn {
  border: none;
  /* 大小 */
  width: 70px;
  height: 70px;
  border-radius: 50%;
  letter-spacing: 2px;
  background: linear-gradient(var(--kungalgame-blue-1), var(--kungalgame-red-1));
  opacity: 0.8;
  font-size: 37px;
  font-weight: bold;
  font-style: oblique;
  color: var(--kungalgame-red-1);
  text-shadow: -1px 0 var(--kungalgame-blue-4), 0 -1px var(--kungalgame-blue-4),
    1px 0 var(--kungalgame-blue-4), 0 1px var(--kungalgame-blue-4),
    1px 1px var(--kungalgame-black), -1px -1px var(--kungalgame-black),
    -1px 1px var(--kungalgame-black), 1px -1px var(--kungalgame-black),
    4px 2px 2px var(--kungalgame-red-4);
}
</style>
