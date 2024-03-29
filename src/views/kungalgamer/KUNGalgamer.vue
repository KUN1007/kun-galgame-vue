<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import Header from './components/Header.vue'
import KUNGalgameFooter from '@/components/KUNGalgameFooter.vue'

import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { UserInfo } from '@/api'

import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'
import { storeToRefs } from 'pinia'

const uid = computed(() => {
  return parseInt(useRoute().params.uid as string)
})
const user = ref<UserInfo>()
const { name, moemoepoint } = storeToRefs(useKUNGalgameUserStore())

const getUser = async (uid: number) => {
  const userInfo = await useKUNGalgameUserStore().getUser(uid)
  return userInfo.data
}

onMounted(async () => {
  user.value = await getUser(uid.value)

  if (user.value.name === name.value) {
    moemoepoint.value = user.value.moemoepoint
  }
})
</script>

<template>
  <div class="root">
    <div class="container">
      <Header
        :name="user?.name"
        :avatar="user?.avatar"
        :moemoepoint="user?.moemoepoint"
      />

      <div class="content">
        <NavBar :uid="uid" />
        <RouterView v-if="user" :user="user" />
      </div>
    </div>

    <KUNGalgameFooter style="margin: 0 auto; padding-bottom: 17px" />
  </div>
</template>

<style lang="scss" scoped>
.root {
  height: calc(100vh - 65px);
  min-height: 800px;
  width: 100vw;
  display: flex;
  flex-direction: column;
}

.container {
  width: 60%;
  height: 70%;
  min-height: 700px;
  max-width: 1350px;
  max-width: 1200px;
  background-color: var(--kungalgame-trans-white-2);
  border: 1px solid var(--kungalgame-blue-4);
  box-shadow: var(--shadow);
  border-radius: 7px;
  margin: auto;
  display: flex;
  flex-direction: column;
  color: var(--kungalgame-font-color-3);
  transition: all 0.2s;
}

.content {
  height: 1px;
  flex-grow: 1;
  display: flex;
}

@media (max-width: 1000px) {
  .container {
    width: 90%;
  }
}

@media (max-width: 700px) {
  .container {
    width: 97%;
    height: 90%;
  }
}
</style>
