<script setup lang="ts"></script>

<template>
  <!-- 下一页 -->
  <div class="page-switch">
    <button>上一页</button>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>...</button>
    <button>10</button>
    <button>下一页</button>
  </div>
</template>

<style lang="scss" scoped>
/* 切换页数 */
.page-switch {
  height: 77px;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 切换按钮 */
.page-switch > button {
  /* 宽高固定 */
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border: 1px solid var(--kungalgame-blue-4);
  background-color: var(--kungalgame-trans-blue-0);
}
.page-switch > button:hover {
  background-color: var(--kungalgame-blue-4);
  color: var(--kungalgame-white);
}
.page-switch > button:active {
  background-color: var(--kungalgame-blue-3);
}
/* 上一页和下一页两个按钮更宽 */
.page-switch > button:first-child {
  width: 60px;
}
.page-switch > button:last-child {
  width: 60px;
}
</style>
