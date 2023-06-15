<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useKUNGalgamerStore } from '@/store/modules/kungalgamer'
import { useRouter } from 'vue-router'
// 使用全局通知
import { useKUNGalgameMessageStore } from '@/store/modules/message'

// 导入人机验证组件
import Capture from '@/components/capture/Capture.vue'

const router = useRouter()

const info = useKUNGalgameMessageStore()

const useStore = useKUNGalgamerStore()

const loginForm = reactive({
  username: '',
  password: '',
})

const handleLogin = () => {
  useStore.login(loginForm).then((res) => {
    if (res.success) {
      router.push('/')
      info.info('AlertInfo.login')
    }
  })
}

// 定义标志位
const isFirstLoad = ref(false)
// 定义人机验证的标志
const isShowValidate = ref(false)

const handleVerify = async (result: boolean) => {
  // 跳过首次加载页面
  if (isFirstLoad.value) {
    // 处理人机校验完成后的逻辑
    isShowValidate.value = false
    info.info('验证通过')
  } else {
    isFirstLoad.value = true
  }
}

const capture = () => {
  isShowValidate.value = true
}
</script>

<template>
  <!-- 登陆 -->
  <div class="login">
    <Capture @validate="handleVerify" :isShowValidate="isShowValidate" />
    <form class="form" @submit.prevent="handleLogin">
      <h2 class="title">登陆</h2>
      <input
        v-model="loginForm.username"
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
      <span class="forget">忘记密码? 点击发送重置邮件</span>
      <span @click="capture" class="capture">点击进行人机身份验证</span>
      <button class="btn" type="submit">登陆</button>
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

.form > .btn {
  margin-top: 1.5rem;
}

.btn:active {
  transform: scale(0.95);
}

.btn:focus {
  outline: none;
}
</style>
