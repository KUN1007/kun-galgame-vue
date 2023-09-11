<!-- 
  这里是楼主的其他话题组件
 -->
<script setup lang="ts">
// TODO: 后端接口
import { asideTopic } from '@/types/topic/topic'
</script>

<template>
  <!-- 楼主的其它话题 -->
  <div class="master">
    <ul>
      <li>
        {{ $tm('topic.aside.master') }}
      </li>
      <li v-for="kun in asideTopic" :key="kun.index">
        <router-link :to="kun.router">{{ kun.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
/* 楼主的其它话题 */
.master {
  width: 100%;
  height: 1px;
  flex-grow: 4;

  /* 隐藏溢出的颜色 */
  overflow: hidden;
  border-radius: 5px;
  box-shadow: var(--shadow);

  /* 上方区域的配色 */
  border: 1px solid var(--kungalgame-trans-pink-2);
  background-color: var(--kungalgame-trans-pink-0);

  ul {
    height: 100%;
    /* 整体为一个无序列表，列表为弹性盒 */
    display: flex;
    flex-direction: column;
    & > li {
      height: 1px;
      width: 100%;
      /* 每个项目相对于标题的占比 */
      flex-grow: 3;
      display: flex;
      /* 垂直居中 */
      align-items: center;
      /* 设置左侧的 border 方便制作 hover */
      border-left: 4px solid transparent;
      /* 内边距盒子 */
      box-sizing: border-box;
      &:hover {
        border-left: 4px solid var(--kungalgame-blue-3);
        background-color: var(--kungalgame-trans-pink-1);
        transition: 0.2s;
      }
      a {
        /* 左右两侧的距离 */
        margin: 0 17px;
        color: var(--kungalgame-font-color-3);
        /* 标题显示两行、超出部分隐藏 */
        overflow: hidden; /* 超出部分隐藏 */
        text-overflow: ellipsis; /* 显示省略号 */
        display: -webkit-box; /* 将文本框转化为弹性伸缩盒子 */
        -webkit-box-orient: vertical; /* 设置为纵向排列 */
        -webkit-line-clamp: 2; /* 显示两行文本 */
        /* 标题的字体属性 */
        font-size: small;
        line-height: 1.5em;
        box-sizing: border-box;
      }
      &:nth-child(1) {
        /* 左侧没有 border，没有 hover */
        border-left: 0;
        /* 相对于单个话题标题的比例 */
        flex-grow: 2;
        line-height: 40px;
        font-size: 14px;
        font-weight: bold;
        color: var(--kungalgame-font-color-2);
        background-color: var(--kungalgame-trans-pink-1);
        /* 与单个话题标题的分割线 */
        border-bottom: 1px solid var(--kungalgame-trans-pink-2);
        /* 水平居中 */
        justify-content: center;
      }
    }
  }
}
</style>
