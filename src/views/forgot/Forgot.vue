<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import Message from '@/components/alert/Message'
import Code from '@/components/verification-code/Code.vue'
import { checkEmail, checkCode, checkPassword } from './check'

// 使用全局通知
import { useKUNGalgameMessageStore } from '@/store/modules/message'
// 使用用户 store
import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'
import { storeToRefs } from 'pinia'

const { isShowCapture, isCaptureSuccessful } = storeToRefs(
  useKUNGalgameMessageStore()
)

const input = reactive({
  email: '',
  code: '',
  newPassword: '',
  confirmPassword: '',
})

const router = useRouter()
// 切换界面
const flag = ref(true)
// 是否发送了验证码
const isSendCode = ref(false)

// 发送验证码
const handleClickSendCode = () => {
  if (!checkEmail(input.email)) {
    return
  }

  // 未完成人机验证
  if (!isCaptureSuccessful.value) {
    // 显示人机验证
    isShowCapture.value = true
    return
  }

  // 发送验证码
  isSendCode.value = true
}

// 下一步
const handleClickNext = () => {
  if (!checkCode(input.email, input.code)) {
    return
  }
  flag.value = false
}

// 上一步
const handleClickPrev = () => {
  flag.value = true
}

// 确定更改密码
const handleChangePassword = async () => {
  if (!checkPassword(input.newPassword, input.confirmPassword)) {
    return
  }

  // 确定更改密码吗?
  const result = await useKUNGalgameMessageStore().alert(
    'AlertInfo.code.password',
    true
  )
  if (!result) {
    return
  }

  const response = await useKUNGalgameUserStore().updatePasswordByEmail(
    input.email,
    input.code,
    input.newPassword
  )

  if (response.code === 200) {
    router.push('/login')
    Message('Password change successfully!', '密码更改成功', 'success')
  } else {
    Message('Password change failed!', '密码更改失败', 'error')
  }
}
</script>

<template>
  <div class="root">
    <div class="container">
      <div class="title">{{ $tm('forgot.title') }}</div>

      <Transition mode="out-in" name="slide">
        <!-- 验证邮箱 -->
        <div class="email" v-if="flag">
          <div class="input">
            <span>{{ $tm('forgot.email') }}: </span>
            <input v-model="input.email" type="text" />
          </div>

          <div class="input">
            <span>{{ $tm('forgot.code') }}: </span>
            <input v-model="input.code" type="text" />
          </div>
        </div>

        <!-- 新密码 -->
        <div class="password" v-else-if="!flag">
          <div class="input">
            <span>{{ $tm('forgot.new') }}: </span>
            <input v-model="input.newPassword" type="password" />
          </div>
          <div class="input">
            <span>{{ $tm('forgot.rePwd') }}: </span>
            <input v-model="input.confirmPassword" type="password" />
          </div>
        </div>
      </Transition>

      <div class="btn">
        <Code
          v-if="flag"
          @click="handleClickSendCode"
          class="code"
          :email="input.email"
          :isSendCode="isSendCode"
        />
        <button v-if="flag" @click="handleClickNext">
          {{ $tm('forgot.next') }}
        </button>
        <button v-if="!flag" @click="handleClickPrev">
          {{ $tm('forgot.prev') }}
        </button>
        <button v-if="!flag" @click="handleChangePassword">
          {{ $tm('forgot.confirm') }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.root {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
    var(--kungalgame-trans-pink-0),
    var(--kungalgame-trans-blue-0)
  );
  display: flex;
}

.container {
  margin: auto;
  width: 300px;
  height: 400px;
  background-color: var(--kungalgame-white);
  border-radius: 5px;
  box-shadow: var(--shadow);
}

.title {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  font-size: large;
  background-color: var(--kungalgame-blue-4);
  border-radius: 5px 5px 0 0;
  color: var(--kungalgame-white);
}

.email,
.password {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  margin-top: 50px;
}

.input {
  padding: 0 10px;
  display: flex;
  margin-bottom: 30px;
  justify-content: space-between;

  input {
    border: none;
    border-bottom: 1.5px solid var(--kungalgame-blue-1);
    transition: all 0.2s;

    &:focus {
      border-bottom: 1.5px solid var(--kungalgame-blue-4);
    }
  }
}

.btn {
  width: 100%;
  display: flex;
  justify-content: center;

  button {
    cursor: pointer;
    width: 110px;
    height: 33px;
    padding: 7px 10px;
    border: 1px solid var(--kungalgame-blue-4);
    border-radius: 5px;
    background-color: var(--kungalgame-white);
    margin: 10px;
    color: var(--kungalgame-blue-4);
  }
}

.slide-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>