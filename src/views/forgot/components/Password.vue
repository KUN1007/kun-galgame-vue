<script setup lang="ts">
import Message from '@/components/alert/Message'
</script>

<template>
  <div class="password">
    <div class="input">
      <span>您的邮箱：</span>
      <input type="text" />
    </div>
    <div class="input">
      <span>您的邮箱：</span>
      <input type="text" />
    </div>

    <div class="btn">
      <button>上一步</button>
      <button>确定更改密码</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.password {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  margin-top: 50px;
}
</style>
