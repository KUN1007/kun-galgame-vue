<script setup lang="ts">
import { ref } from 'vue'

// 接受父组件的传值
const props = defineProps(['info', 'isShowCancel'])
// 返回给父组件信息
const emits = defineEmits(['value'])

const show = ref(false)

const handleClose = () => {
  show.value = false
  // 点击关闭则给父组件返回 false
  emits('value', false)
}

const handleConfirm = () => {
  show.value = false
  // 点击确定则给父组件返回 true
  emits('value', true)
}
</script>

<template>
  <div class="alert" @click="show = true">
    <slot></slot>
  </div>

  <Teleport to="body">
    <Transition name="alert">
      <div v-if="show" class="mask">
        <div class="container">
          <div class="header">
            <h3>{{ props.info }}</h3>
          </div>

          <div class="footer">
            <button
              v-if="props.isShowCancel"
              class="button"
              @click="handleClose"
            >
              {{ $t('ComponentAlert.cancel') }}
            </button>
            <button class="button" @click="handleConfirm">
              {{ $t('ComponentAlert.confirm') }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
.alert {
  width: 100%;
  height: 100%;
}
.mask {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
  color: var(--kungalgame-font-color-3);
}

.container {
  width: 300px;
  margin: auto;
  padding: 20px 30px;
  background-color: var(--kungalgame-trans-white-2);
  border: 1px solid var(--kungalgame-blue-1);
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.footer {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}

.button {
  width: 70px;
  height: 30px;
  color: var(--kungalgame-font-color-3);
  cursor: pointer;
  &:nth-child(1) {
    background-color: var(--kungalgame-trans-blue-1);
    border: 1px solid var(--kungalgame-blue-4);
  }
  &:nth-child(2) {
    margin-left: 98px;
    background-color: var(--kungalgame-trans-red-1);
    border: 1px solid var(--kungalgame-red-4);
  }
  &:active {
    transform: scale(0.9);
    transition: 0.1s;
  }
}

/*
 * 对于 transition="modal" 的元素来说
 * 当通过 Vue.js 切换它们的可见性时
 * 以下样式会被自动应用。
 *
 * 你可以简单地通过编辑这些样式
 * 来体验该模态框的过渡效果。
 */

.alert-enter-from {
  opacity: 0;
}

.alert-leave-to {
  opacity: 0;
}

.alert-enter-from .container,
.alert-leave-to .container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
