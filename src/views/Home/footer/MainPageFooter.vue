<script setup lang="ts">
import Wave from './components/Wave.vue'
import KUNGalgameInfo from './components/KUNGalgameInfo.vue'
</script>

<template>
  <div class="footer">
    <div class="container">
      <Wave />
      <KUNGalgameInfo />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  height: 1px;
  width: 100%;
  flex-grow: 4;
  display: flex;
  flex-direction: column;
}

.container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>
