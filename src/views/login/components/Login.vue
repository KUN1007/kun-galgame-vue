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

// 用户登录的表单
const loginForm = reactive({
  username: '',
  password: '',
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
  if (!loginForm.username.trim()) {
    // 提示用户输入的名字为空
    info.info(t('AlertInfo.login.emptyUsername'))
    return false
  } else if (!loginForm.password.trim()) {
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
  if (isValidEmail(loginForm.username) || isValidName(loginForm.username)) {
    // 输入的用户名或邮箱错误时的逻辑
    info.info(t('AlertInfo.login.invalidUsername'))
    return false
  }
  // 输入的用户名不正确时（为用户名或邮箱）
  if (!isValidPassword(loginForm.password)) {
    // 如果密码非法的话返回非法密码
    info.info(t('AlertInfo.login.invalidPassword'))
    return false
  }
  return true
}

// 处理用户点击登陆时的逻辑
const handleLogin = () => {
  // 保证输入格式和人机验证通过才能发送登录请求
  if (!isValidInput()) {
    return
  }
  // 未完成人机身份验证提示信息，直接返回
  if (!isCaptureComplete.value) {
    info.info(t('AlertInfo.capture.click'))
    return
  }
  // 所有的验证都通过了再向后端发送请求
  useStore.login(loginForm).then((res) => {
    // 如果请求成功跳转到主页
    if (res.success) {
      router.push('/')
      info.info(t('AlertInfo.login.success'))
    }
  })
}
</script>

<template>
  <!-- 登陆 -->
  <div class="login">
    <Capture @validate="handleVerify" :isShowValidate="isShowValidate" />
    <form class="form" @submit.prevent="handleLogin">
      <h2 class="title">{{ $t('login.loginTitle') }}</h2>
      <input
        v-model="loginForm.username"
        type="text"
        :placeholder="$t('login.loginUsername')"
        class="input"
      />
      <input
        v-model="loginForm.password"
        type="password"
        :placeholder="$t('login.loginPassword')"
        class="input"
      />
      <span class="forget">{{ $t('login.forget') }}</span>
      <span @click="isShowValidate = true" class="capture">{{
        $t('login.capture')
      }}</span>
      <button class="btn" type="submit">
        {{ $t('login.loginTitle') }}
      </button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.login {
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  z-index: 2;
  transition: all 0.6s ease-in-out;
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

/* 登录和注册的字体 */
.title {
  font-weight: 300;
  font-weight: bold;
  margin-bottom: 1.25rem;
  color: var(--kungalgame-font-color-2);
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

/* 获取验证码 */
.forget {
  text-decoration: none;
  font-size: small;
  color: var(--kungalgame-blue-4);
  margin: 20px 0;
}

.capture {
  color: var(--kungalgame-font-color-2);
  cursor: pointer;
  font-size: 15px;
}

.btn {
  position: absolute;
  margin-top: 1.5rem;
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
  overflow: hidden;
  white-space: nowrap;
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
