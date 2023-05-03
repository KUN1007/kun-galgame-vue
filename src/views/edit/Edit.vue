<script setup lang="ts">
import '@wangeditor/editor/dist/css/style.css' // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

// 编辑器的模式
const mode = 'default'

// 内容 HTML
const valueHtml = ref('<p>hello</p>')

// 模拟 ajax 异步获取内容
onMounted(() => {
  setTimeout(() => {
    valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
  }, 1500)
})

const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

// TODO:
const handleCreated = (editor: any) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}
</script>

<template>
  <div class="root">
    <!-- 头部 -->
    <div class="header">
      <!-- 顶部左侧交互栏 -->
      <div class="nav-top">
        <div class="kungal-info">
          <img src="../img/favicon.png" alt="KUNgal" />
          <span>KUNGalgame</span>
        </div>
        <div class="top-bar">
          <ul>
            <li>所有帖子</li>
            <li>发布帖子</li>
            <li>技术交流</li>
            <li>数据统计</li>
            <div class="top-bar-box"></div>
          </ul>
        </div>
      </div>
      <div class="kungalgamer-info">
        <img src="../img/KUN.jpg" alt="KUN" />
        <span>KUN</span>
      </div>
    </div>
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
        <div style="border: 1px solid #ccc">
          <Toolbar
            style="border-bottom: 1px solid #ccc"
            :editor="editorRef"
            :defaultConfig="toolbarConfig"
            :mode="mode"
          />
          <Editor
            style="height: 500px; overflow-y: hidden"
            v-model="valueHtml"
            :defaultConfig="editorConfig"
            :mode="mode"
            @onCreated="handleCreated"
          />
        </div>
      </div>

      <!-- 内容区的底部 -->
      <div class="content-footer">
        <!-- 标签的总容器 -->
        <div class="tags-container">
          <!-- 标签输入框 -->
          <input
            type="text"
            placeholder="请输入帖子的关键词（至少选择一个、最多 7 个）, 输入文字按下 ' Enter ' 创建关键词"
          />
          <!-- 标签容器 -->
          <div class="tags">
            <!-- 标签的提示词 -->
            <div class="tags-info">热门关键词（点击选择）:</div>
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

<style lang="less" scoped>
* {
  list-style: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
}
input:focus {
  outline: none;
}
body::-webkit-scrollbar {
  display: none;
}
.content-wrapper {
  margin: 0 auto;
}
.root {
  height: 100vh;
  min-height: 1000px;
  min-width: 800px;
  display: flex;
  flex-direction: column;
  background-image: url(../img/bg/bg1.png);
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
}
/* 编辑器的样式 */
#editor—wrapper {
  /* 编辑器的 border */
  border: 1px solid @kungalgame-blue-4;
  box-sizing: border-box;
  /* 编辑器的宽度 */
  width: 75vw;
  margin: 0 auto;
  z-index: 100; /* 按需定义 */
}
#toolbar-container {
  border-bottom: 1px solid @kungalgame-blue-4;
}
/* 编辑器编辑部分 */
#editor-container {
  height: 427px;
}
/* 内容部分的总容器 */
.container {
  width: 77vw;
  margin: auto;
  /* 距离顶部 header 的距离 */
  margin-top: 7px;
  /* 容器的阴影 */
  box-shadow: @shadow;
  background-color: @kungalgame-trans-white-2;
  color: @kungalgame-font-color-3;
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
  width: 75vw;
}
/* 帖子标题的输入框 */
.topic-title input {
  color: @kungalgame-font-color-2;
  /* 距离外轮廓的距离 */
  padding: 7px;
  /* 内边距盒子 */
  box-sizing: border-box;
  width: 100%;
  /* 标题输入字体大小 */
  font-size: 40px;
  border: 1px solid @kungalgame-blue-4;
  background-color: @kungalgame-trans-white-9;
}
/* 标题输入框 focus 之后的样式 */
.topic-title input:focus {
  box-shadow: 0px 0px 5px @kungalgame-blue-4;
}
/* 内容区的底部样式 */
.content-footer {
  /* 固定高度 */
  height: 250px;
  /* 距离内容区的距离 */
  margin-top: 17px;
  padding: 0 1vw;
  display: flex;
  flex-direction: column;
}
/* 标签的总容器 */
.tags-container {
  flex-grow: 1;
}
/* 标签输入框 */
.tags-container input {
  background-color: @kungalgame-trans-white-9;
  /* 输入标签的字体 */
  font-size: 17px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid @kungalgame-blue-4;
  padding: 5px;
}
/* 标签输入框 focus */
.tags-container input:focus {
  box-shadow: 0px 0px 3px @kungalgame-blue-4;
}
/* 单个标签容器 */
.tags {
  margin-top: 17px;
}
/* 标签的提示词 */
.tags div {
  margin-bottom: 7px;
}
/* 单个标签的样式 */
.tags > span {
  font-size: 14px;
  padding: 3px;
  background-color: @kungalgame-trans-blue-1;
  cursor: pointer;
}
.tags > span:hover {
  background-color: @kungalgame-trans-red-1;
}
/* 话题分类的容器 */
.topic-group {
  /* 相对于标签容器的占比 */
  flex-grow: 1;
}
/* 分类容器的按钮集合 */
.group-btn {
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
/* 单个按钮的样式 */
.group-btn > button {
  height: 30px;
  width: 20%;
  font-size: 17px;
  cursor: pointer;
  border: 1px solid @kungalgame-purple-4;
  background-color: @kungalgame-trans-purple-1;
  color: @kungalgame-purple-4;
}
/* 按钮的容器 */
.btn-container {
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* 距离最底端的距离 */
  margin-bottom: 10px;
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
  color: @kungalgame-blue-4;
  background-color: @kungalgame-trans-blue-1;
  border: 1px solid @kungalgame-blue-4;
}
.confirm-btn:hover {
  color: @kungalgame-trans-white-1;
  background-color: @kungalgame-blue-4;
  transition: 0.1s;
}
.confirm-btn:active {
  background-color: @kungalgame-red-4;
  border: 1px solid @kungalgame-red-4;
  font-size: 17px;
}
/* 保存按钮的样式 */
.save-btn {
  color: @kungalgame-orange-4;
  background-color: @kungalgame-trans-orange-1;
  border: 1px solid @kungalgame-orange-4;
}
.save-btn:hover {
  color: @kungalgame-trans-white-1;
  background-color: @kungalgame-orange-4;
  transition: 0.1s;
}
.save-btn:active {
  background-color: @kungalgame-trans-orange-1;
  color: @kungalgame-orange-4;
}
/* 版权 */
.copyright {
  margin: 0 auto;
  margin-bottom: 17px;
}
</style>
