<script setup lang="ts">
import { ref } from 'vue'

import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'
// Using global notifications
import { useKUNGalgameMessageStore } from '@/store/modules/message'
const info = useKUNGalgameMessageStore()

// The parent component instructs it to send the verification code, and it will do so.
const props = defineProps<{
  email: string
  isSendCode: boolean
}>()

const isSending = ref(false)

const countdown = ref(0)

const sendCode = () => {
  // If the parent component passes a false value, return directly
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

    // Send the verification code
    useKUNGalgameUserStore().sendCode(props.email)

    info.info('AlertInfo.code.code')
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
