<!-- 把所有帖子的所有 Tag 组合起来形成的一个区域 -->
<script setup lang="ts"></script>

<template>
  <!-- 帖子的标签 -->
  <div class="master-topic-tags">
    <!-- 标签的图标字体 -->
    <i class="fa-solid fa-tags"></i>
    <ul>
      <li>啊这可海星</li>
      <li>啊这可海星</li>
      <li>啊这可海星</li>
      <li>啊这可海星</li>
      <li>啊这可海星</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
/* 帖子的标签 */
.master-topic-tags {
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 图标字体 */
.master-topic-tags i {
  padding: 0 20px;
  color: $kungalgame-blue-4;
}
/* 单个标签的盒子 */
.master-topic-tags ul {
  display: flex;
}
/* 单个标签的样式 */
.master-topic-tags ul li {
  margin-left: 5px;
  font-size: small;
  padding: 2px;
  background-color: $kungalgame-blue-0;
  overflow: hidden;
  white-space: nowrap;
  border-radius: 5px;
  cursor: pointer;
}
.master-topic-tags ul li:hover {
  background-color: $kungalgame-red-0;
  transition: 0.2s;
}
</style>
