<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { Icon } from '@iconify/vue'

const { message, type} = defineProps([
  'message',
  'type',
])

const messageClass = (type: string): string => {
  if (type === 'warning') {
    return `animate__animated animate__headShake ${type}`
  } else if (type === 'success') {
    return `animate__animated animate__bounceInDown ${type}`
  } else if (type === 'error') {
    return `animate__animated animate__tada ${type}`
  } else if (type === 'info') {
    return `animate__animated animate__bounce ${type}`
  } else {
    return ''
  }
}
</script>

<template>
  <div class="container">
    <div class="message" :class="messageClass(type)">
      <span class="icon" v-if="type === 'warning'"
        ><Icon icon="line-md:alert"
      /></span>
      <span class="icon" v-else-if="type === 'success'"
        ><Icon icon="line-md:circle-to-confirm-circle-transition"
      /></span>
      <span class="icon" v-else-if="type === 'error'"
        ><Icon icon="line-md:close-circle"
      /></span>
      <span class="icon" v-else-if="type === 'info'"
        ><Icon icon="line-md:alert-circle"
      /></span>
      <span>{{ message }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: fixed;
  top: 100px;
  margin: 0 auto;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
}
.message {
  margin: 0 auto;
  font-size: large;
  color: var(--kungalgame-font-color-2);
  background-color: var(--kungalgame-trans-white-5);
  backdrop-filter: blur(5px);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 17px;
  box-shadow: var(--shadow);
  z-index: 9999;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.icon {
  font-size: 23px;
  margin-right: 17px;
}

.warning {
  border: 1px solid var(--kungalgame-yellow-3);
  .icon {
    color: var(--kungalgame-yellow-3);
  }
}

.success {
  border: 1px solid var(--kungalgame-green-4);
  .icon {
    color: var(--kungalgame-green-4);
  }
}

.error {
  border: 1px solid var(--kungalgame-red-4);
  .icon {
    color: var(--kungalgame-red-4);
  }
}

.info {
  border: 1px solid var(--kungalgame-blue-4);
  .icon {
    color: var(--kungalgame-blue-4);
  }
}
</style>
