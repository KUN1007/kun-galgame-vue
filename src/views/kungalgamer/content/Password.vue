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
      <div class="title">更改邮箱:</div>
      <div class="current-email">您当前的邮箱是: {{ email }}</div>
      <div class="input">
        <span>请输入您的新邮箱: </span><input type="text" />
      </div>
      <div class="input">
        <span>请输入您的验证码: </span><input type="text" />
      </div>

      <div class="btn">
        <button>发送验证码</button> <button>确定更改邮箱</button>
      </div>
    </div>
    <!-- 用户更改密码 -->
    <div class="password">
      <div class="title">更改密码:</div>
      <div class="input">
        <span>请输入您的旧密码: </span><input type="password" />
      </div>
      <div class="input">
        <span>请输入您的新密码: </span><input type="password" />
      </div>
      <div class="input">
        <span>请再次输入新密码: </span><input type="password" />
      </div>

      <div class="btn"><button>确定更改密码</button></div>
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
</style>
