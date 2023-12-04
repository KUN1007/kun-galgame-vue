<script setup lang="ts">
import MainPageContent from './content/MainPageContent.vue'
import MainPageFooter from './footer/MainPageFooter.vue'
</script>

<template>
  <div class="root">
    <MainPageContent />
    <MainPageFooter />
  </div>
</template>

<style lang="scss" scoped>
.root {
  height: 1500px;
  display: flex;
  flex-direction: column;
}

@media (max-width: 700px) {
  .root {
    height: 100vh;
  }
}
</style>
