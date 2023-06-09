<!-- 注意这个组件必须用 provide 和 inject 的方式使用，因为有子组件 -->
<script setup lang="ts">
import { ref } from 'vue'
import Alert from './Alert.vue'
import Info from './Info.vue'

defineProps(['type'])

const show = ref(false)

const updateStatus = (value: boolean) => {
  show.value = value
}
</script>

<template>
  <div class="alert" @click="show = true">
    <slot></slot>
  </div>

  <Alert
    :show="show"
    :type="$props.type"
    @update="updateStatus"
    v-if="$props.type === 'alert'"
  />

  <Info
    :show="show"
    :type="$props.type"
    @update="updateStatus"
    v-if="$props.type === 'info'"
  />
</template>

<style lang="scss" scoped>
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
