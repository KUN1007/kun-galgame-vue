<!-- 发帖的时间 -->
<script setup lang="ts"></script>

<template>
  <!-- 发帖时间 -->
  <div class="master-topic-time">
    <!-- 沙漏图标字体 -->
    <i class="fa-solid fa-hourglass-half"></i>
    <div>2019年10月7日-10:07:00 发布</div>
  </div>
</template>

<style lang="scss" scoped>
/* 发帖时间 */
.master-topic-time {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: small;
  /* 文字间距 */
  letter-spacing: 1px;
  /* 窗口缩小不换行 */
  overflow: hidden;
  white-space: nowrap;
}
/* 沙漏的样式 */
.master-topic-time i {
  padding: 0 10px;
  color: $kungalgame-red-4;
}
/* 发帖时间的样式 */
.master-topic-time div {
  padding-right: 20px;
}
</style>
