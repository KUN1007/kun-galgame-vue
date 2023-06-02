<script setup lang="ts"></script>

<template>
  <!-- 单个帖子 -->
  <div class="topic">
    <div class="topic-title">
      啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
    </div>
    <div class="topic-time">2019/10/7</div>
  </div>
</template>

<style lang="scss" scoped>
/* 单个帖子的样式 */
.topic {
  width: 100%;
  /* 单个帖子高度 */
  height: 30px;
  /* 帖子之间的距离 */
  padding: 2px;
  margin: 5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid $kungalgame-blue-1;
  box-sizing: border-box;
  border-left: 2px solid $kungalgame-blue-4;
  cursor: pointer;
}
.topic:hover {
  border-bottom: 1px solid $kungalgame-blue-4;
  background-color: $kungalgame-trans-blue-1;
}
/* 单个帖子的标题 */
.topic-title {
  /* 单行显示，溢出省略号 */
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
