<!-- 
  TODO: 注册表单未完成，注册逻辑未完成，发送验证码的逻辑未完成，i18n 未完成
 -->
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
// 全局消息组件（顶部）
import message from '@/components/alert/Message'
import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'
import {
  isValidEmail,
  isValidName,
  isValidPassword,
  isValidMailConfirmCode,
} from '@/utils/validate'
import Code from '@/components/verification-code/Code.vue'
import Capture from '@/components/capture/Capture.vue'

const router = useRouter()
const isShowValidate = ref(false)
const isCaptureComplete = ref(false)
const isSendCode = ref(false)

import { registerFormItem } from './registerForm'

const registerForm = reactive<Record<string, string>>({
  name: '',
  email: '',
  password: '',
  code: '',
})

// 人机验证
const handleVerify = (result: boolean) => {
  if (result) {
    isShowValidate.value = false
    message(
      'Human-machine identity verification successful',
      '人机验证通过',
      'success'
    )
    isCaptureComplete.value = true
  }
}

// 验证表单是否为空
const isEmptyInput = () => {
  if (!registerForm.name.trim()) {
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
  if (!isValidName(registerForm.name)) {
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

// 发送验证码
const handleSendCode = () => {
  // 表单为空
  if (!isValidInput()) {
    return
  }

  // 未完成人机验证
  if (!isCaptureComplete.value) {
    // 显示人机验证
    isShowValidate.value = true
    return
  }

  // 标志验证码已发送
  isSendCode.value = true
}

const handleRegister = () => {
  if (!isSendCode.value) {
    return
  }

  if (!registerForm.code.trim()) {
    return
  }

  if (!isValidMailConfirmCode(registerForm.code)) {
    message('Invalid email verification code.', '邮箱验证码错误！', 'warn')
    return
  }

  // 执行注册逻辑，发送请求，后端校验验证码
  useKUNGalgameUserStore()
    .register({
      name: registerForm.name,
      email: registerForm.email,
      password: registerForm.password,
      code: registerForm.code,
    })
    .then((res) => {
      // 如果请求成功跳转到主页
      if (res.code === 200) {
        router.push('/')
        message('Register successfully!', '注册成功！', 'success')
      } else {
      }
    })
    .catch((error) => {
      console.log(error)
    })
}
</script>

<template>
  <!-- 注册 -->
  <div class="register">
    <!-- 人机验证 -->
    <Capture @validate="handleVerify" :isShowValidate="isShowValidate" />

    <!-- 注册表单 -->
    <div class="form">
      <!-- 标题 -->
      <h2 class="title">注册</h2>

      <div class="container" v-for="item in registerFormItem" :key="item.index">
        <input
          v-model="registerForm[item.value]"
          :type="item.type"
          :placeholder="item.placeholder"
          :class="item.class"
        />
      </div>

      <Code
        @click="handleSendCode"
        class="code"
        :email="registerForm.email"
        :isSendCode="isSendCode"
      />

      <!-- 注册按钮 -->
      <button @click="handleRegister" class="btn" type="submit">注册</button>

      <!-- 用户协议提示等 -->
      <span class="user-agreement">
        点击注册表示您已经同意我们的
        <router-link to="/licence"><span>用户协议</span></router-link>
        和
        <router-link to="/privacy"><span>隐私政策</span></router-link>
      </span>
    </div>
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
  margin-bottom: 20px;
  color: var(--kungalgame-font-color-2);
}

.container {
  width: 100%;
  position: relative;
}

/* 表单的设置 */
.form {
  background-color: var(--kungalgame-white);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
}

// 输入框
.input {
  border: none;
  outline: none;
  border-bottom: 1.5px solid var(--kungalgame-blue-0);
  padding: 15px;
  margin: 7px 0;
  width: 100%;
  background-color: var(--kungalgame-white);
  color: var(--kungalgame-font-color-3);
}
.input:focus {
  border-bottom: 1.5px solid var(--kungalgame-blue-4);
  transition: 0.2s linear;
}

.code {
  position: absolute;
  bottom: 120px;
  right: 50px;
}

/* 用户协议 */
.user-agreement {
  position: absolute;
  bottom: 3%;
  font-size: x-small;
  color: var(--kungalgame-font-color-1);
  text-decoration: none;
  span {
    color: var(--kungalgame-red-4);
    font-style: oblique;
  }
}

.btn {
  position: absolute;
  bottom: 10%;
  border-radius: 50px;
  background-color: var(--kungalgame-trans-white-5);
  border: 1px solid var(--kungalgame-blue-4);
  color: var(--kungalgame-blue-4);
  cursor: pointer;
  font-size: 15px;
  letter-spacing: 2px;
  padding: 7px 50px;
  text-transform: uppercase;
  transition: all 0.2s;
  margin-top: 30px;
  &:hover {
    background-color: var(--kungalgame-blue-4);
    color: var(--kungalgame-white);
  }
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
}
</style>
