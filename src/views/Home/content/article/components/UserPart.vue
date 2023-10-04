<script setup lang="ts">
defineProps<{
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
      <!-- <a href="#"><img :src="$props.kungalgamer.avatar" alt="鲲" /></a> -->
      <a href="#"><img src="@/assets/images/topic.jpg" alt="鲲" /></a>
    </div>
    <!-- 发布者姓名 -->
    <div class="name">
      <a href="#"
        ><span>{{ $props.user.name }}</span></a
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
/* 发帖人信息 */
.kungalgamer {
  width: 60px;
  height: 100%;
  /* 单个话题左右两部分发布人信息和话题概览均为竖向弹性盒 */
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  /* 发帖人信息距离话题概览的距离 */
  margin: 0 5px;
}
.avatar,
.name {
  width: 100%;
  height: 1px;
}
/* 头像图片容器设置 */
.avatar {
  /* 头像部分占发布人信息区域的比例 */
  flex-grow: 3;
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
  flex-grow: 1;
  display: flex;
}
.name a {
  display: flex;
  width: 1px;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
}
/* 发帖人昵称样式设置 */
.name span {
  /* 页面缩小时省略不换行 */
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  /* 颜色和字体大小 */
  color: var(--kungalgame-font-color-3);
  font-size: x-small;
}
</style>
