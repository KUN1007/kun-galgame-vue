<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useKUNGalgamerStore } from '@/store/modules/kungalgamer'
import { useRouter } from 'vue-router'
// 使用全局通知
import { useKUNGalgameMessageStore } from '@/store/modules/message'

// 导入人机验证组件
import Capture from '@/components/capture/Capture.vue'

// 导入验证表单是否合法的函数
import { isValidEmail, isValidName, isValidPassword } from '@/utils/validate'

// 导入 i18n
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

// 定义人机验证的标志
const isShowValidate = ref(false)
// 定义人机验证是否完成的标志
const isCaptureComplete = ref(false)

const router = useRouter()

const info = useKUNGalgameMessageStore()

const useStore = useKUNGalgamerStore()

const registerForm = reactive({
  username: '',
  email: '',
  password: '',
  code: '',
})

const handleVerify = (result: boolean) => {
  if (result) {
    // 处理人机校验完成后的逻辑
    isShowValidate.value = false
    info.info(t('AlertInfo.capture.success'))
    isCaptureComplete.value = true
  }
}

const isEmptyInput = () => {
  // 如果输入的字段为空
  if (!registerForm.username.trim()) {
    // 提示用户输入的名字为空
    info.info(t('AlertInfo.login.emptyUsername'))
    return false
  } else if (!registerForm.password.trim()) {
    // 提示用户输入的密码为空
    info.info(t('AlertInfo.login.emptyPassword'))
    return false
  } else {
    return true
  }
}

// 判断输入的用户名和密码字段是否合法
const isValidInput = (): boolean => {
  // 如果输入为空直接返回 false
  if (!isEmptyInput()) {
    return false
  }
  if (
    isValidEmail(registerForm.username) ||
    isValidName(registerForm.username)
  ) {
    // 输入的用户名正确时（为用户名或邮箱）
    if (isValidPassword(registerForm.password)) {
      return true
    } else {
      // 如果密码非法的话返回非法密码
      info.info(t('AlertInfo.login.invalidPassword'))
      return false
    }
  } else {
    // 输入的用户名或邮箱错误时的逻辑
    info.info(t('AlertInfo.login.invalidUsername'))
    return false
  }
}

// 处理用户点击登陆时的逻辑
const handleRegister = () => {
  // 保证输入格式和人机验证通过才能发送登录请求
  if (isValidInput()) {
    // 未完成人机身份验证提示信息，直接返回
    if (!isCaptureComplete.value) {
      return
    }
    // 所有的验证都通过了再向后端发送请求
    // TODO:在这里执行注册函数
  }
}
</script>

<template>
  <!-- 注册 -->
  <div class="register">
    <Capture @validate="handleVerify" :isShowValidate="isShowValidate" />
    <form action="#" class="form" id="form2" @submit.prevent="handleRegister">
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
        type="password"
        placeholder="密码"
        class="input"
      />
      <input
        v-model="registerForm.code"
        type="text"
        placeholder="邮箱验证码"
        class="input"
      />
      <!-- 发送时进行人机验证 -->
      <button @click="isShowValidate = true" class="mail-confirm">
        发送验证码
      </button>
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
  bottom: 23%;
  right: 15%;
  border: 1px solid var(--kungalgame-blue-1);
  color: var(--kungalgame-font-color-2);
  background-color: var(--kungalgame-white);
  cursor: pointer;
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
