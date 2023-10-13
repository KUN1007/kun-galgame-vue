<script setup lang="ts">
import { reactive, ref } from 'vue'
import Message from '@/components/alert/Message'
import { checkEmail, checkCode, checkPassword } from './check'

const input = reactive({
  email: '',
  code: '',
  newPassword: '',
  confirmPassword: '',
})

// 切换界面
const flag = ref(true)

// 发送验证码
const handleClickSendCode = () => {
  if (!checkEmail(input.email)) {
    return
  }
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
const handleChangePassword = () => {
  if (!checkPassword(input.newPassword, input.confirmPassword)) {
    return
  }
}
</script>

<template>
  <div class="root">
    <div class="container">
      <div class="title">忘记密码</div>

      <Transition mode="out-in" name="slide">
        <!-- 验证邮箱 -->
        <div class="email" v-if="flag">
          <div class="input">
            <span>您的邮箱：</span>
            <input v-model="input.email" type="text" />
          </div>

          <div class="input">
            <span>验证码：</span>
            <input v-model="input.code" type="text" />
          </div>
        </div>

        <!-- 新密码 -->
        <div class="password" v-else-if="!flag">
          <div class="input">
            <span>更改密码：</span>
            <input v-model="input.newPassword" type="text" />
          </div>
          <div class="input">
            <span>确认密码：</span>
            <input v-model="input.confirmPassword" type="text" />
          </div>
        </div>
      </Transition>

      <div class="btn">
        <button v-if="flag" @click="handleClickSendCode">发送验证码</button>
        <button v-if="flag" @click="handleClickNext">下一步</button>
        <button v-if="!flag" @click="handleClickPrev">上一步</button>
        <button v-if="!flag" @click="handleChangePassword">确定更改</button>
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
  display: flex;
  margin-bottom: 30px;

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
