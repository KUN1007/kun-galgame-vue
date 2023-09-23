<script setup lang="ts">
import { ref } from 'vue'

import KUNGalgameFooter from '@/components/KUNGalgameFooter.vue'

// 导入登录面板
import Login from './components/Login.vue'

// 导入注册面板
import Register from './components/Register.vue'

import Settings from './components/Settings.vue'

const isShowPanel = ref('')

// 点击登录，面板滑动
const handleClickSignIn = () => {
  isShowPanel.value = ''
}

// 点击注册，面板滑动
const handleClickRegister = () => {
  isShowPanel.value = 'active'
}
</script>

<template>
  <Settings />
  <div class="root">
    <div class="container" :class="isShowPanel">
      <!-- 登录面板 -->
      <Login class="login" />
      <!-- 注册面板 -->
      <Register class="register" />

      <!-- 侧边 -->
      <div class="container-overlay">
        <div class="overlay">
          <div class="panel left">
            <h2>
              {{ $tm('login.overlay.title') }}<br /><br />——
              {{ $tm('login.overlay.world') }}
              <span>{{ $tm('login.overlay.moe') }}</span>
              {{ $tm('login.overlay.forum') }}
            </h2>
            <br />
            <button class="btn" @click="handleClickSignIn">
              {{ $tm('login.overlay.login') }}
            </button>
          </div>
          <div class="panel right">
            <h2>
              {{ $tm('login.overlay.home') }}
              <br />
              <br />
              {{ $tm('login.overlay.kun') }}
              <br />
              {{ $tm('login.overlay.hug') }}
            </h2>
            <button class="btn" @click="handleClickRegister">
              {{ $tm('login.overlay.register') }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 版权 -->
    <KUNGalgameFooter
      style="position: absolute; bottom: 2%; white-space: nowrap"
    />
  </div>
</template>

<style lang="scss" scoped>
.root {
  align-items: center;
  display: grid;
  height: 100vh;
  place-items: center;
  min-height: 500px;
  min-width: 800px;
  background: linear-gradient(
    var(--kungalgame-trans-pink-0),
    var(--kungalgame-trans-blue-0)
  );
  position: relative;
  background-color: var(--kungalgame-white);
}

/* 总容器 */
.container {
  /* 背景图片 */
  background: url('@/assets/images/bg/bg1.png');
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  /* 圆角 */
  border-radius: 5px;
  /* 容器的阴影 */
  box-shadow: 0 0.9rem 1.7rem var(--kungalgame-blue-0),
    0 0.7rem 0.7rem var(--kungalgame-blue-0);
  height: 490px;
  max-width: 700px;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.container.active {
  .login {
    transform: translateX(100%);
  }
  .register {
    animation: show 0.6s;
    opacity: 1;
    transform: translateX(100%);
    z-index: 5;
  }
  .container-overlay {
    transform: translateX(-100%);
  }
  .overlay {
    transform: translateX(50%);
  }
  .left {
    transform: translateX(0);
  }
  .right {
    transform: translateX(20%);
  }
}

.container-overlay {
  height: 100%;
  left: 50%;
  overflow: hidden;
  position: absolute;
  top: 0;
  transition: transform 0.6s ease-in-out;
  width: 50%;
}

.overlay {
  height: 100%;
  left: -100%;
  position: relative;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  width: 200%;

  h2 {
    margin-top: 150px;
    font-size: medium;
    color: var(--kungalgame-font-color-2);
  }

  h2 span {
    color: var(--kungalgame-red-4);
    padding: 0 5px;
    font-size: 20px;
  }

  .left {
    transform: translateX(-20%);
  }

  .right {
    right: 0;
    transform: translateX(0);
  }
}

/* 交互页面的盒子 */
.panel {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  position: absolute;
  text-align: center;
  top: 0;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  width: 50%;
  background-color: var(--kungalgame-trans-white-5);
}

.btn {
  width: 150px;
  position: absolute;
  border-radius: 50px;
  cursor: pointer;
  font-size: 15px;
  letter-spacing: 2px;
  padding: 7px 0px;
  text-transform: uppercase;
  transition: all 0.2s;
  overflow: hidden;
  white-space: nowrap;
  /* 红色按钮距离底部的距离 */
  position: absolute;
  bottom: 10%;
  background-color: var(--kungalgame-red-0);
  border: 1px solid var(--kungalgame-red-4);
  color: var(--kungalgame-red-4);

  &:hover {
    background-color: var(--kungalgame-red-4);
    color: var(--kungalgame-white);
  }

  &:active {
    transform: scale(0.95);
  }
}

@keyframes show {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}
</style>
