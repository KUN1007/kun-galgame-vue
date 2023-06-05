<script setup lang="ts">
import { FSLog } from '../log'
defineProps(['isIncome'])
</script>

<template>
  <!-- 单条Z收入记录 -->
  <div v-for="kun in FSLog" :key="kun.index" v-if="$props.isIncome">
    <div
      class="log"
      v-if="kun.income"
      :class="$props.isIncome ? '' : 'expenditure-log'"
    >
      <!-- 收入来源 -->
      <div class="reason">{{ kun.reason }}</div>
      <!-- 收入时间和金额 -->
      <div class="result">
        <!-- 收入时间 -->
        <span class="date">{{ kun.date }}</span>
        <!-- 收入金额 -->
        <span class="amount">{{ kun.amount }}</span>
      </div>
    </div>
  </div>
  <!-- 单条支出记录 -->
  <div v-for="kun in FSLog" :key="kun.index" v-if="!$props.isIncome">
    <div
      class="log"
      v-if="!kun.income"
      :class="$props.isIncome ? '' : 'expenditure-log'"
    >
      <!-- 收入来源 -->
      <div class="reason">{{ kun.reason }}</div>
      <!-- 收入时间和金额 -->
      <div class="result">
        <!-- 收入时间 -->
        <span class="date">{{ kun.date }}</span>
        <!-- 收入金额 -->
        <span class="amount">{{ kun.amount }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 单条收入 */
.log {
  margin-top: 20px;
  border-bottom: 1px solid var(--kungalgame-blue-4);
  .reason {
    border-left: 5px solid var(--kungalgame-blue-4);
    padding-left: 5px;
  }
  .result {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    /* 收入时间 */
    .date {
      letter-spacing: 1px;
    }
    /* 收入金额 */
    .amount {
      padding: 0 5px;
      background-color: var(--kungalgame-blue-2);
    }
  }
}
.expenditure-log {
  border-bottom: 1px solid var(--kungalgame-red-4);
  .reason {
    border-left: 5px solid var(--kungalgame-red-4);
  }
  .result .amount {
    background-color: var(--kungalgame-red-2);
  }
}
</style>
