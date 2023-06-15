<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <!-- 返回主页 -->
  <div class="return" @click="router.back()">
    <span>{{ `< ${$t('back.back')}` }}</span>
  </div>
</template>

<style lang="scss" scoped>
/* 返回主页 */
.return {
  position: absolute;
  bottom: 1%;
  left: 2%;
  color: var(--kungalgame-font-color-0);
  cursor: pointer;
}

.return:hover {
  color: var(--kungalgame-blue-4);
}
</style>
