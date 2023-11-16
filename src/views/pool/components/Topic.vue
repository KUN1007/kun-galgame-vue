<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'

const { showKUNGalgameMode } = storeToRefs(useKUNGalgameSettingsStore())

const light = `rgba(${randomNum(200, 255)}, ${randomNum(200, 255)}, ${randomNum(
  200,
  255
)}, ${randomNum(30, 70) / 100})`

const dark = `rgba(${randomNum(0, 55)}, ${randomNum(0, 55)}, ${randomNum(
  0,
  55
)}, ${randomNum(30, 70) / 100})`

const color = ref(light)

// 初始化色彩
onMounted(() => {
  if (showKUNGalgameMode.value === 'dark') {
    color.value = dark
  } else {
    color.value = light
  }

  watch(showKUNGalgameMode, () => {
    if (showKUNGalgameMode.value === 'dark') {
      color.value = dark
    } else {
      color.value = light
    }
  })
})

const props = defineProps(['data', 'itemStyle'])
import { randomNum } from '@/utils/random'
import { onMounted, watch } from 'vue'
</script>

<template>
  <div class="topic">
    <div class="title">
      {{ props.data.title }}
    </div>

    <div class="content">{{ props.data.content }}</div>

    <div class="status">
      <span>
        <Icon icon="ic:outline-remove-red-eye" />
        {{ props.data.view }}
      </span>

      <span>
        <Icon icon="line-md:thumbs-up-twotone" />
        {{ props.data.like }}
      </span>
    </div>

    <div class="time">
      <Icon class="hourglass" icon="eos-icons:hourglass" />
      <div>{{ props.data.time }} 发布</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.topic {
  display: flex;
  flex-direction: column;
  background-color: v-bind(color);
  border: 1px solid var(--kungalgame-blue-1);
  border-radius: 5px;
  color: var(--kungalgame-font-color-3);
  cursor: pointer;
  box-shadow: var(--shadow);
  max-width: 300px;

  &:hover {
    background-color: var(--kungalgame-trans-white-2);
  }
}

.title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  margin: 0 auto;
  margin-top: 7px;
  padding: 0 7px;
  font-weight: bold;
  color: var(--kungalgame-font-color-2);
  flex-shrink: 0;
}

.content {
  overflow: hidden;
  font-size: 14px;
  padding: 0 10px;
  margin: 7px 0;
}

.status {
  display: flex;
  flex-shrink: 0;
  justify-content: space-around;
  overflow: hidden;
  flex-wrap: wrap;

  span {
    display: flex;
    align-items: center;
  }
}

.time {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: small;
  letter-spacing: 1px;
  overflow: hidden;
  white-space: nowrap;
  padding: 7px 0;

  .hourglass {
    margin: 0 5px;
    color: var(--kungalgame-purple-4);
  }
}
</style>
