<script setup lang="ts">
interface FooterInfoItem {
  index: number
  name: string
}

interface FooterInfo {
  index: number
  title: string
  list: FooterInfoItem[]
}

const info: FooterInfo[] = [
  {
    index: 1,
    title: '其它交流',
    list: [
      {
        index: 1,
        name: '日常交流',
      },
      {
        index: 2,
        name: '闲聊灌水',
      },
    ],
  },
]
</script>

<template>
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
</template>

<style lang="scss" scoped>
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
  color: var(--kungalgame-font-color-2);
  font-size: small;
}
.footer-catalog-wrap ul li {
  margin: 5px 0;
}
.footer-catalog-wrap ul li a {
  flex-grow: 1;
  color: var(--kungalgame-font-color-2);
}
.footer-catalog-wrap ul {
  color: var(--kungalgame-font-color-2);
}
</style>
