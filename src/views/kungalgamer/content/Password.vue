<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import type { UserInfo } from '@/api'
import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'
import Message from '@/components/alert/Message'
import {
  checkSendCode,
  checkResetEmail,
  checkChangePassword,
} from '../utils/check'

const props = defineProps<{
  user: UserInfo
}>()

// 当前用户的邮箱
const email = ref('')
// 已经发送验证码的邮箱
const hasSentCodeEmail = ref('')

// 5 个输入框的值
const input = reactive({
  newEmail: '',
  code: '',
  oldPassword: '',
  newPassword: '',
  repeatPassword: '',
})

// 发送邮箱验证码
const handleSendCode = async () => {
  // 检查必要信息
  if (!checkSendCode(input.newEmail)) {
    return
  }

  hasSentCodeEmail.value = input.newEmail
  Message(
    'The email verification code is being sent ~~~',
    '邮箱验证码正在发送 ~~~',
    'info'
  )
  const res = await useKUNGalgameUserStore().getResetEmailCode(input.newEmail)

  if (res.code === 200) {
    Message(
      'Reset email verification code send successfully!',
      '重置邮箱验证码发送成功！',
      'success'
    )
  } else {
    Message(
      'Reset email verification code send failed!',
      '重置邮箱验证码发送失败！',
      'error'
    )
  }
}

// 更改邮箱
const handleResetEmail = async () => {
  // 检查必要信息
  if (!checkResetEmail(hasSentCodeEmail.value, input.newEmail, input.code)) {
    return
  }

  input.newEmail = ''
  input.code = ''
  const res = await useKUNGalgameUserStore().updateEmail(
    hasSentCodeEmail.value,
    input.code
  )

  if (res.code === 200) {
    Message('Email change successfully!', '邮箱更改成功', 'success')
  } else {
    Message('Email change failed!', '邮箱更改失败', 'error')
  }
}

// 更改密码
const handleChangePassword = async () => {
  // 检查必要信息
  if (
    !checkChangePassword(
      input.oldPassword,
      input.newPassword,
      input.repeatPassword
    )
  ) {
    return
  }

  const res = await useKUNGalgameUserStore().updatePassword(
    input.oldPassword,
    input.newPassword
  )

  if (res.code === 200) {
    Message('Password change successfully!', '密码更改成功', 'success')
  } else {
    Message('Password change failed!', '密码更改失败', 'error')
  }
}

onMounted(async () => {
  const response = await useKUNGalgameUserStore().getEmail()

  if (response.code === 200) {
    email.value = response.data.email
  } else {
    Message('Get email failed!', '获取邮箱失败！', 'error')
  }
})
</script>

<template>
  <!-- 右侧内容区 -->
  <div class="article">
    <!-- 更改邮箱 -->
    <div class="email">
      <div class="title">更改邮箱:</div>
      <div class="current-email">您当前的邮箱是: {{ email }}</div>
      <div class="input">
        <span>请输入您的新邮箱: </span>
        <input v-model="input.newEmail" type="text" />
      </div>
      <div class="input">
        <span>请输入您的验证码: </span>
        <input v-model="input.code" type="text" />
      </div>

      <div class="btn">
        <button @click="handleSendCode" v-if="!hasSentCodeEmail">
          发送验证码
        </button>
        <button @click="handleResetEmail">确定更改邮箱</button>
      </div>
    </div>
    <!-- 用户更改密码 -->
    <div class="password">
      <div class="title">更改密码:</div>
      <div class="input">
        <span>请输入您的旧密码: </span>
        <input v-model="input.oldPassword" type="password" />
      </div>
      <div class="input">
        <span>请输入您的新密码: </span>
        <input v-model="input.newPassword" type="password" />
      </div>
      <div class="input">
        <span>请再次输入新密码: </span>
        <input v-model="input.repeatPassword" type="password" />
      </div>

      <div class="btn">
        <button @click="handleChangePassword">确定更改密码</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 内容区 */
.article {
  width: 100%;
  height: 100%;
  padding: 10px 17px;
}

.email {
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
}

.title {
  margin-bottom: 10px;
}

.current-email {
  margin: 10px 0;
  display: flex;
  justify-content: center;
}

.input {
  margin: 10px 0;
  display: flex;
  justify-content: space-around;
  input {
    height: 25px;
    padding-left: 5px;
    border: 1px solid var(--kungalgame-blue-4);
    background-color: var(--kungalgame-trans-white-9);
    &:focus {
      background-color: var(--kungalgame-trans-blue-0);
    }
  }
}

.btn {
  display: flex;
  justify-content: space-around;

  button {
    cursor: pointer;
    padding: 5px 17px;
    border: 1px solid var(--kungalgame-blue-4);
    background-color: var(--kungalgame-trans-white-9);
    border-radius: 5px;
    color: var(--kungalgame-blue-4);
    transition: all 0.2s;

    &:hover {
      background-color: var(--kungalgame-blue-4);
      color: var(--kungalgame-white);
    }
    &:active {
      transform: scale(0.9);
    }
  }
}

@media (max-width: 700px) {
  .article {
    font-size: small;
  }
  .title {
    font-size: medium;
  }
  .input {
    span {
      margin-right: 5px;
    }
  }
}
</style>
