<script setup lang="ts">
import { ref } from 'vue'

// 全局消息组件（顶部）
import Message from '@/components/alert/Message'

import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'

const settingsStore = useKUNGalgameSettingsStore()
const { showKUNGalgameFontStyle } = storeToRefs(settingsStore)

const font = ref('')

const handleSetFont = () => {
  if (font.value) {
    settingsStore.setKUNGalgameFontStyle(font.value)
    font.value = ''
  } else {
    Message('Please input valid font name', '请输入合法的字体名', 'warn')
  }
}
</script>

<template>
  <!-- 设置某些页面的宽度 -->
  <div class="font">
    <div class="title">
      <span>{{ $tm('header.settings.font') }}</span>
      <span v-if="showKUNGalgameFontStyle === 'system-ui'">
        {{ $tm('header.settings.default') }}
      </span>
      <span v-else-if="showKUNGalgameFontStyle !== 'system-ui'">
        {{ showKUNGalgameFontStyle }}
      </span>
    </div>
    <div class="font-input">
      <input
        :placeholder="`${$tm('header.settings.fontInput')}`"
        type="text"
        v-model="font"
        required
      />
      <button @click="handleSetFont">
        {{ $tm('header.settings.confirm') }}
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

/* url 的粘话题框 */
.font-input {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--kungalgame-font-color-3);
  padding-bottom: 10px;
  input {
    width: 100%;
    padding-left: 5px;
    height: 25px;
    border: 1px solid var(--kungalgame-blue-4);
    background-color: var(--kungalgame-trans-white-9);
    color: var(--kungalgame-font-color-3);
    /* 粘话题框的 focus */
    &:focus {
      outline: none;
      background-color: var(--kungalgame-trans-blue-0);
    }
  }
  /* 确定按钮 */
  button {
    flex-shrink: 0;
    padding: 0 10px;
    height: 25px;
    width: 70px;
    color: var(--kungalgame-font-color-3);
    border: 1px solid var(--kungalgame-blue-4);
    border-left: none;
    background-color: var(--kungalgame-trans-white-5);
    cursor: pointer;
    /* 确定按钮的 hover */
    &:hover {
      background-color: var(--kungalgame-trans-red-1);
      /* 确定按钮的 active */
      &:active {
        background-color: var(--kungalgame-trans-red-3);
      }
    }
  }
}
</style>
