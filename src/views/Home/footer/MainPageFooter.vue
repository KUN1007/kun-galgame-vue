<script setup lang="ts">
import Wave from './components/Wave.vue'
import KUNGalgameInfo from './components/KUNGalgameInfo.vue'
</script>

<template>
  <div class="footer">
    <!-- footer 的内部容器 -->
    <div class="container">
      <Wave />
      <KUNGalgameInfo />
    </div>
  </div>
</template>

<style scoped>
.footer {
  height: 1px;
  width: 100%;
  flex-grow: 4;
  display: flex;
  flex-direction: column;
}

/* footer 总容器的 flex */
.container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>
