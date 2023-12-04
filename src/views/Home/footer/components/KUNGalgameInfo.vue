<script setup lang="ts">
import List from './List.vue'
import Describe from './Describe.vue'
import Contacts from './Contacts.vue'
import KUNGalgameFooter from '@/components/KUNGalgameFooter.vue'
</script>

<template>
  <div class="kungalgame-info">
    <div class="container">
      <div class="top">
        <List class="list" />

        <div class="bottom">
          <Contacts class="contacts" />
          <KUNGalgameFooter class="footer" />
        </div>
      </div>

      <Describe class="describe" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.kungalgame-info {
  flex-grow: 1;
  display: flex;
  background-color: var(--kungalgame-trans-blue-2);
}

.container {
  margin: 0 auto;
  width: 90%;
  display: flex;
}

.top {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-grow: 2;
}

.bottom {
  display: flex;
}

.footer {
  margin: 0 auto;
}

@media (max-width: 1000px) {
  .list,
  .contacts,
  .describe {
    display: none;
  }
}
</style>
