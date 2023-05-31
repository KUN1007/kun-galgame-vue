<script setup lang="ts"></script>

<template>
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
      <a href="https://github.com/KUN1007/KUNGalGame-vue" target="_blank"
        >点击访问 github</a
      >
    </div>
    <!-- 预计更新时间 -->
    <div class="time">
      <span>预计更新时间: 2019/10/7</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
  & > a {
    margin-top: 10px;
    color: $kungalgame-blue-4;
    border-bottom: 2px solid $kungalgame-trans-white-8;
    cursor: pointer;
    &:hover {
      border-bottom: 2px solid $kungalgame-blue-4;
    }
  }
}
/* 预计更新时间 */
.time {
  margin-top: 80px;
  display: flex;
  justify-content: center;
}
</style>
