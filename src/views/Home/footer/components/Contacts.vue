<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <!-- 下方上面的联系我们 -->
  <div class="kungalgame-contact">
    <h2>{{ $tm('mainPage.footer.contact') }}</h2>
    <!-- QQ, bilibili, telegram 的图标列表 -->
    <ul>
      <li>
        <a
          href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=hlXYbLM8MqOm9WzE22ZodNiQJ3nc1Bu2&authKey=7xfTYC1atV5loXyWNv9VOTOaf5ZzR9BdCFcMNJWdmyukck8%2FDLSF3%2FrHgyiY48pT&noverify=0&group_code=726477957"
          target="_blank"
        >
          <Icon icon="bi:tencent-qq" />
        </a>
      </li>
      <li>
        <a href="https://space.bilibili.com/1748455574" target="_blank">
          <Icon icon="ri:bilibili-line" />
        </a>
      </li>
      <li>
        <a href="https://t.me/kungalgame" target="_blank">
          <Icon icon="ic:baseline-telegram" />
        </a>
      </li>
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

.kungalgame-contact ul li a {
  font-size: 17px;
  color: var(--kungalgame-font-color-2);
}
</style>
