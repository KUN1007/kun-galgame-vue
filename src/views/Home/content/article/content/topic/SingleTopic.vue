<script setup lang="ts">
import UserPart from './components/UserPart.vue'
import TopicPart from './components/TopicPart.vue'
</script>
<template>
  <div class="topic">
    <UserPart />
    <router-link to="/topic">
      <TopicPart />
    </router-link>
  </div>
</template>
<style lang="scss" scoped>
/* 单个帖子 */
.topic {
  width: 100%;
  height: 70px;
  flex-shrink: 0;
  border-radius: 3px;
  background-color: var(--kungalgame-trans-white-5);
  margin-bottom: 3px;
  display: flex;
  &:hover {
    background-color: var(--kungalgame-trans-white-5);
    transition: 0.2s;
  }
  &:last-child {
    margin-bottom: 0;
  }
  a {
    width: 100%;
  }
}
</style>
