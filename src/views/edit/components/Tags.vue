<script setup lang="ts"></script>

<template>
  <!-- 标签的总容器 -->
  <div class="tags-container">
    <!-- 标签输入框 -->
    <input
      type="text"
      placeholder="请输入帖子的关键词（单个关键词 10 个字符以内，至少选择一个、最多 7 个）, 输入文字按下 ' Enter ' 创建关键词"
    />
    <!-- 标签的提示词 -->
    <div class="tags-info">热门关键词（点击选择）:</div>
    <!-- 标签容器 -->
    <div class="tags">
      <span>啊这可海星</span>
      <span>啊这可海星</span>
      <span>啊这可海星</span>
      <span>啊这可海星</span>
      <span>啊这可海星</span>
      <span>啊这可海星</span>
      <span>啊这可海星</span>
      <span>啊这可海星</span>
      <span>啊这可海星</span>
      <span>啊这可海星</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 标签的总容器 */
.tags-container {
  width: 100%;
}
/* 标签输入框 */
.tags-container input {
  background-color: var(--kungalgame-trans-white-9);
  /* 输入标签的字体 */
  font-size: 17px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid var(--kungalgame-blue-4);
  padding: 5px;
}
/* 标签输入框 focus */
.tags-container input:focus {
  box-shadow: 0px 0px 3px var(--kungalgame-blue-4);
}
.tags-info {
  margin: 10px 0;
}
/* 单个标签容器 */
.tags {
  display: flex;
  flex-wrap: wrap;
}
/* 单个标签的样式 */
.tags > span {
  margin: 5px;
  display: block;
  white-space: nowrap;
  font-size: 14px;
  padding: 3px;
  background-color: var(--kungalgame-trans-blue-1);
  cursor: pointer;
}
.tags > span:hover {
  background-color: var(--kungalgame-trans-red-1);
}
</style>
