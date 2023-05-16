<!-- KUNGalgame 通用切换按钮 -->

<script setup lang="ts">
// 导入设置面板 store
import { useSettingsPanelStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'

// 使用设置面板的 store
const settingsStore = useSettingsPanelStore()
let { showSettings } = storeToRefs(settingsStore)
// 用户点击固定看板娘
const handleClick = () => {
  showFixedLoli.value = !showFixedLoli.value
  console.log(showFixedLoli.value)
}
</script>

<template>
  <input class="switch-input" type="checkbox" id="switch" /><label
    class="switch-label"
    @click="handleClick"
    for="switch"
    >Toggle</label
  >
</template>

<style lang="less" scoped>
.switch-input {
  height: 0;
  width: 0;
  visibility: hidden;
}

.switch-label {
  cursor: pointer;
  text-indent: -9999px;
  width: 50px;
  height: 27px;
  background: @kungalgame-trans-blue-2;
  display: block;
  border-radius: 100px;
  position: relative;
}

.switch-label:after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 23px;
  height: 23px;
  background: @kungalgame-white;
  border-radius: 15px;
  transition: 0.3s;
}

.switch-input:checked + .switch-label {
  background: @kungalgame-blue-4;
}

.switch-input:checked + .switch-label:after {
  left: calc(100% - 2px);
  transform: translateX(-100%);
}
</style>
