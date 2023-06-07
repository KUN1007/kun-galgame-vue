<script setup lang="ts"></script>

<template>
  <!-- 话题分类的容器 -->
  <div class="topic-group">
    <div>点击选择帖子的分区（可多选）:</div>
    <!-- 分类容器的按钮集合 -->
    <div class="group-btn">
      <button>galgame</button>
      <button>技术交流</button>
      <button>其它</button>
    </div>
  </div>
  <!-- 按钮的容器 -->
  <div class="btn-container">
    <!-- 确认按钮 -->
    <button class="confirm-btn">确认发布</button>
    <!-- 预览编辑 -->
    <button class="preview-btn">预览结果</button>
    <!-- 保存按钮 -->
    <button class="save-btn">保存草稿</button>
  </div>
</template>

<style lang="scss" scoped>
/* 话题分类的容器 */
.topic-group {
  /* 相对于标签容器的占比 */
  width: 97%;
  margin: 10px 0;
}
/* 分类容器的按钮集合 */
.group-btn {
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}
/* 单个按钮的样式 */
.group-btn > button {
  height: 30px;
  width: 20%;
  font-size: 17px;
  cursor: pointer;
  border: 1px solid var(--kungalgame-purple-4);
  background-color: var(--kungalgame-trans-purple-1);
  color: var(--kungalgame-purple-4);
}
/* 按钮的容器 */
.btn-container {
  width: 97%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* 距离最底端的距离 */
  margin-bottom: 20px;
}
/* 单个按钮的样式 */
.btn-container button {
  height: 40px;
  width: 27%;
  font-size: 20px;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    color: var(--kungalgame-white);
  }
}
/* 确认按钮的样式 */
.confirm-btn {
  color: var(--kungalgame-blue-4);
  background-color: var(--kungalgame-trans-blue-1);
  border: 1px solid var(--kungalgame-blue-4);
}
.confirm-btn:hover {
  background-color: var(--kungalgame-blue-4);
  transition: 0.1s;
}
.confirm-btn:active {
  background-color: var(--kungalgame-blue-2);
  transform: scale(0.8);
}
/* 预览按钮的样式 */
.preview-btn {
  color: var(--kungalgame-red-4);
  background-color: var(--kungalgame-trans-red-1);
  border: 1px solid var(--kungalgame-red-4);
}
.preview-btn:hover {
  background-color: var(--kungalgame-red-4);
  transition: 0.1s;
}
.preview-btn:active {
  background-color: var(--kungalgame-red-2);
  transform: scale(0.8);
}
/* 保存按钮的样式 */
.save-btn {
  color: var(--kungalgame-orange-4);
  background-color: var(--kungalgame-trans-orange-1);
  border: 1px solid var(--kungalgame-orange-4);
}
.save-btn:hover {
  background-color: var(--kungalgame-orange-4);
  transition: 0.1s;
}
.save-btn:active {
  background-color: var(--kungalgame-orange-2);
  transform: scale(0.8);
}
</style>
