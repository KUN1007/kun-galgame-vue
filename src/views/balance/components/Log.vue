<script setup lang="ts">
import { computed } from 'vue'
import dayjs from 'dayjs'

import type { BalanceIncome, BalanceExpenditure } from '@/api'
const props = defineProps<{
  isIncome: boolean
  data?: BalanceIncome[] | BalanceExpenditure[]
}>()

const data = computed(() => props.data)
</script>

<template>
  <!-- 单条收入记录 -->
  <div v-for="(kun, index) in data" :key="index">
    <div class="log" :class="props.isIncome ? '' : 'expenditure-log'">
      <!-- 收入来源 -->
      <div class="reason" v-html="kun.reason"></div>
      <!-- 收入时间和金额 -->
      <div class="result">
        <!-- 收入时间 -->
        <span class="date">{{ dayjs(kun.time).format('YYYY/MM/DD') }}</span>
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
