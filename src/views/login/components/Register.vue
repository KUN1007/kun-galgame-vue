<script setup lang="ts">
import { reactive } from 'vue'

const loginForm = reactive({
  username: '',
  email: '',
  password: '',
  code: '',
})

const handleRegister = () => {}
</script>

<template>
  <!-- 注册 -->
  <div class="register">
    <form action="#" class="form" id="form2" @submit.prevent="handleRegister">
      <h2 class="title">注册</h2>
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
        v-model="loginForm.code"
        type="text"
        placeholder="邮箱验证码"
        class="input"
      />
      <button class="mail-confirm">发送验证码</button>
      <button class="btn" type="submit">注册</button>
      <span class="user-agreement"
        >点击注册表示您已经同意我们的<router-link to="/licence"
          ><span>用户协议</span></router-link
        >和<router-link to="/privacy"><span>隐私政策</span></router-link></span
      >
    </form>
  </div>
</template>

<style lang="scss" scoped>
/* 登录和注册的字体 */
.title {
  font-weight: 300;
  font-weight: bold;
  margin-bottom: 1.25rem;
  color: var(--kungalgame-font-color-2);
}

.mail-confirm {
  position: absolute;
  padding: 5px;
  height: 30px;
  bottom: 22%;
  right: 15%;
  border: 1px solid var(--kungalgame-blue-1);
  background-color: var(--kungalgame-white);
  cursor: pointer;
}
.mail-confirm:hover {
  background-color: var(--kungalgame-blue-4);
  color: var(--kungalgame-white);
}

/* 用户协议 */
.user-agreement {
  position: absolute;
  bottom: 2%;
  font-size: x-small;
  color: var(--kungalgame-font-color-1);
  text-decoration: none;
}
.user-agreement span {
  color: var(--kungalgame-red-4);
  font-style: oblique;
}

.register {
  height: 100%;
  position: absolute;
  top: 0;
  transition: all 0.6s ease-in-out;
  left: 0;
  opacity: 0;
  width: 50%;
  z-index: 1;
}

.btn {
  position: absolute;
  bottom: 7%;
  border-radius: 50px;
  background-color: var(--kungalgame-trans-white-5);
  border: 1px solid var(--kungalgame-blue-4);
  color: var(--kungalgame-blue-4);
  cursor: pointer;
  font-size: 0.9em;
  letter-spacing: 0.1rem;
  padding: 0.6rem 4rem;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}
.btn:hover {
  background-color: var(--kungalgame-blue-4);
  color: var(--kungalgame-white);
}

.btn {
  margin-top: 1.5rem;
}
/* 注册按钮的位置 */
.btn {
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
  background-color: var(--kungalgame-white);
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
  border-bottom: 1.5px solid var(--kungalgame-blue-0);
  padding: 0.9rem 0.9rem;
  margin: 0.5rem 0;
  width: 100%;
  background-color: var(--kungalgame-white);
  color: var(--kungalgame-font-color-3);
}
.input:focus {
  border-bottom: 1.5px solid var(--kungalgame-blue-4);
  transition: 0.2s linear;
}
</style>
