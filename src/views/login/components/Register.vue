<!-- 
  TODO: 注册表单未完成，注册逻辑未完成，发送验证码的逻辑未完成，i18n 未完成
 -->
<script setup lang="ts">
import { ref, reactive } from 'vue'
// 全局消息组件（顶部）
import message from '@/components/alert/Message'
import { useKUNGalgameMessageStore } from '@/store/modules/message'
import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'
import {
  isValidEmail,
  isValidName,
  isValidPassword,
  isValidMailConfirmCode,
} from '@/utils/validate'
import Code from '@/components/verification-code/Code.vue'
import Capture from '@/components/capture/Capture.vue'

const info = useKUNGalgameMessageStore()

const isCapturePass = ref(false)import { useI18n } from 'vue-i18n'
const isCaptureComplete = ref(false)
const isSendCode = ref(false)

const registerForm = reactive({
  username: '',
  email: '',
  password: '',
  code: '',
})

// 人机验证
const handleCapture = (result: boolean) => {
  if (result) {
    message(
      'Human-machine identity verification successful',
      '人机验证通过',
      'success'
    )
    isCapturePass.value = true
    isCaptureComplete.value = true
  } else {
    isCapturePass.value = false
  }
}

// 验证表单是否为空
const isEmptyInput = () => {
  if (!registerForm.username.trim()) {
    message('Username cannot be empty!', '用户名不可为空！', 'warn')
    return false
  } else if (!registerForm.email.trim()) {
    message('Email cannot be empty!', '邮箱不可为空！', 'warn')
    return false
  } else if (!registerForm.password.trim()) {
    message('Password cannot be empty!', '密码不可为空！', 'warn')
    return false
  } else {
    return true
  }
}

// 验证表单是否合法
const isValidInput = (): boolean => {
  if (!isEmptyInput()) {
    return false
  }
  if (!isValidName(registerForm.username)) {
    message('Invalid username format!', '非法的用户名格式！', 'warn')
    return false
  }
  if (!isValidEmail(registerForm.email)) {
    message('Invalid email format!', '非法的邮箱格式！', 'warn')
    return false
  }
  if (!isValidPassword(registerForm.password)) {
    message('Invalid password format!', '非法的密码格式！', 'warn')
    return false
  }
  return true
}

const handleSendCode = () => {
  // 验证码为空
  if (!isValidInput()) {
    return
  }

  if (!isCaptureComplete.value) {
    return
  }
}

const handleRegister = () => {
  if (!isSendCode.value) {
    return
  }

  if (!registerForm.code.trim()) {
    return
  }

  if (!isValidMailConfirmCode(registerForm.code)) {
    info.info('非法的邮箱验证码')
    return
  }

  // 执行注册逻辑，发送请求，后端校验验证码
}
</script>

<template>
  <!-- 注册 -->
  <div class="register">
    <Capture @validate="handleCapture" :isShowValidate="isCapturePass" />
    <form action="#" class="form" @submit.prevent="handleRegister">
      <h2 class="title">注册</h2>
      <input
        v-model="registerForm.username"
        type="text"
        placeholder="用户名"
        class="input"
      />
      <input
        v-model="registerForm.email"
        type="email"
        placeholder="邮箱"
        class="input"
      />
      <input
        v-model="registerForm.password"
        type="text"
        placeholder="密码"
        class="input"
      />
      <input
        v-model="registerForm.code"
        type="text"
        placeholder="邮箱验证码"
        class="input"
      />
      <div @click="handleSendCode" class="mail-confirm">
        <Code :send="isSendCode" />
      </div>
      <button class="btn" type="submit">注册</button>
      <span class="user-agreement">
        点击注册表示您已经同意我们的
        <router-link to="/licence"><span>用户协议</span></router-link>
        和
        <router-link to="/privacy"><span>隐私政策</span></router-link>
      </span>
    </form>
  </div>
</template>

<style lang="scss" scoped>
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
/* 登录和注册的字体 */
.title {
  font-weight: 300;
  font-weight: bold;
  margin-bottom: 1.25rem;
  color: var(--kungalgame-font-color-2);
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

.mail-confirm {
  position: absolute;
  padding: 5px;
  height: 30px;
  bottom: 24%;
  right: 15%;
}
.mail-confirm:hover {
  color: var(--kungalgame-blue-4);
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
  margin-top: 30px;
}
.btn:hover {
  background-color: var(--kungalgame-blue-4);
  color: var(--kungalgame-white);
}

.btn:active {
  transform: scale(0.95);
}

.btn:focus {
  outline: none;
}
</style>
