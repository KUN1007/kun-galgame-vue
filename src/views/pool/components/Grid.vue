<script setup lang="ts">
import Topic from './Topic.vue'
import { randomNum } from '@/utils/random'
import { topic } from './topic'

const len = topic.length

const style = {
  width: randomNum(100, 200) + 'px',
  height: randomNum(100, 200) + 'px',
}

const randomStyle = () => {
  const style = []
  for (let i = 0; i < len; i++) {}
}
</script>

<template>
  <div class="container">
    <Topic
      v-for="kun in topic"
      class="item"
      :key="kun.index"
      :data="kun"
      :class="`item-${kun.index}`"
      :itemStyle="style"
    />
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: minmax(100px, 320px);
  gap: 10px;
}
</style>
