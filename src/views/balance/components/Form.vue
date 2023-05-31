<script setup lang="ts">
import Log from './Log.vue'
// 导入临时数据
import { calculateTotalIncome, calculateTotalExpenditure } from '../log'

const props = defineProps(['isIncome'])
const title = props.isIncome ? 'income' : 'expenditure'
const total = props.isIncome ? 'totalIncome' : 'totalExpenditure'
</script>

<template>
  <!-- 收入 -->
  <div class="form" :class="$props.isIncome ? '' : 'expenditure-form'">
    <!-- 标题 -->
    <div class="title">{{ $t(`balance['${title}']`) }}</div>
    <!-- 收入记录的容器 -->
    <div class="container">
      <Log :isIncome="$props.isIncome" />
    </div>
    <!-- 总收入 -->
    <div class="sum">
      {{ $t(`balance['${total}']`) }}:
      {{
        $props.isIncome ? calculateTotalIncome() : calculateTotalExpenditure()
      }}
      CNY
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 收入 */
.form {
  /* 占 49%，目的是使得中间留下间隔 */
  /* 固定高度 */
  width: 460px;
  margin: 0 10px;
  height: 300px;
  border: 1px solid $kungalgame-blue-4;
  display: flex;
  flex-direction: column;
  .title {
    font-size: 20px;
    display: flex;
    justify-content: center;
    padding: 10px 0;
    border-bottom: 1px solid $kungalgame-blue-4;
    background-color: $kungalgame-trans-blue-0;
  }
  /* 收入记录的容器 */
  .container {
    flex-grow: 1;
    padding: 10px;
    /* y 轴溢出滚动 */
    overflow-y: scroll;
  }
  /* 总收入 */
  .sum {
    height: 40px;
    font-size: 18px;
    flex-shrink: 0;
    /* 文字居中 */
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid $kungalgame-blue-4;
    background-color: $kungalgame-trans-blue-0;
  }
}

/* 滚动条的样式 */
.container::-webkit-scrollbar {
  display: inline;
  width: 4px;
  height: 0;
  background-color: $kungalgame-red-2;
  border-radius: 2px;
}
.container::-webkit-scrollbar-thumb {
  background: $kungalgame-blue-4;
  border-radius: 2px;
}
/* 支出的样式 */
.expenditure-form {
  border: 1px solid $kungalgame-red-4;
  .title {
    border-bottom: 1px solid $kungalgame-red-4;
    background-color: $kungalgame-trans-red-0;
  }
  .sum {
    border-top: 1px solid $kungalgame-red-4;
    background-color: $kungalgame-trans-red-0;
  }
}
</style>
