<script setup lang="ts">
const props = defineProps<{
  user: {
    uid: number
    avatar: string
    name: string
  }
}>()
</script>

<template>
  <!-- 话题发布者个人信息 -->
  <div class="kungalgamer">
    <!-- 发布者头像 -->
    <div class="avatar">
      <!-- TODO: 这里换成后端的用户图片接口，我不想用 express 雕花了 -->
      <RouterLink :to="`/kungalgamer/${props.user.uid}/info`">
        <img src="@/assets/images/topic.jpg" :alt="props.user.name" />
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
