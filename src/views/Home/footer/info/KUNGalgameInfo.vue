<script lang="ts">
import { Icon } from '@iconify/vue'
export default {
  name: 'KUNGalgameInfo',
  components: {
    Icon,
  },
}
</script>

<template>
  <!-- 头部下面的信息展示部分,目的是使信息区域居中且占比 61.8 -->
  <div class="kungalgame-footer-info">
    <!-- 信息展示部分的容器,目的是把左侧的信息和右侧的网站介绍分开 -->
    <div class="kungalgame-footer-info-wrap">
      <!-- 左侧的信息容器 -->
      <div class="kungalgame-footer-left-wrap">
        <!-- 左侧顶部的信息 -->
        <div class="footer-left-top-info">
          <!-- 非 galgame 交流 -->
          <div class="footer-catalog-wrap">
            <!-- 每个信息类别的标题 -->
            <h2 class="kungalgame-footer-catalog-title">
              <span>其它交流</span>
            </h2>
            <ul class="function">
              <li><a href="#">日常交流</a></li>
              <li><a href="#">闲聊灌水</a></li>
            </ul>
          </div>
          <!-- 技术相关 -->
          <div class="footer-catalog-wrap">
            <h2 class="kungalgame-footer-catalog-title">
              <span>技术相关</span>
            </h2>
            <ul class="function">
              <li><a href="#">galgame运行相关</a></li>
              <li><a href="#">galgame汉化相关</a></li>
              <li><a href="#">galgame制作相关</a></li>
            </ul>
          </div>
          <!-- 关于我们 -->
          <div class="footer-catalog-wrap">
            <h2 class="kungalgame-footer-catalog-title">
              <span>关于我们</span>
            </h2>
            <ul class="function">
              <li><a href="#">隐私政策</a></li>
              <li><a href="#">运营理念</a></li>
              <li><a href="#">收支公示</a></li>
            </ul>
          </div>
        </div>
        <!-- 左侧下方的信息 -->
        <div class="footer-left-bottom-info">
          <!-- 下方上面的联系我们 -->
          <div class="kungalgame-contact">
            <h2>联系我们</h2>
            <!-- QQ, 微信, telegram 的图标列表 -->
            <ul>
              <li><Icon icon="bi:tencent-qq" /></li>
              <li><Icon icon="ri:wechat-fill" /></li>
              <li><Icon icon="ic:baseline-telegram" /></li>
            </ul>
          </div>
          <!-- 版权描述,版本号 -->
          <div class="kungalgame-footer-copyright">
            <p>
              Copyright © 2023 KUNgalgame All rights reserved | Version 0.01
            </p>
          </div>
        </div>
      </div>
      <!-- 右侧的网站信息容器 -->
      <div class="kungalgame-footer-right-wrap">
        <!-- 网站名 -->
        <div class="kungalgame">
          <span>KUNgalgame</span>
        </div>
        <!-- 网站描述 -->
        <div class="kungalgame-describe">
          <span>世界上最萌的 galgame 论坛!</span>
          <span>KUNgalgame以营造最良好的氛围为理念</span>
          <span>KUNgalgame永远不会有广告</span>
          <span>KUNgalgame永远不会收费</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
/* 头部下面的信息展示部分,目的是使信息区域居中且占比 61.8 */
.kungalgame-footer-info {
  /* 信息区域的增长 */
  flex-grow: 1;
  display: flex;
  background-color: rgba(217, 233, 255, 0.7);
}
/* 信息展示部分的容器,目的是把左侧的信息和右侧的网站介绍分开 */
.kungalgame-footer-info-wrap {
  margin: 0 auto;
  /* 信息区域总宽度 61.8% */
  width: 61.8%;
  /* 信息区域最小宽度 */
  min-width: 700px;
  /* 为了左右两部分设置弹性盒 */
  display: flex;
}
/* 左侧的信息容器 */
.kungalgame-footer-left-wrap {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* 左侧分类信息区相对于右侧网站介绍的比例 */
  flex-grow: 2;
}
/* 左侧顶部的信息 */
.footer-left-top-info {
  display: flex;
  justify-content: center;
}
/* 顶部的三个 ul */
.footer-catalog-wrap {
  width: 1px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  color: @kungalgame-font-color-2;
  font-size: small;
}
.footer-catalog-wrap ul li {
  margin: 5px 0;
}
.footer-catalog-wrap ul li a {
  flex-grow: 1;
  color: @kungalgame-font-color-2;
}
.footer-catalog-wrap ul {
  color: @kungalgame-font-color-2;
}
/* 左侧下方的信息 */
.footer-left-bottom-info {
  display: flex;
  flex-direction: column;
}
/* 下方上面的联系我们 */
.kungalgame-contact {
  width: 180px;
  margin: 0 auto;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: @kungalgame-font-color-2;
  font-size: small;
}
.kungalgame-contact h2 {
  margin-right: 20px;
  font-size: medium;
}
.kungalgame-contact ul {
  display: flex;
  align-items: center;
  flex-grow: 1;
}
.kungalgame-contact ul li {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 版权描述,版本号 */
.kungalgame-footer-copyright {
  display: flex;
  justify-content: center;
  font-size: smaller;
}
/* 右侧的网站信息容器 */
.kungalgame-footer-right-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* 右侧网站介绍部分相对于左侧的占比 */
  flex-grow: 1;
  color: @kungalgame-font-color-2;
}
/* 网站名 */
.kungalgame {
  font-size: larger;
  padding-bottom: 20px;
  font-weight: bold;
}
/* 网站描述 */
.kungalgame-describe {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
