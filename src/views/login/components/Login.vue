<script setup lang="ts">
import { reactive } from 'vue'
import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'
import { useRouter } from 'vue-router'
// 使用全局通知
import { useKUNGalgameMessageStore } from '@/store/modules/message'
import { storeToRefs } from 'pinia'
// 全局消息组件（顶部）
import Message from '@/components/alert/Message'
// 导入设置
import Settings from './Settings.vue'
// 导入 i18n
import { useI18n } from 'vue-i18n'

// 导入验证表单是否合法的函数
import { isValidEmail, isValidName, isValidPassword } from '@/utils/validate'

const router = useRouter()

const { tm } = useI18n()
const info = useKUNGalgameMessageStore()
// 使用消息 store
const { isShowCapture, isCaptureSuccessful } = storeToRefs(
  useKUNGalgameMessageStore()
)

// 用户登录的表单
const loginForm = reactive({
  name: '',
  password: '',
})

// 检查用户名
const checkUsername = (name: string) => {
  // 如果输入的字段为空
  if (!name.trim()) {
    // 提示用户输入的名字为空
    Message('Username cannot be empty', '用户名不可为空', 'warn')
    return false
  }

  if (!isValidName(name) && !isValidEmail(name)) {
    // 输入的用户名格式错误时的逻辑
    info.info(tm('AlertInfo.login.invalidUsername'))
    return false
  }

  return true
}

const checkPassword = (password: string) => {
  if (!password.trim()) {
    // 提示用户输入的密码为空
    Message('Password cannot be empty', '密码不可为空', 'warn')
    return false
  }
  // 输入的密码格式不正确时（为用户名或邮箱）
  if (!isValidPassword(password)) {
    // 如果密码非法的话返回非法密码
    info.info(tm('AlertInfo.login.invalidPassword'))
    return false
  }

  return true
}

const checkLogin = (
  name: string,
  password: string,
  isCaptureSuccessful: boolean
) => {
  // 检查用户名和密码
  if (!checkUsername(name) || !checkPassword(password)) {
    return false
  }

  // 未完成人机身份验证提示信息，直接返回
  if (!isCaptureSuccessful) {
    Message(
      'Please click above to complete the human verification',
      '请点击上方完成人机身份验证',
      'warn'
    )
    return false
  }

  return true
}

// 处理用户点击登陆时的逻辑
const handleLogin = async () => {
  // 检查用户输入,人机验证
  const result = checkLogin(
    loginForm.name,
    loginForm.password,
    isCaptureSuccessful.value
  )
  if (!result) {
    return
  }

  // 所有的验证都通过了再向后端发送请求
  const res = await useKUNGalgameUserStore().login(loginForm)
  // 如果请求成功跳转到主页
  if (res.code === 200) {
    router.push('/kun')
    Message(
      'Login Successfully! Welcome to KUN Visual Novel ~ ',
      '登陆成功!欢迎来到 鲲 Galgame ~ ',
      'success',
      5000
    )
  }
}

// 忘记密码
const handleClickForgotPassword = () => {
  router.push('/forgot')
}
</script>

<template>
  <!-- 登陆 -->
  <div class="login">
    <!-- 设置 -->
    <Settings />
    <div class="form">
      <h2 class="title">{{ $tm('login.login.loginTitle') }}</h2>
      <input
        v-model="loginForm.name"
        type="text"
        :placeholder="($tm('login.login.loginUsername') as string)"
        class="input"
      />
      <input
        v-model="loginForm.password"
        type="password"
        :placeholder="($tm('login.login.loginPassword') as string)"
        class="input"
      />

      <!-- 忘记密码 -->
      <span @click="handleClickForgotPassword" class="forget">
        {{ $tm('login.login.forget') }}
      </span>

      <!-- 人机验证 -->
      <span @click="isShowCapture = true" class="capture">
        {{ $tm('login.login.capture') }}
      </span>

      <!-- 点击登录 -->
      <button @click="handleLogin" class="btn" type="submit">
        {{ $tm('login.login.loginTitle') }}
      </button>
    </div>
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
  padding: 0 50px;
  height: 100%;
  text-align: center;
}

/* 登录和注册的字体 */
.title {
  font-weight: 300;
  font-weight: bold;
  margin-bottom: 20px;
  color: var(--kungalgame-font-color-2);
}

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

/* 忘记密码 */
.forget {
  cursor: pointer;
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
  padding: 7px 0px;
  text-transform: uppercase;
  transition: all 0.2s;
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

@media (max-width: 700px) {
  .login {
    width: 90%;
    transition: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 7px;
    box-shadow: 0 15px 27px var(--kungalgame-blue-0),
      0 10px 10px var(--kungalgame-blue-0);
  }
  .form {
    border-radius: 5px;
  }
}
</style>
