<script setup lang="ts">
import KUNGalgameTopBar from '@/components/KUNGalgameTopBar.vue'
import WangEditor from '@/components/WangEditor.vue'
</script>

<template>
  <div class="root">
    <!-- 头部 -->
    <KUNGalgameTopBar />
    <!-- 内容区容器 -->
    <div class="container">
      <!-- 内容区容器 -->
      <div class="content-wrapper">
        <!-- 内容区的头部 -->
        <div class="content-header">
          <!-- 帖子的标题 -->
          <div class="topic-title">
            <input type="text" placeholder="请输入帖子的标题（40字以内）" />
          </div>
        </div>
        <!-- 编辑器 -->
        <WangEditor class="editor" />
      </div>

      <!-- 内容区的底部 -->
      <div class="content-footer">
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
      </div>
    </div>
    <!-- 版权 -->
    <div class="copyright">
      <span>Copyright © 2023 KUNgalgame</span>
      <span>All rights reserved | Version 0.01</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-wrapper {
  margin: 0 auto;
}
.root {
  height: 100vh;
  min-height: 1100px;
  min-width: 900px;
  display: flex;
  flex-direction: column;
  background-image: url($/assets/images/bg/bg1.png);
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
}
/* 内容部分的总容器 */
.container {
  width: 80%;
  height: 100%;
  margin: auto;
  /* 容器的阴影 */
  box-shadow: $shadow;
  background-color: $kungalgame-trans-white-2;
  color: $kungalgame-font-color-3;
}
/* 容器的顶部 */
.content-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* 顶部的固定高度 */
  height: 90px;
}
/* 帖子的发布标题 */
.topic-title {
  width: 97%;
}
/* 帖子标题的输入框 */
.topic-title input {
  color: $kungalgame-font-color-2;
  /* 距离外轮廓的距离 */
  padding: 7px;
  /* 内边距盒子 */
  box-sizing: border-box;
  width: 100%;
  /* 标题输入字体大小 */
  font-size: 40px;
  border: 1px solid $kungalgame-blue-4;
  background-color: $kungalgame-trans-white-9;
}
/* 标题输入框 focus 之后的样式 */
.topic-title input:focus {
  box-shadow: 0px 0px 5px $kungalgame-blue-4;
}
/* 内容区的底部样式 */
.content-footer {
  /* 距离内容区的距离 */
  margin-top: 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
/* 标签的总容器 */
.tags-container {
  width: 97%;
}
/* 标签输入框 */
.tags-container input {
  background-color: $kungalgame-trans-white-9;
  /* 输入标签的字体 */
  font-size: 17px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid $kungalgame-blue-4;
  padding: 5px;
}
/* 标签输入框 focus */
.tags-container input:focus {
  box-shadow: 0px 0px 3px $kungalgame-blue-4;
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
  background-color: $kungalgame-trans-blue-1;
  cursor: pointer;
}
.tags > span:hover {
  background-color: $kungalgame-trans-red-1;
}
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
  border: 1px solid $kungalgame-purple-4;
  background-color: $kungalgame-trans-purple-1;
  color: $kungalgame-purple-4;
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
}
/* 确认按钮的样式 */
.confirm-btn {
  color: $kungalgame-blue-4;
  background-color: $kungalgame-trans-blue-1;
  border: 1px solid $kungalgame-blue-4;
}
.confirm-btn:hover {
  color: $kungalgame-trans-white-1;
  background-color: $kungalgame-blue-4;
  transition: 0.1s;
}
.confirm-btn:active {
  background-color: $kungalgame-blue-2;
  transform: scale(0.8);
}
/* 预览按钮的样式 */
.preview-btn {
  color: $kungalgame-red-4;
  background-color: $kungalgame-trans-red-1;
  border: 1px solid $kungalgame-red-4;
}
.preview-btn:hover {
  color: $kungalgame-trans-white-1;
  background-color: $kungalgame-red-4;
  transition: 0.1s;
}
.preview-btn:active {
  background-color: $kungalgame-red-2;
  transform: scale(0.8);
}
/* 保存按钮的样式 */
.save-btn {
  color: $kungalgame-orange-4;
  background-color: $kungalgame-trans-orange-1;
  border: 1px solid $kungalgame-orange-4;
}
.save-btn:hover {
  color: $kungalgame-trans-white-1;
  background-color: $kungalgame-orange-4;
  transition: 0.1s;
}
.save-btn:active {
  background-color: $kungalgame-orange-2;
  transform: scale(0.8);
}
/* 版权 */
.copyright {
  margin: 0 auto;
  margin-bottom: 17px;
}
</style>
