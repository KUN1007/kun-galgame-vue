<script setup lang="ts">
import KUNGalgameTopBar from '@/components/KUNGalgameTopBar.vue'
// 导入背景图片
import { currBackground } from '@/hooks/useBackgroundPicture'
</script>

<template>
  <!-- 根容器 -->
  <div class="root" :style="{ backgroundImage: currBackground }">
    <!-- 头部 -->
    <KUNGalgameTopBar />
    <!-- 内容区容器 -->
    <div class="container">
      <!-- 页面标题 -->
      <div class="title">感谢名单</div>
      <!-- 页面内容 -->
      <div class="article">
        <p>
          在 KUNGalgame 网站的设计中，我们参考了以下优秀网站的界面设计，其中有：
        </p>
        <br />
        <br />
        <ul class="list">
          <li>Twitter（推特） - 半透明设计、无限高度弹性盒</li>
          <li>Github（github） - 配色</li>
          <li>bbs.kfmax.com（绯月） - 用户信息分类</li>
          <li>StackOverflow （StackOverflow） - 页面板块的阴影</li>
          <li>ChatGPT （Open AIChatGPT） - 各种技术问题</li>
          <li>Google（谷歌） - 帖子详情页面</li>
          <li>YouTube （油管） - 技术交流页面</li>
          <li>Adobe （Adobe） - 底部 Footer</li>
          <li>Codepen 中的众多案例 – 全部页面均有涉及</li>
          <li>Bilibili （B 站） - 头部导航条</li>
          <li>Ymgal（月幕 Galgame） - 头部导航条</li>
        </ul>
        <br />
        <br />
        <p>
          在设计之初我们浏览了大量设计优秀的网页，可能还参考了众多网站的设计，但由于在大量的浏览时没有做相关记录，所以无法展示
        </p>
        <br />
        <br />
        <p>
          在 KUNGalgame 网站的建设中，我们得到了以下人员的大力支持，其中有：
        </p>
        <br />
        <br />
        <ul class="list">
          <li><span class="skip">ACGNGAME</span> （Galworld）站长</li>
          <li><span class="skip">Shinnku</span> （失落的小站）站长</li>
          <li><span class="skip">Ymgal</span> （月幕 Galgame）站长</li>
        </ul>
        <br />
        <br />
        <p>
          以及<span class="skip"> 鲲的 galgame 交流群（QQ）</span>，和<span
            class="skip"
          >
            鲲的 galgame 交流群（Telegram）</span
          >，以及其它众多人员的相关支持，在这里我们对他们的建议和纠错表示衷心的感谢。
        </p>
        <br />
        <br />
        <p>
          我们的网站会秉承萌萌（美好）、开源、免费的<span class="skip"
            >建立原则</span
          >，不断完善和更新，您可以在 github 看到我们的项目：
        </p>
        <br />
        <br />
        <p>纯 HTML + CSS 实现：<span class="skip">kungalgame-pure-css</span></p>
        <p>
          Vue + Vite + ts + pinia 实现：<span class="skip">kungalgame-vue</span>
        </p>
        <br />
        <br />
        <p>后端由于安全因素，暂不开源，后续如果技术过硬，我们仍然会开源！</p>
        <br />
        <br />
        <p>
          不嫌弃的话，您可以给上面两个 github 的项目点一个
          star，当作对我们的支持。
        </p>
      </div>
      <!-- 版权 -->
      <div class="copyright">
        <span
          >Copyright © 2023 KUNgalgame All rights reserved | Version 0.01</span
        >
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
  min-height: 1400px;
  font-family: 'adobe-clean', 'Source Sans Pro', -apple-system,
    'BlinkMacSystemFont', 'Segoe UI,Roboto', sans-serif;
}
.container {
  /* 固定宽高 */
  width: 900px;
  height: 1200px;
  /* 居中 */
  margin: auto;
  position: relative;
  border-radius: 7px;
  box-shadow: $shadow;
  /* 竖直方向弹性分布 */
  display: flex;
  flex-direction: column;
  align-items: center;
  color: $kungalgame-font-color-3;
  background-color: $kungalgame-trans-white-5;
  backdrop-filter: blur(17px);
  padding: 20px;
  box-sizing: border-box;
}
/* 页面标题 */
.title {
  font-size: 30px;
  margin-bottom: 30px;
}
/* 页面内容 */
.article {
  display: flex;
  flex-direction: column;
}
/* 被划出来的链接字体 */
.skip {
  border-bottom: 1px solid $kungalgame-blue-4;
  cursor: pointer;
  color: $kungalgame-blue-4;
}
/* 单个列表项 */
.list > li {
  list-style: inside;
  text-indent: 4em;
  margin: 5px 0;
}
p {
  text-indent: 3em;
  margin: 5px;
}
/* 版权 */
.copyright {
  margin-top: 60px;
}
</style>
