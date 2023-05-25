<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Ref, ref } from 'vue'
import { log } from 'console'

let isLogIn: Ref<string> = ref('right-panel-active')

const handleSignIn = () => {
  isLogIn.value = ''
}

const handleSignUp = () => {
  isLogIn.value = 'right-panel-active'
}
const router = useRouter()

const login = () => {
  router.push({ path: '/' })
}
const register = () => {
  router.push({ path: '/' })
}
</script>

<template>
  <div class="root">
    <div class="container" :class="isLogIn">
      <!-- 登陆 -->
      <div class="container__form container--signin">
        <!-- 阻止冒泡？ -->
        <form action="#" class="form" id="form1" @submit.preventDefault>
          <h2 class="form__title">登陆</h2>
          <input type="email" placeholder="用户名或邮箱" class="input" />
          <input type="password" placeholder="密码" class="input" />
          <a href="#" class="link">忘记密码? 点击发送重置邮件</a>
          <button class="btn" @click="login">登陆</button>
        </form>
      </div>

      <!-- 注册 -->
      <div class="container__form container--signup">
        <!-- 阻止冒泡？ -->
        <form action="#" class="form" id="form2" @submit.preventDefault>
          <h2 class="form__title">注册</h2>
          <!--           <input type="text" placeholder="用户名 (中文 < 7个字符, 英文 < 14 个字符" class="input" />
          <input type="email" placeholder="邮箱 (gmail, outlook, sina, qq, 163" class="input" />
          <input type="password" placeholder="密码 (7 ~ 17位, 数字、字母、符号组合" class="input" /> -->
          <input type="text" placeholder="用户名" class="input" />
          <input type="email" placeholder="邮箱" class="input" />
          <input type="password" placeholder="密码" class="input" />
          <input type="text" placeholder="验证码" class="input" />
          <button class="mail-confirm">发送验证码</button>
          <button class="btn" @click="register">注册</button>
          <a href="#" class="user-agreement"
            >点击注册表示您已经同意我们的<span>用户协议</span></a
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
            <button class="btn" id="signIn" @click="handleSignIn">登陆</button>
          </div>
          <div class="overlay__panel overlay--right">
            <h2>
              欢迎回家 <br />
              <br />
              KUNgalgame 给你最温暖的拥抱
            </h2>
            <button class="btn" id="signUp" @click="handleSignUp">注册</button>
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
  top: 46%;
  right: 12%;
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
  background: url('$/assets/images/bg/bg1.png');
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
