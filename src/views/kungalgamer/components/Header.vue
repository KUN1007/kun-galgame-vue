<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed, ref, watchEffect } from 'vue'
import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'
import { storeToRefs } from 'pinia'

const { name, avatar } = storeToRefs(useKUNGalgameUserStore())

const currentPageUsername = ref(name)

const currentPageUserAvatar = ref(avatar)

const props = defineProps<{
  name?: string
  avatar?: string
  moemoepoint?: number
}>()

// 这里用 watch 是不行的，要 watchEffect，是不是很迷？没错我也很迷啊哈哈哈
watchEffect(() => {
  // 没有头像的用户
  if (props.name) {
    currentPageUsername.value = props.name
    currentPageUserAvatar.value = ''
  }
  // 有头像的用户
  if (props.name && props.avatar) {
    currentPageUsername.value = props.name
    currentPageUserAvatar.value = props.avatar
  }
})

const mpWidth = computed(() => {
  return props.moemoepoint ? `${props.moemoepoint % 100}%` : '0%'
})
</script>

<template>
  <!-- 页面头部 -->
  <div class="header">
    <!-- 用户头像 -->
    <div class="avatar">
      <img v-if="avatar" :src="avatar" :alt="name" />
    </div>
    <!-- 用户名 -->
    <div class="name">
      <span>{{ name }}</span>
      <span>KUNGalgame</span>
    </div>
    <!-- 用户萌萌点 -->
    <div class="moemoepoint">
      <Transition name="progress">
        <div class="mp-progress"></div>
      </Transition>
      <p>
        <span><Icon icon="line-md:star-alt-twotone"></Icon></span>
        <span>{{ props.moemoepoint }}</span>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 页面的头部 */
.header {
  /* 固定高度 */
  height: 150px;
  /* 相对定位参考元素 */
  position: relative;
  display: flex;
  flex-direction: column;
}

/* 用户头像 */
.avatar {
  position: absolute;
  /* 头像的定位 */
  top: 5px;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  left: 50px;
  z-index: 2;
  img {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    &:hover {
      animation: spin 1s;
    }
  }
}

/* 用户名 */
.name {
  flex-grow: 2;
  width: 100%;
  /* 头部的颜色 */
  background-color: var(--kungalgame-trans-blue-0);
  border-radius: 7px 7px 0 0;
  align-items: center;
  span:nth-child(1) {
    font-family: serif;
    position: absolute;
    font-size: 22px;
    /* 相对于 header 定位信息 */
    margin-left: 210px;
    margin-top: 60px;
    z-index: 1;
  }
  span:nth-child(2) {
    font-family: serif;
    position: absolute;
    right: 0;
    font-size: 100px;
    color: var(--kungalgame-trans-white-5);
    font-style: italic;
    text-shadow: 2px 2px 2px var(--kungalgame-trans-white-5);
  }
}

@keyframes spin {
  50% {
    transform: rotate(360deg);
  }
  70% {
    transform: scale(1.1);
  }
  80% {
    box-shadow: 0px 0px 2px 7px var(--kungalgame-trans-red-2);
  }
}

/* 用户萌萌点 */
.moemoepoint {
  height: 1px;
  flex-grow: 1;
  /* 分割线 */
  border-top: 2px solid var(--kungalgame-blue-4);
  border-bottom: 1px solid var(--kungalgame-blue-4);
  display: flex;
  align-items: center;
  z-index: 1;
  p {
    position: absolute;
    right: 0;
    font-size: 17px;
    padding-right: 20px;
    font-style: italic;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--kungalgame-pink-4);
      &:nth-child(1) {
        font-size: 20px;
      }
    }
  }
}
/* 用户的萌萌点进度 */
.mp-progress {
  transition: width 0.5s;
  height: 100%;
  /* 这个数值会根据用户的萌萌点数增长，引起页面蓝色占比的变化 */
  width: v-bind(mpWidth);
  background-color: var(--kungalgame-trans-blue-2);
}

.progress-enter-active {
  width: 0;
}

@media (max-width: 700px) {
  .header {
    /* 固定高度 */
    height: 110px;
  }
  .avatar {
    left: 30px;
    width: 100px;
    height: 100px;
    img {
      width: 100px;
      height: 100px;
    }
  }
  .name {
    span:nth-child(1) {
      margin-left: 150px;
      margin-top: 40px;
    }
    span:nth-child(2) {
      bottom: 30%;
      font-size: 50px;
    }
  }
}
</style>
