<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useKUNGalgamerStore } from '@/store/modules/kungalgamer'
import { useMutation } from '@tanstack/vue-query'
import { useRouter } from 'vue-router'
import { request } from '@/utils/request'

const isShowPanel = ref('')
const loginForm = reactive({
  username: '',
  email: '',
  password: '',
  verificationCode: '',
})

const useStore = useKUNGalgamerStore()

const router = useRouter()

// 登录请求
const loginMutation = useMutation(async (data: any) => {
  const res = await request('http://127.0.0.1:10007/api/login', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
  return await res.json()
})

// 注册请求
const registerMutation = useMutation(async (data: any) => {
  const res = await request('http://127.0.0.1:10007/api/register', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
  return await res.json()
})

// 点击登录，面板滑动
const handleClickSignIn = () => {
  isShowPanel.value = ''
}

// 点击注册，面板滑动
const handleClickRegister = () => {
  isShowPanel.value = 'right-panel-active'
}

const handleLogin = () => {
  const { email, password } = loginForm
  if (email && password) {
    loginMutation.mutate(
      { email, password },
      {
        onSuccess: (response: any) => {
          if (response.success) {
            const token = response.token
            useStore.setToken(token)
            router.push({ path: '/' })
          } else {
            console.log('登录失败:', response.error)
          }
        },
      }
    )
  } else {
    console.log('请输入有效的邮箱和密码')
  }
}

const handleRegister = () => {
  const { username, email, password, verificationCode } = loginForm
  if (username && email && password && verificationCode) {
    registerMutation.mutate(
      { username, email, password, verificationCode },
      {
        onSuccess: (response: any) => {
          if (response.success) {
            console.log('注册成功')
            // 执行其他操作，例如跳转到登录页面等
          } else {
            console.log('注册失败:', response.error)
            // 执行其他操作，例如显示错误提示等
          }
        },
      }
    )
  } else {
    console.log('请填写完整的注册信息')
  }
}
</script>

<template>
  <div class="root">
    <div class="container" :class="isShowPanel">
      <!-- 登陆 -->
      <div class="container__form container--signin">
        <form action="#" class="form" id="form1" @submit.prevent="handleLogin">
          <h2 class="form__title">登陆</h2>
          <input
            v-model="loginForm.email"
            type="email"
            placeholder="用户名或邮箱"
            class="input"
          />
          <input
            v-model="loginForm.password"
            type="password"
            placeholder="密码"
            class="input"
          />
          <a href="#" class="link">忘记密码? 点击发送重置邮件</a>
          <button class="btn" type="submit">登陆</button>
        </form>
      </div>

      <!-- 注册 -->
      <div class="container__form container--signup">
        <form
          action="#"
          class="form"
          id="form2"
          @submit.prevent="handleRegister"
        >
          <h2 class="form__title">注册</h2>
          <input
            v-model="loginForm.username"
            type="text"
            placeholder="用户名"
            class="input"
          />
          <input
            v-model="loginForm.email"
            type="email"
            placeholder="邮箱"
            class="input"
          />
          <input
            v-model="loginForm.password"
            type="password"
            placeholder="密码"
            class="input"
          />
          <input
            v-model="loginForm.verificationCode"
            type="text"
            placeholder="验证码"
            class="input"
          />
          <button class="mail-confirm">发送验证码</button>
          <button class="btn" type="submit">注册</button>
          <span class="user-agreement"
            >点击注册表示您已经同意我们的<router-link to="/licence"
              ><span>用户协议</span></router-link
            >和<router-link to="/privacy"
              ><span>隐私政策</span></router-link
            ></span
          >
        </form>
      </div>

      <!-- 侧边 -->
      <div class="container__overlay">
        <div class="overlay">
          <div class="overlay__panel overlay--left">
            <h2>
              欢迎注册 KUNgalgame <br /><br />—— 世界上最<span>萌</span>的
              galgame 论坛
            </h2>
            <br />
            <button class="btn" id="signIn" @click="handleClickSignIn">
              登陆
            </button>
          </div>
          <div class="overlay__panel overlay--right">
            <h2>
              欢迎回家 <br />
              <br />
              KUNgalgame 给你最温暖的拥抱
            </h2>
            <button class="btn" id="signUp" @click="handleClickRegister">
              注册
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 版权 -->
    <div class="copyright">
      <span>Copyright © 2023 KUNgalgame</span>
      <span>All rights reserved | Version 0.01</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  list-style: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
}
/* 不显示滚动条 */
*::-webkit-scrollbar {
  display: none;
}
.root {
  align-items: center;
  display: grid;
  height: 100vh;
  place-items: center;
  min-height: 500px;
  min-width: 800px;
  background: linear-gradient($kungalgame-pink-0, $kungalgame-blue-0);
  background-repeat: no-repeat;
  position: relative;
}
/* 登录和注册的字体 */
.form__title {
  font-weight: 300;
  font-weight: bold;
  margin-bottom: 1.25rem;
  color: $kungalgame-font-color-2;
}

/* 获取验证码 */
.mail-confirm,
.link {
  text-decoration: none;
  font-size: small;
  color: $kungalgame-blue-4;
}
.mail-confirm {
  position: absolute;
  padding: 5px;
  height: 30px;
  bottom: 22%;
  right: 15%;
  border: 1px solid $kungalgame-blue-1;
  background-color: $kungalgame-white;
  cursor: pointer;
}
.mail-confirm:hover {
  background-color: $kungalgame-blue-4;
  color: $kungalgame-white;
}
/* 忘记密码 */
.link {
  margin: 20px 0;
}
/* 用户协议 */
.user-agreement {
  position: absolute;
  bottom: 2%;
  font-size: x-small;
  color: $kungalgame-font-color-1;
  text-decoration: none;
}
.user-agreement span {
  color: $kungalgame-red-4;
  font-style: oblique;
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
  box-shadow: 0 0.9rem 1.7rem $kungalgame-blue-0,
    0 0.7rem 0.7rem $kungalgame-blue-0;
  height: 490px;
  max-width: 700px;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.container__form {
  height: 100%;
  position: absolute;
  top: 0;
  transition: all 0.6s ease-in-out;
}

.container--signin {
  left: 0;
  width: 50%;
  z-index: 2;
}

.container.right-panel-active .container--signin {
  transform: translateX(100%);
}

.container--signup {
  left: 0;
  opacity: 0;
  width: 50%;
  z-index: 1;
}

.container.right-panel-active .container--signup {
  animation: show 0.6s;
  opacity: 1;
  transform: translateX(100%);
  z-index: 5;
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

.container__overlay {
  height: 100%;
  left: 50%;
  overflow: hidden;
  position: absolute;
  top: 0;
  transition: transform 0.6s ease-in-out;
  width: 50%;
  z-index: 100;
}

.container.right-panel-active .container__overlay {
  transform: translateX(-100%);
}

.overlay {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  left: -100%;
  position: relative;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  width: 200%;
}

.container.right-panel-active .overlay {
  transform: translateX(50%);
}

.btn {
  position: absolute;
  bottom: 7%;
  border-radius: 50px;
  background-color: $kungalgame-trans-white-1;
  border: 1px solid $kungalgame-blue-4;
  color: $kungalgame-blue-4;
  cursor: pointer;
  font-size: 0.9em;
  letter-spacing: 0.1rem;
  padding: 0.6rem 4rem;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  overflow: hidden;
  white-space: nowrap;
}
.btn:hover {
  background-color: $kungalgame-blue-4;
  color: $kungalgame-trans-white-1;
}
/* 交互页面的盒子 */
.overlay__panel {
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
  background-color: $kungalgame-trans-white-5;
}
.overlay__panel .btn {
  /* 红色按钮距离底部的距离 */
  position: absolute;
  bottom: 7%;
  background-color: $kungalgame-red-0;
  border: 1px solid $kungalgame-red-4;
  color: $kungalgame-red-4;
}
.overlay__panel .btn:hover {
  background-color: $kungalgame-red-4;
  color: $kungalgame-trans-white-1;
}

.overlay__panel h2 {
  margin-top: 150px;
  font-size: medium;
  color: #333;
}
.overlay__panel h2 span {
  color: $kungalgame-red-4;
  padding: 0 5px;
  font-size: large;
}

.overlay--left {
  transform: translateX(-20%);
}

.container.right-panel-active .overlay--left {
  transform: translateX(0);
}

.overlay--right {
  right: 0;
  transform: translateX(0);
}

.container.right-panel-active .overlay--right {
  transform: translateX(20%);
}

.form > .btn {
  margin-top: 1.5rem;
}
/* 注册按钮的位置 */
.container--signup .btn {
  margin-top: 30px;
}

.btn:active {
  transform: scale(0.95);
}

.btn:focus {
  outline: none;
}
/* 表单的设置 */
.form {
  background-color: $kungalgame-white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 3rem;
  height: 100%;
  text-align: center;
}

.input {
  border: none;
  outline: none;
  border-bottom: 1.5px solid $kungalgame-blue-0;
  padding: 0.9rem 0.9rem;
  margin: 0.5rem 0;
  width: 100%;
}
.input:focus {
  border-bottom: 1.5px solid $kungalgame-blue-4;
  transition: 0.2s linear;
}
.copyright {
  position: absolute;
  bottom: 2%;
  white-space: nowrap;
}
</style>
