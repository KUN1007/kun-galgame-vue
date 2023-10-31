<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { UserInfo } from '@/api'
import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'
import Message from '@/components/alert/Message'
// Using global notifications
import { useKUNGalgameMessageStore } from '@/store/modules/message'
// Reset store
import { kungalgameStoreReset } from '@/store'
import {
  checkSendCode,
  checkResetEmail,
  checkChangePassword,
} from '../utils/check'

defineProps<{
  user: UserInfo
}>()

const router = useRouter()
// Current user's email
const email = ref('')
// Email where the verification code has been sent
const hasSentCodeEmail = ref('')

// Values of the 5 input fields
const input = reactive({
  newEmail: '',
  code: '',
  oldPassword: '',
  newPassword: '',
  repeatPassword: '',
})

// Send email verification code
const handleSendCode = async () => {
  // Check necessary information
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
      'Reset email verification code sent successfully!',
      '重置邮箱验证码发送成功！',
      'success'
    )
  } else {
    Message(
      'Reset email verification code sending failed!',
      '重置邮箱验证码发送失败！',
      'error'
    )
  }
}

// Reset email
const handleResetEmail = async () => {
  // Check necessary information
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
    Message('Email change successful!', '邮箱更改成功', 'success')
  } else {
    Message('Email change failed!', '邮箱更改失败', 'error')
  }
}

// Change password
const handleChangePassword = async () => {
  // Check necessary information
  if (
    !checkChangePassword(
      input.oldPassword,
      input.newPassword,
      input.repeatPassword
    )
  ) {
    return
  }

  // Are you sure you want to change the password?
  const result = await useKUNGalgameMessageStore().alert(
    'AlertInfo.code.password',
    true
  )
  if (!result) {
    return
  }

  const res = await useKUNGalgameUserStore().updatePassword(
    input.oldPassword,
    input.newPassword
  )

  if (res.code === 200) {
    kungalgameStoreReset()
    router.push('/login')
    Message('Password change successful!', '密码更改成功', 'success')
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

// Forgot password
const handleClickForgotPassword = () => {
  router.push('/forgot')
}
</script>

<template>
  <!-- Right content area -->
  <div class="article">
    <!-- Change email -->
    <div class="email">
      <div class="title">{{ $tm('user.email.email') }}:</div>
      <!-- Current email -->
      <div class="current-email">
        {{ $tm('user.email.current') }}: {{ email }}
      </div>
      <!-- New email -->
      <div class="input">
        <span>{{ $tm('user.email.newEmail') }}: </span>
        <input v-model="input.newEmail" type="text" />
      </div>
      <!-- Email verification code -->
      <div class="input">
        <span>{{ $tm('user.email.code') }}: </span>
        <input v-model="input.code" type="text" />
      </div>
      <!-- Send code -->
      <div class="btn">
        <button @click="handleSendCode" v-if="!hasSentCodeEmail">
          {{ $tm('user.email.send') }}
        </button>
        <!-- Confirm email -->
        <button @click="handleResetEmail">
          {{ $tm('user.email.confirmEmail') }}
        </button>
      </div>
    </div>

    <!-- Change user password -->
    <div class="password">
      <div class="title">{{ $tm('user.email.pwd') }}:</div>
      <!-- Old password -->
      <div class="input">
        <span>{{ $tm('user.email.oldPwd') }}: </span>
        <input v-model="input.oldPassword" type="password" />
      </div>
      <!-- New password -->
      <div class="input">
        <span>{{ $tm('user.email.newPwd') }}: </span>
        <input v-model="input.newPassword" type="password" />
      </div>
      <!-- Confirm password -->
      <div class="input">
        <span>{{ $tm('user.email.rePwd') }}: </span>
        <input v-model="input.repeatPassword" type="password" />
      </div>

      <div class="btn">
        <button @click="handleChangePassword">
          {{ $tm('user.email.confirmPwd') }}
        </button>
      </div>
    </div>

    <!-- Forgot password -->
    <span @click="handleClickForgotPassword" class="forget">
      {{ $tm('login.login.forget') }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
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
  justify-content: space-between;
  padding: 0 30px;

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

.password {
  margin-bottom: 20px;
}

/* Forgot password */
.forget {
  font-size: medium;
  cursor: pointer;
  text-decoration: none;
  color: var(--kungalgame-blue-4);
}

@media (max-width: 700px) {
  .article {
    font-size: small;
  }

  .title {
    font-size: medium;
  }

  .input {
    padding: 0;
    span {
      margin-right: 5px;
    }
  }
}
</style>
