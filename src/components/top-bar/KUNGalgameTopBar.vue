<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import { Icon } from '@iconify/vue'
import 'animate.css'
import { topBarItem } from './topBarItem'
import { onBeforeRouteLeave } from 'vue-router'
// 手机版 hamburger
const Hamburger = defineAsyncComponent(() => import('./Hamburger.vue'))
// 设置面板
const KUNGalgameSettingsPanel = defineAsyncComponent(
  () => import('../setting-panel/KUNGalgameSettingPanel.vue')
)
// 点击用户头像的面板
const KUNGalgameUserInfo = defineAsyncComponent(
  () => import('./KUNGalgameUserInfo.vue')
)

import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'
import { storeToRefs } from 'pinia'
const { name, avatarMin } = storeToRefs(useKUNGalgameUserStore())

// 显示设置面板的状态值
const showKUNGalgamePanel = ref(false)
// 显示手机模式 hamburger 的状态值
const showKUNGalgameHamburger = ref(false)
// 显示点击用户头像面板的状态值
const showKUNGalgameUserPanel = ref(false)

// 根据导航条的项目个数操作 css 中导航条的宽度，这里必须要这样写，因为用了 css v-bind
const navItemNum = topBarItem.length
const navItemLength = `${navItemNum}00px`

// 路由离开之前销毁 SettingsPanel 和 Hamburger
onBeforeRouteLeave(() => {
  showKUNGalgamePanel.value = false
  showKUNGalgameHamburger.value = false
})
</script>

<template>
  <div class="header">
    <!-- 顶部左侧交互栏 -->
    <div class="nav-top">
      <div class="hamburger">
        <Icon
          icon="line-md:menu-fold-right"
          v-if="!showKUNGalgameHamburger"
          @click="showKUNGalgameHamburger = !showKUNGalgameHamburger"
        />
        <transition
          enter-active-class="animate__animated animate__fadeInLeft animate__faster"
          leave-active-class="animate__animated animate__fadeOutLeft animate__faster"
        >
          <KeepAlive>
            <Hamburger
              v-if="showKUNGalgameHamburger"
              @showKUNGalgameHamburger="showKUNGalgameHamburger = false"
            />
          </KeepAlive>
        </transition>
      </div>

      <!-- 网站的名字和网站图标 -->
      <div class="kungalgame">
        <RouterLink to="/kun">
          <img
            src="@/assets/images/favicon.webp"
            alt="KUN Visual Novel 鲲 Galgame"
          />
          <span>{{ $tm('header.name') }}</span>
        </RouterLink>
      </div>

      <!-- 导航栏 -->
      <div class="top-bar">
        <!-- 顶部单个板块 -->
        <span v-for="kun in topBarItem" :key="kun.index">
          <RouterLink :to="{ path: kun.router }">
            {{ $tm(`header['${kun.name}']`) }}
          </RouterLink>
        </span>
        <!-- 顶部板块下部的 hover 效果 -->
        <div class="box"></div>
      </div>
    </div>

    <div class="kungalgamer-info">
      <!-- showKUNGalgamePanel 为 store 里的布尔值,其真假控制设置面板的显示与关闭 -->
      <span @click="showKUNGalgamePanel = !showKUNGalgamePanel">
        <Icon icon="uiw:setting-o" />
      </span>
      <div class="avatar">
        <img
          v-if="avatarMin"
          @click="showKUNGalgameUserPanel = true"
          :src="avatarMin"
          alt="KUN"
        />
        <span @click="showKUNGalgameUserPanel = true" v-if="!avatarMin">
          {{ name }}
        </span>
      </div>
      <KUNGalgameUserInfo
        v-if="showKUNGalgameUserPanel"
        @close="showKUNGalgameUserPanel = false"
      />
    </div>
  </div>

  <div class="settings-panel">
    <transition
      enter-active-class="animate__animated animate__jackInTheBox animate__faster"
      leave-active-class="animate__animated animate__fadeOutRight animate__faster"
    >
      <KeepAlive :exclude="['PageWidth', 'Font']">
        <KUNGalgameSettingsPanel
          v-if="showKUNGalgamePanel"
          @close="showKUNGalgamePanel = false"
        />
      </KeepAlive>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
/* 头部样式 */
.header {
  height: 58px;
  box-shadow: 0 2px 4px 0 var(--kungalgame-trans-blue-1);
  background-color: var(--kungalgame-trans-white-5);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* 相对于设置面板定位 */
  position: relative;
  z-index: 1;
  margin-bottom: 7px;
  flex-shrink: 0;
  color: var(--kungalgame-font-color-3);
}

.hamburger {
  display: none;
  margin-top: 10px;
  margin-left: 40px;
  font-size: 25px;
  cursor: pointer;
}

.nav-top {
  display: flex;
  align-items: center;
  height: 100%;
}

// 顶部交互栏
$navNumber: v-bind(navItemNum);

.top-bar {
  position: relative;
  text-align: center;
  width: v-bind(navItemLength);
  align-items: center;
  display: flex;
  .box {
    border-radius: 2px;
    bottom: 0;
    height: 7px;
    left: 0;
    position: absolute;
    transition: 0.5s;
    width: calc(100% / $navNumber);

    &:hover {
      z-index: -1;
    }
  }

  a {
    display: block;
    color: var(--kungalgame-blue-5);
    width: 100%;
    height: 100%;
  }

  span {
    cursor: pointer;
    display: block;
    font-weight: bold;
    line-height: 58px;
    width: 100%;
    &:nth-child(1):hover ~ .box {
      background-color: var(--kungalgame-red-3);
      left: calc(100% / $navNumber * 0);
    }

    &:nth-child(2):hover ~ .box {
      background-color: var(--kungalgame-blue-3);
      left: calc(100% / $navNumber * 1);
    }

    &:nth-child(3):hover ~ .box {
      background-color: var(--kungalgame-yellow-2);
      left: calc(100% / $navNumber * 2);
    }

    &:nth-child(4):hover ~ .box {
      filter: hue-rotate(240deg);
      background-color: var(--kungalgame-blue-3);
      left: calc(100% / $navNumber * 3);
    }
    &:nth-child(5):hover ~ .box {
      filter: hue-rotate(60deg);
      background-color: var(--kungalgame-blue-3);
      left: calc(100% / $navNumber * 4);
    }
  }
}

.kungalgame {
  display: flex;
  align-items: center;
  margin-left: 50px;

  a {
    display: flex;
    align-items: center;
    color: var(--kungalgame-font-color-3);

    img {
      width: 50px;
      height: 50px;
      margin-right: 30px;
    }
  }
}

/* 用户个人信息 */

.kungalgamer-info {
  display: flex;
  align-items: center;
  margin-right: 50px;
  > span {
    color: var(--kungalgame-font-color-2);
    font-size: 25px;
    margin-top: 10px;
    margin-right: 30px;
    cursor: pointer;
  }
}

.avatar {
  position: relative;
  display: flex;

  span {
    cursor: pointer;
    &:hover {
      color: var(--kungalgame-blue-5);
    }
  }
  img {
    height: 40px;
    width: 40px;
    cursor: pointer;
    border-radius: 50%;
    height: 40px;
    position: relative;
  }
}

/* 设置面板 */
.settings-panel {
  /* 永远在其它页面之上 */
  z-index: 999;
}

@media (max-width: 1000px) {
  span {
    display: none;
  }
}
@media (max-width: 700px) {
  .top-bar {
    display: none;
  }
  .kungalgame {
    display: none;
  }
  .hamburger {
    display: block;
  }
}
</style>
