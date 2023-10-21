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
  <!-- 话题发布者个人信息 -->
  <div class="kungalgamer">
    <!-- 发布者头像 -->
    <div class="avatar">
      <!-- 用户图片 -->
      <RouterLink :to="`/kungalgamer/${user.uid}/info`">
        <img
          :src="user.avatar.replace(/\.webp$/, '-100.webp')"
          :alt="user.name"
        />
      </RouterLink>
    </div>
    <!-- 发布者姓名 -->
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
    /* 页面缩小时头像缩小 */
    display: inline-block;
  }
}

/* 发帖人昵称位置设置 */
.name {
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    /* 页面缩小时省略不换行 */
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    /* 颜色和字体大小 */
    color: var(--kungalgame-font-color-3);
    font-size: x-small;
  }
}
</style>
