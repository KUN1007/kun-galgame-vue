<template>
  <div>
    <div class="card" :class="{ flipped: isFlipped }">
      <div class="front">
        <button @click="flipCard">正面按钮</button>
      </div>
      <div class="back">
        <button @click="flipCard">背面按钮</button>
        <div class="back-content">
          <p>这是背面的内容</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 使用ref创建一个响应式变量
const isFlipped = ref(false)

// 点击按钮翻转卡片
const flipCard = () => {
  isFlipped.value = !isFlipped.value
}
</script>

<style>
.card {
  width: 200px;
  height: 200px;
  perspective: 800px;
  transition: transform 0.6s;
}

.flipped {
  transform: rotateY(180deg);
}

.front,
.back {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
}

.front {
  background-color: #e9e9e9;
  display: flex;
  justify-content: center;
  align-items: center;
}

.back {
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateY(180deg);
}

.back-content {
  padding: 10px;
  text-align: center;
}
</style>
