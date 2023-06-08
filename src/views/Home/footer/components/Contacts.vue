<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <!-- 下方上面的联系我们 -->
  <div class="kungalgame-contact">
    <h2>联系我们</h2>
    <!-- QQ, 微信, telegram 的图标列表 -->
    <ul>
      <li><Icon icon="bi:tencent-qq" /></li>
      <li><Icon icon="ri:bilibili-line" /></li>
      <li><Icon icon="ic:baseline-telegram" /></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
/* 下方上面的联系我们 */
.kungalgame-contact {
  width: 180px;
  margin: 0 auto;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--kungalgame-font-color-2);
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
</style>
