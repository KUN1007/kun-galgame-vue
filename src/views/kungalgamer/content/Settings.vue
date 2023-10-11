<script setup lang="ts">
import { ref } from 'vue'
import Avatar from '../components/Avatar.vue'

// 签名的内容
const bioValue = ref('')

// 更改签名
const handleChangeBio = () => {}
</script>

<template>
  <div class="settings">
    <!-- 更改头像 -->
    <Avatar />

    <!-- 更改 bio -->
    <div class="bio">
      <div class="title">更改签名</div>
      <textarea
        name="bio"
        placeholder="请输入您的新签名，最大 107 个字符"
        rows="5"
        v-model="bioValue"
      >
      </textarea>

      <div class="help">
        <span class="bioCount">字数：{{ bioValue.length }}</span>
        <button @click="handleChangeBio">确定更改</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.settings {
  width: 100%;
  height: 100%;
  padding: 10px 17px;
}

.bio {
  width: 100%;
  display: flex;
  flex-direction: column;

  textarea {
    color: var(--kungalgame-font-color-3);
    flex: 1;
    margin-bottom: 10px;
    width: 100%;
    border: 1px solid var(--kungalgame-blue-4);
    background-color: var(--kungalgame-trans-white-9);
    border-radius: 5px;
    padding: 5px;
    &:focus {
      border: 1px solid var(--kungalgame-pink-3);
    }
  }
}

.title {
  margin-bottom: 10px;
}

.help {
  display: flex;
  justify-content: space-between;
  align-items: center;

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
