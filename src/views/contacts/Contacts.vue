<script setup lang="ts">
import { Icon } from '@iconify/vue'
import BackToHome from '@/components/BackToHome.vue'
import KUNGalgameFooter from '@/components/KUNGalgameFooter.vue'
</script>

<template>
  <!-- 根容器 -->
  <div class="root">
    <!-- 内容区容器 -->
    <div class="container">
      <div class="title">
        <!-- 页面的标题 -->
        <div class="contact-us">加入 / 联系我们</div>
        <div class="kungalgame">KUNGalgame</div>
      </div>
      <!-- 联系方式 -->
      <div class="content">
        <div>
          <span>Telegram</span>
          <Icon class="icon" icon="line-md:telegram" />
        </div>
        <div>
          <span>QQ</span>
          <Icon class="icon" icon="bi:tencent-qq" />
        </div>
        <div>
          <span>Bilibili</span>
          <Icon class="icon" icon="ri:bilibili-line" />
        </div>
      </div>
      <BackToHome />
      <!-- 版权 -->
      <KUNGalgameFooter
        style="position: absolute; bottom: -20%; white-space: nowrap"
      />
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
/* 根容器 */
.root {
  height: 100vh;
  width: 100vw;
  min-width: 500px;
  min-height: 500px;
  background: linear-gradient(
    $kungalgame-trans-pink-1,
    $kungalgame-trans-blue-1
  );
  display: flex;
}
/* 内容区容器 */
.container {
  /* 固定宽高 */
  width: 400px;
  height: 300px;
  /* 居中 */
  margin: auto;
  position: relative;
  background-color: $kungalgame-trans-blue-0;
  border: 1px solid $kungalgame-trans-blue-4;
  border-radius: 7px;
  box-shadow: $kungalgame-shadow-0;
  /* 竖直方向弹性分布 */
  display: flex;
  flex-direction: column;
  align-items: center;
  color: $kungalgame-font-color-3;
}
/* 内容区容器 hover */
.container:hover {
  box-shadow: $kungalgame-shadow-1;
  transition: 0.3s;
}
/* 页面的标题 */
.title {
  /* 固定高度 */
  height: 77px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* 距离下一个项目的距离 */
  margin-bottom: 30px;
}
/* 加入 / 联系我们 */
.contact-us {
  position: relative;
  font-size: 30px;
  z-index: 1;
}
/* 网站的名字 */
.kungalgame {
  position: absolute;
  bottom: 15%;
  color: $kungalgame-trans-white-7;
  text-shadow: 2px 2px 3px $kungalgame-trans-blue-1;
  font-size: 60px;
  font-style: italic;
  font-family: serif;
  cursor: pointer;
}
.kungalgame:hover {
  color: $kungalgame-blue-4;
  transition: 0.1s;
}
/* 联系方式容器 */
.content {
  display: flex;
  font-size: 20px;
}
/* 单个项目 */
.content > div {
  /* 固定宽度 */
  width: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
/* 文字提示 */
.content span {
  margin-bottom: 20px;
  cursor: pointer;
}
/* 图标字体 */
.icon {
  font-size: 25px;
  height: 100%;
  color: $kungalgame-blue-4;
  cursor: pointer;
  text-align: center;
}
.icon:hover {
  color: $kungalgame-red-4;
  transform: scale(1.2);
  transition: 0.1s;
}
</style>
