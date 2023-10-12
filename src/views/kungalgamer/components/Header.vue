<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  name?: string
  moemoepoint?: number
}>()

const mpWidth = computed(() => {
  return props.moemoepoint ? `${props.moemoepoint % 100}%` : '0%'
})
</script>

<template>
  <!-- 页面头部 -->
  <div class="header">
    <!-- 用户头像 -->
    <div class="avatar">
      <img src="@/assets/images/KUN.jpg" alt="KUN" />
    </div>
    <!-- 用户名 -->
    <div class="name">
      <span>{{ props.name }}</span>
      <span>KUNGalgame</span>
    </div>
    <!-- 用户萌萌点 -->
    <div class="moemoepoint">
      <Transition name="progress">
        <div class="mp-progress"></div>
      </Transition>
      <span>MP: {{ props.moemoepoint }}</span>
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
  left: 50px;
  z-index: 2;
  img {
    width: 140px;
    border-radius: 50%;
    box-shadow: 0px 0px 2px 4px var(--kungalgame-trans-red-2);
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
  span {
    position: absolute;
    right: 0;
    font-size: 17px;
    padding-right: 20px;
    font-style: italic;
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
    img {
      width: 100px;
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
