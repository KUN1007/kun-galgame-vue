<script setup lang="ts">
import KUNGalgameTopBar from '@/components/KUNGalgameTopBar.vue'
// 导入背景图片
import { currBackground } from '@/hooks/useBackgroundPicture'
</script>

<template>
  <div class="root" :style="{ backgroundImage: currBackground }">
    <!-- 头部 -->
    <KUNGalgameTopBar />
    <!-- 内容区容器 -->
    <div class="content-container">
      <!-- 内容区 -->
      <div class="content">
        <!-- 下个版本计划更新 -->
        <div class="next-ver">
          <!-- 标题 -->
          <div class="title">下个版本</div>
          <!-- 更新的内容 -->
          <div class="article-next">
            <div class="describe">
              <div>更新信息</div>
              <p>1. 添加数据统计页面</p>
              <p>2. 修复关于我们页面布局</p>
              <p>3. 其他细节修复</p>
            </div>
            <!-- 更新预览 -->
            <div class="preview">
              <div>更新预览 / 更多信息</div>
              <span>点击访问 github</span>
            </div>
            <!-- 预计更新时间 -->
            <div class="time">
              <span>预计更新时间: 2019/10/7</span>
            </div>
          </div>
        </div>
        <!-- 历史版本 -->
        <div class="history-ver">
          <!-- 标题 -->
          <div class="title">历史版本</div>
          <!-- 历史更新的内容 -->
          <div class="article-history">
            <!-- 历史更新列表 -->
            <ul class="history-list">
              <!-- 单个项目 -->
              <li>
                <!-- 更新内容 -->
                <div class="performance">
                  <p>1. 添加新页面 ranking page</p>
                  <p>2. 修复关于我们页面缩放 BUG</p>
                  <p>3. 页面颜色调整</p>
                </div>
                <!-- 更新时间和版本 -->
                <div class="update-time">
                  <span>2019/10/7 - Version 0.0.1</span>
                </div>
              </li>
              <li>
                <!-- 更新内容 -->
                <div class="performance">
                  <p>1. 添加新页面 ranking page</p>
                  <p>2. 修复关于我们页面缩放 BUG</p>
                  <p>3. 页面颜色调整</p>
                </div>
                <!-- 更新时间和版本 -->
                <div class="update-time">
                  <span>2019/10/7 - Version 0.0.1</span>
                </div>
              </li>
              <li>
                <!-- 更新内容 -->
                <div class="performance">
                  <p>1. 添加新页面 ranking page</p>
                  <p>2. 修复关于我们页面缩放 BUG</p>
                  <p>3. 页面颜色调整</p>
                </div>
                <!-- 更新时间和版本 -->
                <div class="update-time">
                  <span>2019/10/7 - Version 0.0.1</span>
                </div>
              </li>
              <li>
                <!-- 更新内容 -->
                <div class="performance">
                  <p>1. 添加新页面 ranking page</p>
                  <p>2. 修复关于我们页面缩放 BUG</p>
                  <p>3. 页面颜色调整</p>
                </div>
                <!-- 更新时间和版本 -->
                <div class="update-time">
                  <span>2019/10/7 - Version 0.0.1</span>
                </div>
              </li>
              <li>
                <!-- 更新内容 -->
                <div class="performance">
                  <p>1. 添加新页面 ranking page</p>
                  <p>2. 修复关于我们页面缩放 BUG</p>
                  <p>3. 页面颜色调整</p>
                </div>
                <!-- 更新时间和版本 -->
                <div class="update-time">
                  <span>2019/10/7 - Version 0.0.1</span>
                </div>
              </li>
              <li>
                <!-- 更新内容 -->
                <div class="performance">
                  <p>1. 添加新页面 ranking page</p>
                  <p>2. 修复关于我们页面缩放 BUG</p>
                  <p>3. 页面颜色调整</p>
                </div>
                <!-- 更新时间和版本 -->
                <div class="update-time">
                  <span>2019/10/7 - Version 0.0.1</span>
                </div>
              </li>
              <li>
                <!-- 更新内容 -->
                <div class="performance">
                  <p>1. 添加新页面 ranking page</p>
                  <p>2. 修复关于我们页面缩放 BUG</p>
                  <p>3. 页面颜色调整</p>
                </div>
                <!-- 更新时间和版本 -->
                <div class="update-time">
                  <span>2019/10/7 - Version 0.0.1</span>
                </div>
              </li>
              <li>
                <!-- 更新内容 -->
                <div class="performance">
                  <p>1. 添加新页面 ranking page</p>
                  <p>2. 修复关于我们页面缩放 BUG</p>
                  <p>3. 页面颜色调整</p>
                </div>
                <!-- 更新时间和版本 -->
                <div class="update-time">
                  <span>2019/10/7 - Version 0.0.1</span>
                </div>
              </li>
              <li>
                <!-- 更新内容 -->
                <div class="performance">
                  <p>1. 添加新页面 ranking page</p>
                  <p>2. 修复关于我们页面缩放 BUG</p>
                  <p>3. 页面颜色调整</p>
                </div>
                <!-- 更新时间和版本 -->
                <div class="update-time">
                  <span>2019/10/7 - Version 0.0.1</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 版权 -->
      <div class="copyright">
        <span>Copyright © 2023 KUNgalgame</span>
        <span>All rights reserved | Version 0.01</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  list-style: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
}
*::-webkit-scrollbar {
  display: none;
}
.root {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-width: 1000px;
  min-height: 600px;
}
/* 内容区容器 */
.content-container {
  /* 固定宽高 */
  height: 500px;
  width: 900px;
  /* 相对于版权定位 */
  position: relative;
  /* 居中 */
  margin: auto;
  background-color: $kungalgame-trans-white-2;
  /* 模糊背景 */
  backdrop-filter: blur(5px);
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  color: $kungalgame-font-color-3;
  border: 1px solid $kungalgame-trans-blue-2;
  box-shadow: $shadow;
}
/* 内容区 */
.content {
  width: 100%;
  height: 100%;
  display: flex;
}
/* 下个版本计划更新 */
.next-ver {
  width: 50%;
}
/* 标题 */
.title {
  height: 40px;
  font-size: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
/* 更新的内容 */
.article-next {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
/* 更新信息 */
.describe > div {
  font-size: 20px;
  margin: 10px;
  margin-bottom: 30px;
}
/* 单个更新信息 */
.describe > p {
  text-indent: 2em;
}
/* 更新预览 */
.preview {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
/* 访问 github */
.preview > span {
  margin-top: 10px;
  color: $kungalgame-blue-4;
  border-bottom: 2px solid $kungalgame-trans-white-8;
  cursor: pointer;
}
.preview > span:hover {
  border-bottom: 2px solid $kungalgame-blue-4;
}
/* 预计更新时间 */
.time {
  margin-top: 80px;
  display: flex;
  justify-content: center;
}
/* 历史版本 */
.history-ver {
  height: 100%;
  width: 50%;
}
/* 历史更新的内容 */
.article-history {
  border-left: 1px solid $kungalgame-blue-4;
  height: 75%;
  padding: 10px;
}
/* 历史更新列表 */
.history-list {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* y 轴溢出滚动 */
  overflow-y: scroll;
}
/* 单条更新内容 */
.performance > p {
  margin: 5px 0;
}
/* 帖子区滚动条 */
.history-list::-webkit-scrollbar {
  display: inline;
  width: 4px;
  height: 0;
  background-color: $kungalgame-red-2;
  border-radius: 2px;
}
.history-list::-webkit-scrollbar-thumb {
  background: $kungalgame-blue-4;
  border-radius: 2px;
}
/* 单个更新历史 */
.article-history ul > li {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid $kungalgame-blue-4;
}
.article-history ul > li:first-child {
  margin-top: 10px;
}
/* 更新时间和版本 */
.update-time {
  display: flex;
  justify-content: end;
  font-size: 13px;
  margin-top: 7px;
  margin-right: 10px;
  letter-spacing: 1px;
}
/* 版权 */
.copyright {
  position: absolute;
  bottom: 10px;
}
</style>
