<script setup lang="ts">
import { Icon } from '@iconify/vue'
import KUNGalgameFooter from '@/components/KUNGalgameFooter.vue'
import BackToPrevious from '@/components/BackToPrevious.vue'
import BackToHome from '@/components/BackToHome.vue'
</script>

<template>
  <div class="root">
    <div class="container">
      <div class="title">
        <div class="contact-us">{{ $tm('contact.title') }}</div>
        <div class="kungalgame">KUNGalgame</div>
      </div>

      <div class="content">
        <a
          aria-label="KUN Visual Novel Official Telegram Group"
          href="https://t.me/kungalgame"
          target="_blank"
        >
          <Icon class="icon" icon="line-md:telegram" />
        </a>

        <a
          aria-label="KUN Visual Novel Official Twitter (X) Account | 鲲 Galgame 论坛官方推特账号"
          href="https://twitter.com/kungalgame"
          target="_blank"
        >
          <Icon class="icon" icon="line-md:twitter-x-alt" />
        </a>

        <a
          aria-label="KUN Visual Novel Open Source GitHub Repository | 鲲 Galgame 论坛开源 GitHub 仓库"
          href="https://github.com/KUN1007/kun-galgame-vue"
          target="_blank"
        >
          <Icon class="icon" icon="line-md:github-loop" />
        </a>

        <a
          aria-label="KUN Visual Novel Official QQ Group | 鲲 Galgame 官方 QQ 群"
          href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=hlXYbLM8MqOm9WzE22ZodNiQJ3nc1Bu2&authKey=7xfTYC1atV5loXyWNv9VOTOaf5ZzR9BdCFcMNJWdmyukck8%2FDLSF3%2FrHgyiY48pT&noverify=0&group_code=726477957"
          target="_blank"
        >
          <Icon class="icon" icon="bi:tencent-qq" />
        </a>

        <a
          aria-label="KUN Visual Novel Official Bilibili Account | 鲲 Galgame 官方 Bilibili"
          href="https://space.bilibili.com/1748455574"
          target="_blank"
        >
          <Icon class="icon" icon="ri:bilibili-line" />
        </a>
      </div>
      <BackToPrevious />
      <BackToHome />
    </div>

    <KUNGalgameFooter
      style="position: absolute; bottom: 20px; width: 100%; margin: 0 auto"
    />
  </div>
</template>

<style lang="scss" scoped>
.root {
  height: 100vh;
  width: 100vw;
  min-height: 300px;
  background: linear-gradient(
    var(--kungalgame-trans-pink-1),
    var(--kungalgame-trans-blue-1)
  );
  display: flex;
  background-color: var(--kungalgame-white);
}

.container {
  position: relative;
  width: 400px;
  height: 300px;
  margin: auto;
  background-color: var(--kungalgame-trans-blue-0);
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
  margin-bottom: 50px;
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
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 20px;

  & > a {
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

@media (max-width: 700px) {
  .container {
    width: 95%;
  }

  .kungalgame {
    font-size: 50px;
  }
}
</style>
