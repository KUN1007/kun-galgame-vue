<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  user: {
    uid: number
    avatar: string
    name: string
  }
}>()

const user = computed(() => props.user)
</script>

<template>
  <div class="kungalgamer">
    <div class="avatar">
      <RouterLink :to="`/kungalgamer/${user.uid}/info`">
        <img
          :src="user.avatar.replace(/\.webp$/, '-100.webp')"
          :alt="user.name"
        />
      </RouterLink>
    </div>

    <div class="name">
      <span>{{ props.user.name }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.kungalgamer {
  width: 60px;
  height: 100%;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  margin: 0 5px;
}

.avatar,
.name {
  width: 100%;
  height: calc(100% - 20px);
}

.avatar {
  flex-grow: 1;
  display: flex;
  justify-content: center;

  a {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-grow: 1;
  }

  img {
    height: 50px;
    width: 50px;
    padding: 2px;
    border-radius: 50%;
    display: inline-block;
  }
}

.name {
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: var(--kungalgame-font-color-3);
    font-size: x-small;
  }
}
</style>
