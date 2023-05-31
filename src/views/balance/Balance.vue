<script setup lang="ts">
import KUNGalgameTopBar from '@/components/KUNGalgameTopBar.vue'
import { currBackground } from '@/hooks/useBackgroundPicture'
import Form from './components/Form.vue'
import KUNGalgameFooter from '@/components/KUNGalgameFooter.vue'
// 导入临时数据
import { calculateTotalAmount } from './log'
</script>

<template>
  <div class="root" :style="{ backgroundImage: currBackground }">
    <!-- 头部 -->
    <KUNGalgameTopBar />
    <!-- 文章部分 -->
    <div class="article">
      <!-- 页面标题 -->
      <div class="title">收支公示</div>
      <!-- 内容区 -->
      <div class="content">
        <Form :isIncome="true" />
        <Form />
      </div>
      <!-- 收入支出总结 -->
      <div class="sum">
        <!-- 经济状态 -->
        <div
          class="amount-status-deficit"
          :class="calculateTotalAmount() >= 0 ? 'amount-status-surplus' : ''"
        >
          <div>经济状态: <span>亏损</span></div>
          <div>亏损金额: {{ calculateTotalAmount() }} CNY</div>
        </div>
      </div>
      <!-- 版权 -->
      <KUNGalgameFooter />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.root {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-width: 1100px;
  min-height: 600px;
}
/* 文章部分 */
.article {
  /* 固定宽高 */
  width: 1000px;
  height: 500px;
  /* 居中 */
  margin: auto;
  background-color: $kungalgame-trans-white-2;
  /* 模糊背景 */
  backdrop-filter: blur(5px);
  /* 边距 */
  padding: 10px;
  border-radius: 7px;
  border: 1px solid $kungalgame-trans-blue-2;
  /* 阴影 */
  box-shadow: $shadow;
  /* 竖直弹性盒 */
  display: flex;
  align-items: center;
  flex-direction: column;
  /* 相对于版权信息定位 */
  position: relative;
}
/* 页面标题 */
.title {
  /* 固定高度 */
  height: 60px;
  /* 字体大小 */
  font-size: 30px;
  flex-shrink: 0;
  /* 居中 */
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 内容区 */
.content {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
/* 收入支出总结 */
.sum {
  margin-top: 30px;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 22px;
}
/* 经济状态亏损 */
.amount-status-deficit {
  width: 100%;
  display: flex;
  justify-content: space-around;
  span {
    padding: 5px;
    background-color: $kungalgame-red-4;
    color: $kungalgame-white;
  }
  & > div:last-child {
    background-color: $kungalgame-red-2;
  }
}
/* 经济状态盈余 */
.amount-status-surplus {
  span {
    background-color: $kungalgame-green-4;
  }
  & > div:last-child {
    background-color: $kungalgame-green-2;
  }
}
</style>
