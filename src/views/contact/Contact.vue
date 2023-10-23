<script setup lang="ts">
import { Icon } from '@iconify/vue'
import KUNGalgameFooter from '@/components/KUNGalgameFooter.vue'
import BackToPrevious from '@/components/BackToPrevious.vue'
</script>

<template>
  <div class="root">
    <div class="container">
      <div class="title">
        <div class="contact-us">{{ $tm('contact.title') }}</div>
        <div class="kungalgame">KUNGalgame</div>
      </div>

      <div class="content">
        <a href="https://t.me/kungalgame" target="_blank">
          <span>Telegram</span>
          <Icon class="icon" icon="line-md:telegram" />
        </a>
        <a
          href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=hlXYbLM8MqOm9WzE22ZodNiQJ3nc1Bu2&authKey=7xfTYC1atV5loXyWNv9VOTOaf5ZzR9BdCFcMNJWdmyukck8%2FDLSF3%2FrHgyiY48pT&noverify=0&group_code=726477957"
          target="_blank"
        >
          <span>QQ</span>
          <Icon class="icon" icon="bi:tencent-qq" />
        </a>
        <a href="https://space.bilibili.com/1748455574" target="_blank">
          <span>Bilibili</span>
          <Icon class="icon" icon="ri:bilibili-line" />
        </a>
      </div>
      <BackToPrevious />

      <KUNGalgameFooter
        style="position: absolute; bottom: -20%; white-space: nowrap"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.root {
  height: 100vh;
  width: 100vw;
  min-width: 500px;
  min-height: 500px;
  background: linear-gradient(
    var(--kungalgame-trans-pink-1),
    var(--kungalgame-trans-blue-1)
  );
  display: flex;
  background-color: var(--kungalgame-white);
}

.container {
  width: 400px;
  height: 300px;
  margin: auto;
  position: relative;
  background-color: var(--kungalgame-trans-blue-0);
  border: 1px solid var(--kungalgame-trans-blue-4);
  border-radius: 7px;
  box-shadow: var(--kungalgame-shadow-0);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--kungalgame-font-color-3);

  &:hover {
    box-shadow: var(--kungalgame-shadow-1);
    transition: 0.3s;
  }
}

.title {
  height: 77px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}

.contact-us {
  position: relative;
  font-size: 30px;
  z-index: 1;
}

.kungalgame {
  position: absolute;
  bottom: 15%;
  color: var(--kungalgame-trans-white-5);
  text-shadow: 2px 2px 3px var(--kungalgame-trans-blue-1);
  font-size: 60px;
  font-style: italic;
  font-family: serif;
  cursor: pointer;

  &:hover {
    color: var(--kungalgame-blue-4);
    transition: 0.2s;
  }
}

.content {
  display: flex;
  font-size: 20px;

  & > a {
    width: 110px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--kungalgame-font-color-3);
  }

  span {
    margin-bottom: 20px;
    cursor: pointer;
  }
}

.icon {
  font-size: 25px;
  height: 100%;
  color: var(--kungalgame-blue-4);
  cursor: pointer;
  text-align: center;

  &:hover {
    color: var(--kungalgame-red-4);
    transform: scale(1.2);
    transition: 0.1s;
  }
}
</style>
