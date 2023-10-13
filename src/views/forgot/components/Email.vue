<script setup lang="ts">
import Message from '@/components/alert/Message'
// 使用全局通知
import { useKUNGalgameMessageStore } from '@/store/modules/message'
import { storeToRefs } from 'pinia'
// 使用消息 store
const { isShowCapture, isCaptureSuccessful } = storeToRefs(
  useKUNGalgameMessageStore()
)
</script>

<template>
  <div class="email">
    <div class="input">
      <span>您的邮箱：</span>
      <input type="text" />
    </div>

    <div class="input">
      <span>验证码：</span>
      <input type="text" />
    </div>

    <div class="btn">
      <button>发送验证码</button>
      <button>下一步</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.email {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  margin-top: 50px;
}

.input {
  display: flex;
  margin-bottom: 30px;

  input {
    border: none;
    border-bottom: 1.5px solid var(--kungalgame-blue-1);
    transition: all 0.2s;

    &:focus {
      border-bottom: 1.5px solid var(--kungalgame-blue-4);
    }
  }
}

.btn {
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;

  button {
    cursor: pointer;
    width: 150px;
    padding: 5px 10px;
    border: 1px solid var(--kungalgame-blue-4);
    border-radius: 5px;
    background-color: var(--kungalgame-white);
    margin: 10px;
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
