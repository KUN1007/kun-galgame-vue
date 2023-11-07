<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="kungalgame-contact">
    <h2>{{ $tm('mainPage.footer.contact') }}</h2>
    <!-- QQ, bilibili, telegram icon list -->
    <ul>
      <li>
        <a
          href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=hlXYbLM8MqOm9WzE22ZodNiQJ3nc1Bu2&authKey=7xfTYC1atV5loXyWNv9VOTOaf5ZzR9BdCFcMNJWdmyukck8%2FDLSF3%2FrHgyiY48pT&noverify=0&group_code=726477957"
          aria-label="KUN Visual Novel Official QQ Group | 鲲 Galgame 官方 QQ 群"
          target="_blank"
        >
          <Icon icon="bi:tencent-qq" />
        </a>
      </li>

      <li>
        <a
          aria-label="KUN Visual Novel Official Bilibili Account | 鲲 Galgame 官方 Bilibili"
          href="https://space.bilibili.com/1748455574"
          target="_blank"
        >
          <Icon icon="ri:bilibili-line" />
        </a>
      </li>

      <li>
        <a
          aria-label="KUN Visual Novel Official Telegram Group"
          href="https://t.me/kungalgame"
          target="_blank"
        >
          <Icon icon="ic:baseline-telegram" />
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.kungalgame-contact {
  width: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--kungalgame-font-color-2);
  font-size: small;

  h2 {
    margin-right: 20px;
    font-size: medium;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;

    li {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        font-size: 17px;
        color: var(--kungalgame-font-color-2);
      }
    }
  }
}
</style>
