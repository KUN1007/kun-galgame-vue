<script setup lang="ts">
// 导入 Vue 函数
import {
  defineAsyncComponent,
  onBeforeMount,
  onBeforeUnmount,
  onUpdated,
} from 'vue'
// 导入图标
import { Icon } from '@iconify/vue'
// 导入 css 动画
import 'animate.css'
// 导入路由
import router from '@/router'
// 导入设置面板 store
import { useKUNGalgameSettingsStore } from '@/store/modules/settings'

import { storeToRefs } from 'pinia'

// 异步导入设置面板，提升首页加载速度
const KUNGalgameSettingsPanel = defineAsyncComponent(
  () => import('./setting-panel/KUNGalgameSettingPanel.vue')
)

// 接收设置面板的 store
const settingsStore = useKUNGalgameSettingsStore()

// 使设置面板的数据变为响应式
const { showKUNGalgamePanel } = storeToRefs(settingsStore)

// 顶部导航栏单个项目的接口
interface topBar {
  index: number
  name: string
  router: string
}

// 顶部导航栏的项目
const topBarItem: topBar[] = [
  { index: 1, name: 'pool', router: '/pool' },
  { index: 2, name: 'create', router: 'edit' },
  { index: 3, name: 'technique', router: 'technique' },
  { index: 4, name: 'about', router: 'kungalgame' },
  { index: 5, name: 'return', router: '/' },
]

// 初始进入页面 header 没有附加样式
let topicStyle = {}

// 接受父组件的传值
let props = defineProps(['isMainPage', 'isTopicPage'])

const isMain = props.isMainPage
const isTopicPage = props.isTopicPage
// 如果是主页的话删除 “返回主页” 项目
if (isMain) {
  topBarItem.pop()
}
// 如果是帖子页的话定位为 sticky，距离底部 10px
if (isTopicPage) {
  topicStyle = {
    top: 0,
    position: 'sticky',
  }
}

// 根据导航条的项目个数操作 css 中导航条的宽度
let navItemNum = topBarItem.length
const navItemNumString = navItemNum + '00px'

// 用户点击头像时的操作
const handleClickAvatar = () => {
  // isShowInfo.value = !isShowInfo.value
  router.push('/kungalgamer')
}

// 用户点击网站设置时的操作
const handleSittingsClick = () => {
  showKUNGalgamePanel.value = !showKUNGalgamePanel.value
}
// 在路由跳转时关闭设置面板
onBeforeUnmount(() => {
  showKUNGalgamePanel.value = false
})
// 在页面刷新时关闭设置面板
onBeforeMount(() => {
  showKUNGalgamePanel.value = false
})
</script>

<template>
  <div class="header" :style="topicStyle">
    <!-- 顶部左侧交互栏 -->
    <div class="nav-top">
      <div class="kungal-info">
        <!-- 网站的名字和网站图标 -->
        <img src="../assets/images/favicon.png" alt="KUNgal" />
        <span>{{ $t('header.name') }}</span>
      </div>
      <div class="top-bar">
        <ul>
          <!-- 顶部单个板块 -->
          <li v-for="kun in topBarItem" :key="kun.index">
            <router-link :to="{ path: kun.router }">{{
              $t(`header['${kun.name}']`)
            }}</router-link>
          </li>
          <!-- 顶部板块下部的 hover 效果 -->
          <div class="top-bar-box"></div>
        </ul>
      </div>
    </div>
    <div class="kungalgamer-info">
      <span @click="handleSittingsClick"><Icon icon="uiw:setting-o" /></span>
      <img
        src="../assets/images/KUN.jpg"
        alt="KUN"
        @click="handleClickAvatar"
      />
    </div>
  </div>
  <transition
    name="kungalgame-panel"
    enter-active-class="animate__animated animate__jackInTheBox animate__faster"
    leave-active-class="animate__animated animate__fadeOutRight animate__faster"
  >
    <KUNGalgameSettingsPanel v-if="showKUNGalgamePanel" />
  </transition>
</template>

<style lang="scss" scoped>
/* 头部样式 */
.header {
  /* 头部高度 */
  height: 58px;
  /* 头部下方阴影 */
  box-shadow: 0 2px 4px 0 $kungalgame-trans-blue-1;
  /* 头部背景 */
  backdrop-filter: blur(5px);
  background-color: $kungalgame-trans-white-5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* 相对于设置面板定位 */
  position: relative;
  z-index: 1007;
  margin-bottom: 7px;
}
.nav-top {
  display: flex;
  align-items: center;
}
.kungal-info {
  display: flex;
  align-items: center;
  img {
    height: 50px;
    margin-left: 50px;
    cursor: pointer;
  }
  span {
    margin-left: 20px;
    margin-right: 7px;
    color: $kungalgame-font-color-3;
    font-weight: bold;
    cursor: pointer;
  }
}

// 顶部交互栏
$navNumber: v-bind(navItemNum);

.top-bar {
  position: relative;
  text-align: center;
  width: v-bind(navItemNumString);
  ul {
    align-items: center;
    display: flex;
    right: 5%;
    .top-bar-box {
      border-radius: 2px;
      bottom: 0;
      height: 7px;
      left: 0;
      position: absolute;
      transition: 0.5s;
      width: calc(100% / $navNumber);
    }
    a {
      // 转变 a 标签为块级元素
      display: block;
      color: $kungalgame-blue-5;
      width: 100%;
      height: 100%;
    }
    li {
      cursor: pointer;
      display: block;
      font-weight: bold;
      line-height: 58px;
      width: 100%;
      &:hover {
        background-color: $kungalgame-blue-0;
        border-radius: 2px;
        transition: 0.5s;
      }
      &:nth-child(1):hover ~ .top-bar-box {
        background-color: $kungalgame-red-3;
        left: calc(100% / $navNumber * 0);
      }

      &:nth-child(2):hover ~ .top-bar-box {
        background-color: $kungalgame-yellow-3;
        left: calc(100% / $navNumber * 1);
      }

      &:nth-child(3):hover ~ .top-bar-box {
        background-color: $kungalgame-blue-3;
        left: calc(100% / $navNumber * 2);
      }

      &:nth-child(4):hover ~ .top-bar-box {
        background-color: $kungalgame-green-3;
        left: calc(100% / $navNumber * 3);
      }
      &:nth-child(5):hover ~ .top-bar-box {
        background-color: $kungalgame-purple-3;
        left: calc(100% / $navNumber * 4);
      }
    }
  }
}

/* 用户个人信息 */

.kungalgamer-info {
  display: flex;
  align-items: center;
  img {
    cursor: pointer;
    border-radius: 50%;
    height: 40px;
    position: relative;
    margin-right: 50px;
  }
  > span {
    color: $kungalgame-font-color-2;
    font-size: 25px;
    margin-top: 10px;
    margin-right: 30px;
    cursor: pointer;
  }
}
@media (max-width: 1000px) {
  span {
    display: none;
  }
}
</style>
