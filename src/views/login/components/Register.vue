<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
// 使用全局通知
import { useKUNGalgameMessageStore } from '@/store/modules/message'
// 使用用户 store
import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'
import { storeToRefs } from 'pinia'
// 全局消息组件（顶部）
import message from '@/components/alert/Message'
// 使用设置
import Settings from './Settings.vue'

import {
  isValidEmail,
  isValidName,
  isValidPassword,
  isValidMailConfirmCode,
} from '@/utils/validate'
import Code from '@/components/verification-code/Code.vue'

// 使用消息 store
const { isShowCapture, isCaptureSuccessful } = storeToRefs(
  useKUNGalgameMessageStore()
)

// 导入 i18n
import { useI18n } from 'vue-i18n'
const { tm } = useI18n()
const info = useKUNGalgameMessageStore()

// 当前的路由
const router = useRouter()
const isSendCode = ref(false)

import { registerFormItem } from './registerForm'

const registerForm = reactive<Record<string, string>>({
  name: '',
  email: '',
  password: '',
  code: '',
})

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
    message('Form cannot be empty', '表单不可为空', 'warn')
    return
  }

  // 未完成人机验证
  if (!isCaptureSuccessful.value) {
    // 显示人机验证
    isShowCapture.value = true
    return
  }

  // 标志验证码已发送
  isSendCode.value = true
}

const handleRegister = () => {
  if (!isSendCode.value) {
    message(
      'Need to send an email verification code',
      '需要发送邮箱验证码',
      'warn'
    )
    return
  }

  if (!registerForm.code.trim()) {
    message(
      'Email verification code cannot be empty',
      '邮箱验证码不可为空',
      'warn'
    )
    return
  }

  if (!isValidMailConfirmCode(registerForm.code)) {
    message(
      'Invalid email verification code format!',
      '非法的邮箱验证码格式！',
      'warn'
    )
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
        info.info(tm('AlertInfo.login.success'))
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
    <!-- 设置 -->
    <Settings />
    <!-- 注册表单 -->
    <div class="form">
      <!-- 标题 -->
      <h2 class="title">{{ $tm('login.register.title') }}</h2>

      <div class="container" v-for="item in registerFormItem" :key="item.index">
        <input
          v-model="registerForm[item.value]"
          :type="item.type"
          :placeholder="`${$tm(`login.register.${item.placeholder}`)}`"
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
      <button @click="handleRegister" class="btn" type="submit">
        {{ $tm('login.register.title') }}
      </button>

      <!-- 用户协议提示等 -->
      <span class="user-agreement">
        {{ $tm('login.register.click') }}

        <!-- 用户协议和隐私政策 -->
        <div class="licence">
          <router-link to="/agreement">
            <span>{{ $tm('login.register.agreement') }}</span>
          </router-link>
          {{ $tm('login.register.and') }}
          <router-link to="/privacy">
            <span>{{ $tm('login.register.privacy') }}</span>
          </router-link>
        </div>
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

  .licence {
    display: flex;
    justify-content: center;
  }
}

.btn {
  width: 150px;
  position: absolute;
  bottom: 10%;
  border-radius: 50px;
  background-color: var(--kungalgame-trans-white-5);
  border: 1px solid var(--kungalgame-blue-4);
  color: var(--kungalgame-blue-4);
  cursor: pointer;
  font-size: 15px;
  letter-spacing: 2px;
  padding: 7px 0;
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

@media (max-width: 700px) {
  .register {
    width: 90%;
    transition: none;
    top: 0%;
    left: 5%;
    border-radius: 7px;
    box-shadow: 0 15px 27px var(--kungalgame-blue-0),
      0 10px 10px var(--kungalgame-blue-0);
  }
  .form {
    border-radius: 5px;
  }
}
</style>
