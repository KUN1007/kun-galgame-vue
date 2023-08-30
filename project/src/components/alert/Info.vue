<script setup lang="ts">
import { useKUNGalgameMessageStore } from '@/store/modules/message'
import { storeToRefs } from 'pinia'

const { showInfo, infoMsg } = storeToRefs(useKUNGalgameMessageStore())

import { Icon } from '@iconify/vue'
// 导入图片地址
import img from './loli'
// 导入动画
import 'animate.css'

const { loli, name } = img

const handleClose = () => {
  showInfo.value = false
}
</script>

<template>
  <Teleport to="body" :disabled="showInfo">
    <Transition
      enter-active-class="animate__animated animate__fadeInUp animate__faster"
      leave-active-class="animate__animated animate__fadeOutDown animate__faster"
    >
      <div class="container" v-if="showInfo">
        <Transition
          enter-active-class="animate__animated animate__swing"
          appear
        >
          <div class="lass">
            <span>{{ name }}</span>
          </div>
        </Transition>

        <div class="avatar">
          <img :src="loli" />
        </div>

        <Transition
          enter-active-class="animate__animated animate__bounceInRight animate__faster"
          appear
        >
          <!-- 啊哈哈哈！想不到吧这里参考的是糖调写的 -->
          <div class="info">{{ `「 ${$t(`${infoMsg}`)} 」` }}</div>
        </Transition>

        <div class="close" @click="handleClose">
          <Icon icon="line-md:close" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
.container {
  min-height: 120px;
  width: 100%;
  color: var(--kungalgame-font-color-3);
  background-color: var(--kungalgame-trans-white-5);
  backdrop-filter: blur(2px);
  box-shadow: var(--shadow);
  border-top: 1px solid var(--kungalgame-blue-1);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}
.lass {
  padding: 5px;
  font-size: 20px;
  position: absolute;
  top: -41px;
  padding-left: 150px;
  border-bottom: none;
  /* 这里的阴影只能这么绘制 */
  filter: drop-shadow(2px 4px 3px var(--kungalgame-trans-blue-4));
  span {
    padding: 0 50px;
    text-align: center;
    background-color: var(--kungalgame-trans-white-2);
    font-size: 24px;
    /* 这里将人物名字的形状裁剪成六边形 */
    clip-path: polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0 50%);
  }
}
.avatar {
  position: absolute;
  margin-top: 10px;
  margin-left: 20px;
  img {
    height: 100px;
  }
}
.info {
  margin-top: 20px;
  margin-left: 150px;
  margin-right: 50px;
  font-size: 20px;
  color: var(--kungalgame-white);
  text-shadow: 0 1px var(--kungalgame-font-color-3),
    1px 0 var(--kungalgame-font-color-3), -1px 0 var(--kungalgame-font-color-3),
    0 -1px var(--kungalgame-font-color-3),
    1px 2px var(--kungalgame-font-color-3),
    1px 2px var(--kungalgame-font-color-3),
    1px 2px var(--kungalgame-font-color-3),
    1px 2px var(--kungalgame-font-color-3);
}
.close {
  font-size: 30px;
  position: absolute;
  top: 0;
  right: 0;
  color: var(--kungalgame-font-color-1);
}
</style>
