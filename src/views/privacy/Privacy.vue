<script setup lang="ts">
import BackToPrevious from '@/components/BackToPrevious.vue'
import BackToHome from '@/components/BackToHome.vue'
import KUNGalgameFooter from '@/components/KUNGalgameFooter.vue'

import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'

const { showKUNGalgameLanguage } = storeToRefs(useKUNGalgameSettingsStore())
</script>

<template>
  <div class="root">
    <div class="container">
      <div class="title">{{ $tm('kungalgame.privacy') }}</div>

      <div class="article" v-if="showKUNGalgameLanguage === 'en'">
        <br />
        <p>
          We will never use your personal information and will not use your
          personal information for anything outside of this site.
        </p>
        <br />
        <p>
          Yes, only this sentence, because
          <strong>
            we are not a commercial forum, and profit is not our purpose.
          </strong>
          There is no need to profit from personal data.
        </p>
        <br />
        <p>To be precise, we need the following permissions:</p>
        <br />
        <ul class="list">
          <li>
            Personal Information: Email, registration time, etc., used for
            password recovery.
          </li>
          <li>
            Log-Related Information: Through cookies, Local Storage, and other
            means, we provide search history, image caching, and other
            experience optimizations. You can disable cookies and similar
            methods to prevent our use.
          </li>
          <li>
            Device-Related Information: Device date, operating system
            information, etc., for convenient device adaptation.
          </li>
        </ul>
        <BackToPrevious />
        <BackToHome />
      </div>

      <div class="article" v-if="showKUNGalgameLanguage === 'zh'">
        <br />
        <p>
          我们永远不会利用你的个人信息，不会将你的个人信息用于除了本站以外的任何地方
        </p>
        <br />
        <p>
          是的，只有这一句，因为<strong>我们不是商业论坛，不以盈利为目的</strong>，没必要用个人数据赚钱。
        </p>
        <br />
        <p>准确来讲，我们需要使用以下权限：</p>
        <br />
        <ul class="list">
          <li>个人相关：邮箱、注册时间等，用于找回密码</li>
          <li>
            日志相关：通过 cookies、Local Storage
            等手段，提供搜索历史、图片缓存等优化体验，您可以通过禁用 cookies
            等手段来禁止我们使用
          </li>
          <li>设备相关：设备日期、操作系统信息等，方便我们对设备进行适配</li>
        </ul>
        <BackToPrevious />
        <BackToHome />
      </div>

      <KUNGalgameFooter style="position: absolute; bottom: -60px" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.root {
  height: 100vh;
  min-height: 900px;
  width: 100vw;
  background: linear-gradient(
    var(--kungalgame-trans-pink-1),
    var(--kungalgame-trans-blue-1)
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--kungalgame-white);
}

.container {
  max-width: 500px;
  margin: auto;
  position: relative;
  background-color: var(--kungalgame-trans-blue-0);
  border-radius: 7px;
  box-shadow: var(--kungalgame-shadow-0);
  /* 竖直方向弹性分布 */
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--kungalgame-font-color-3);

  &:hover {
    box-shadow: var(--kungalgame-shadow-1);
    transition: 0.3s;
  }
}

.article {
  padding: 20px;
}

.list > li {
  margin-bottom: 30px;
  list-style: inside;
}

.title {
  font-size: 30px;
  height: 77px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
}

@media (max-width: 700px) {
  .container {
    width: 90%;
  }
}
</style>
