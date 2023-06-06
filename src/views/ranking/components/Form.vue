<script setup lang="ts">
import KUNgalgamer from './KUNGalgamer.vue'
</script>

<template>
  <!-- 用户排行 -->
  <div class="kungalgamer-ranking">
    <!-- 用户排行标题 -->
    <div class="kungalgamer-title">最萌的萝莉</div>
    <!-- 用户排行的交互 -->
    <div class="kungalgamer-nav">
      <!-- 萌萌点 -->
      <div class="moemoepoint">按萌萌点排序</div>
      <!-- 获赞数 -->
      <div class="praise">按获赞数排序</div>
      <!-- 发布主题数 -->
      <div class="topic">按发帖数排序</div>
      <!-- 回贴数 -->
      <div class="reply">按回贴数排序</div>
    </div>
    <!-- 单个用户的容器 -->
    <div class="kungalgamer-container">
      <KUNgalgamer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 用户排行 */
.kungalgamer-ranking {
  width: 50%;
  border-right: 1px solid var(--kungalgame-blue-4);
  box-sizing: border-box;
}
/* 用户排行标题 */
.kungalgamer-title {
  /* 字体设置 */
  font-size: 30px;
  color: var(--kungalgame-pink-4);
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
/* 用户排行的交互 */
.kungalgamer-nav {
  display: flex;
  justify-content: space-around;
  margin-right: 10px;
  cursor: pointer;
}
.kungalgamer-nav > div:hover {
  background-color: var(--kungalgame-trans-pink-2);
  transition: 0.2s;
}
/* 排行选择项 */
.moemoepoint,
.praise,
.topic,
.reply {
  height: 30px;
  width: 100%;
  border: 1px solid var(--kungalgame-pink-4);
  display: flex;
  justify-content: center;
  align-items: center;
}
.praise,
.topic,
.reply {
  border-left: none;
}
/* 单个用户的容器 */
.kungalgamer-container {
  height: 650px;
  border: 1px solid var(--kungalgame-pink-4);
  border-top: none;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: inline;
    width: 4px;
    height: 0;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--kungalgame-blue-4);
    border-radius: 2px;
  }
}
</style>
