<script setup lang="ts">
import { ref } from 'vue'

import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'
// 使用全局通知
import { useKUNGalgameMessageStore } from '@/store/modules/message'
const info = useKUNGalgameMessageStore()

// 导入 i18n
import { useI18n } from 'vue-i18n'
const { tm } = useI18n()

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

    info.info(tm('AlertInfo.code.code'))
  }
}
</script>

<template>
  <button @click="sendCode" :disabled="isSending">
    {{ isSending ? countdown : $tm('login.register.send') }}
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
