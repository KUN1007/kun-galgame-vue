<script setup lang="ts"></script>

<template>
  <!-- footer 的波浪头部 -->
  <div class="kungalgame-footer-header">
    <div>
      <!-- 波浪类 -->
      <svg
        class="kun-footer-waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path
            id="kun-footer-gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g class="kun-footer-parallax">
          <use xlink:href="#kun-footer-gentle-wave" x="48" y="0" />
          <use xlink:href="#kun-footer-gentle-wave" x="48" y="3" />
          <use xlink:href="#kun-footer-gentle-wave" x="48" y="5" />
          <use xlink:href="#kun-footer-gentle-wave" x="48" y="7" />
        </g>
      </svg>
    </div>
  </div>
</template>

<style scoped>
/* 波浪的属性设置 */
.kun-footer-waves {
  position: relative;
  margin-bottom: -4px;
  width: 100%;
  /* 设定顶部波浪的高度 */
  min-height: 50px;
  max-height: 50px;
}

/* 波浪的动画 */

.kun-footer-parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  fill: var(--kungalgame-trans-blue-2);
}
.kun-footer-parallax > use:nth-child(1) {
  opacity: 0.5;
  animation-delay: -2s;
  animation-duration: 7s;
}
.kun-footer-parallax > use:nth-child(2) {
  opacity: 0.3;
  animation-delay: -3s;
  animation-duration: 10s;
}
.kun-footer-parallax > use:nth-child(3) {
  opacity: 0.2;
  animation-delay: -4s;
  animation-duration: 13s;
}
.kun-footer-parallax > use:nth-child(4) {
  opacity: 0.1;
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}
/* 移动端适配 */
@media (max-width: 768px) {
  .waves {
    height: 40px;
    min-height: 40px;
  }
  .content {
    height: 30vh;
  }
  h1 {
    font-size: 24px;
  }
}
</style>
