<script setup lang="ts">
import { ref } from 'vue'
const isFlipped = ref(false)
const flipCard = () => {
  isFlipped.value = !isFlipped.value
}
</script>

<template>
  <div>
    <div class="card" :class="{ flipped: isFlipped }">
      <div class="front">
        <button @click="flipCard">Front Button</button>
      </div>
      <div class="back">
        <button @click="flipCard">Back Button</button>
        <div class="back-content">
          <p>Back Content</p>
        </div>
      </div>
    </div>
  </div>
</template>

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
