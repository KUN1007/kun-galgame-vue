<script setup lang="ts">
import { log } from './log'
import { Icon } from '@iconify/vue'
</script>

<template>
  <!-- 单个记录 -->
  <div class="log" v-for="kun in log" :key="kun.index">
    <!-- 用户 -->
    <div class="kungalgamer">@ <span>啊这可海星</span></div>
    <!-- 原因 -->
    <div class="reason">{{ kun.reason }}</div>
    <!-- 后果 -->
    <div class="footer">
      <div class="time">
        <Icon class="hourglass" icon="eos-icons:hourglass" />
        <span>2019 / 10 / 7</span>
      </div>
      <div class="result">
        <Icon class="warning" icon="line-md:alert" />
        <span>{{ $t('nonMoe.moemoepoint') }} - {{ kun.result }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 单个记录 */
.log {
  margin: 20px 40px;
  border-bottom: 1px solid var(--kungalgame-blue-4);
}

.kungalgamer {
  margin-bottom: 10px;
  font-weight: bold;
  span {
    cursor: pointer;
    color: var(--kungalgame-blue-5);
    border-bottom: 2px solid var(--kungalgame-trans-white-9);
    &:hover {
      border-bottom: 2px solid var(--kungalgame-blue-5);
    }
  }
}

/* 原因 */
.reason {
  width: 100%;
  padding-left: 5px;
  border-left: 2px solid var(--kungalgame-blue-4);
}
.footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 17px;
}

/* 后果 */
.time {
  display: flex;
  align-items: center;
  .hourglass {
    margin-right: 7px;
    font-size: 17px;
    color: var(--kungalgame-purple-4);
  }
}
.result {
  border-right: 4px solid var(--kungalgame-red-4);
  padding-right: 5px;
  display: flex;
  align-items: center;
  .warning {
    margin-right: 7px;
    font-size: 17px;
    color: var(--kungalgame-red-3);
  }
}
</style>
