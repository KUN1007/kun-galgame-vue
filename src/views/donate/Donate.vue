<script setup lang="ts">
import KUNGalgameFooter from '@/components/KUNGalgameFooter.vue'
import Message from '@/components/alert/Message'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleClickDonate = () => {
  Message(
    `Let's talk about it when we're in a loss, and first of all, thank you for your support.`,
    '等我们亏钱再说啦，先感谢您的支持',
    'info',
    7777
  )
}
</script>

<template>
  <div class="root">
    <div class="container">
      <div class="title">{{ $tm('donate.donate') }}</div>
      <p class="warning">
        {{ $tm('donate.donate') }}
        <span>{{ $tm('donate.no') }}</span>
        {{ $tm('donate.server') }}
      </p>
      <div class="btn">
        <span @click="handleClickDonate">{{ $tm('donate.confirm') }}</span>
        <span @click="router.push('/kun')">{{ $tm('donate.back') }}</span>
      </div>
    </div>

    <KUNGalgameFooter style="margin-bottom: 20px; white-space: nowrap" />
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
  flex-direction: column;
  align-items: center;
  background-color: var(--kungalgame-white);
  color: var(--kungalgame-font-color-3);
}
.container {
  /* 固定宽高 */
  width: 400px;
  height: 300px;
  /* 居中 */
  margin: auto;
  display: flex;
  flex-direction: column;
  background-color: var(--kungalgame-trans-blue-0);
  box-shadow: var(--kungalgame-shadow-0);
  padding: 20px;
  position: relative;
  border-radius: 7px;
}
.container:hover {
  box-shadow: var(--kungalgame-shadow-1);
  transition: 0.3s;
}
.title {
  /* 固定高度 */
  height: 77px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* 距离下一个项目的距离 */
  margin-bottom: 30px;
  font-size: 30px;
}
.warning span {
  color: var(--kungalgame-red-5);
}
/* 按钮的样式 */
.btn {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  span {
    padding: 7px 10px;
    &:nth-child(1) {
      background-color: var(--kungalgame-trans-red-0);
      color: var(--kungalgame-red-5);
      border: 1px solid var(--kungalgame-red-4);
      cursor: pointer;
      &:hover {
        background-color: var(--kungalgame-red-1);
      }
    }
    &:nth-child(2) {
      background-color: var(--kungalgame-trans-blue-1);
      color: var(--kungalgame-blue-5);
      border: 1px solid var(--kungalgame-blue-4);
      cursor: pointer;
      &:hover {
        background-color: var(--kungalgame-trans-blue-2);
      }
    }
  }
}

@media (max-width: 700px) {
  .root {
    min-width: 100%;
  }

  .container {
    width: 90%;
  }
}
</style>
