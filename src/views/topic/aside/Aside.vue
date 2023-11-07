<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref, watch } from 'vue'
import AsideActive from './components/AsideActive.vue'
import AsideBase from './components/AsideBase.vue'

import { useKUNGalgameTopicStore } from '@/store/modules/topic'
import { storeToRefs } from 'pinia'

defineProps<{
  tags: string[]
}>()

const { isActiveAside } = storeToRefs(useKUNGalgameTopicStore())
const asideWidth = ref('250px')
const handleFold = () => {
  isActiveAside.value = !isActiveAside.value
}

watch(
  isActiveAside,
  () => {
    asideWidth.value = isActiveAside.value ? '250px' : '40px'
  },
  { immediate: true }
)
</script>

<template>
  <div class="aside">
    <div class="nav-aside" @click="handleFold">
      <Icon
        icon="line-md:arrow-left"
        style="font-size: 17px"
        v-if="isActiveAside"
      />
      <Icon
        icon="line-md:arrow-right"
        style="font-size: 17px"
        v-if="!isActiveAside"
      />

      <span v-if="isActiveAside">{{ $tm('mainPage.asideActive.fold') }}</span>
    </div>

    <div class="item-active" v-if="isActiveAside">
      <AsideActive :tags="$props.tags" />
    </div>

    <div class="item" v-if="!isActiveAside">
      <AsideBase :isActive="!isActiveAside" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.aside {
  margin-right: 5px;
  width: v-bind('asideWidth');
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: 0.5s;
  overflow-y: scroll;
  flex-shrink: 0;

  span {
    white-space: nowrap;
  }
}

.nav-aside {
  height: 40px;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* 字体设置 */
  font-size: small;
  color: var(--kungalgame-font-color-3);
  cursor: pointer;
}

.item-active {
  display: flex;
  flex-grow: 1;
}

.item {
  height: 96.6%;
}
</style>
