<script setup lang="ts">
import { ref } from 'vue'

import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'
// 使用全局通知
import { useKUNGalgameMessageStore } from '@/store/modules/message'
const info = useKUNGalgameMessageStore()

// 父组件让它发送验证码它再发送
const props = defineProps<{
  email: string
  isSendCode: boolean
}>()

const isSending = ref(false)

const countdown = ref(0)

const sendCode = () => {
  // 如果父组件传值为假直接返回
  if (!props.isSendCode) {
    return
  }

  if (!isSending.value) {
    isSending.value = true
    countdown.value = 30

    const countdownInterval = setInterval(() => {
      countdown.value -= 1
      if (countdown.value === 0) {
        clearInterval(countdownInterval)
        isSending.value = false
      }
    }, 1000)

    // 发送验证码
    useKUNGalgameUserStore().sendCode(props.email)

    info.info(
      '验证码已发送，您可以在邮箱中查看，注意查看垃圾邮件，如果未收到邮件，您可以在 30 秒后尝试重新发送邮箱验证码'
    )
  }
}
</script>

<template>
  <button @click="sendCode" :disabled="isSending">
    {{ isSending ? countdown : '发送验证码' }}
  </button>
</template>

<style lang="scss" scoped>
button {
  width: 90px;
  height: 30px;
  border: none;
  background-color: var(--kungalgame-trans-white-9);
  cursor: pointer;
  color: var(--kungalgame-font-color-1);
  &:hover {
    color: var(--kungalgame-blue-4);
  }
}
</style>
