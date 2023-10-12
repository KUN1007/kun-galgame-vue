<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { UserInfo } from '@/api'
import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'
import Message from '@/components/alert/Message'

const props = defineProps<{
  user: UserInfo
}>()

// 当前用户的邮箱
const email = ref('')

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
      <div>你当前的邮箱是: {{ email }}</div>
      <div>更改邮箱:</div>
      <div>请输入你的新邮箱: <input type="text" /></div>
      <button>点击发送邮箱验证码</button>
      <div>请输入你的验证码: <input type="text" /></div>
      <button>确定更改邮箱</button>
    </div>
    <!-- 用户更改密码 -->
    <div class="password">
      <div>更改密码:</div>
      <div>请输入你的旧密码: <input type="password" /></div>
      <div>请输入你的新密码: <input type="password" /></div>
      <div>请再次输入新密码: <input type="password" /></div>
      <button>确定更改密码</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 内容区 */
.article {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
