<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { UserInfo } from '@/api'

// Import user store
import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'

// Import left-side interaction section
import NavBar from './components/NavBar.vue'
// Import header
import Header from './components/Header.vue'
// Import common footer
import KUNGalgameFooter from '@/components/KUNGalgameFooter.vue'

// Get the current user's UID from the route parameters
const uid = computed(() => {
  return parseInt(useRoute().params.uid as string)
})
const user = ref<UserInfo>()

// Fetch current user information
const getUser = async (uid: number) => {
  const userInfo = await useKUNGalgameUserStore().getUser(uid)
  return userInfo.data
}

// Fetch user information when mounted
onMounted(async () => {
  user.value = await getUser(uid.value)

  // Update the locally stored latest moemoepoint of the user, as it is not real-time
  useKUNGalgameUserStore().moemoepoint = user.value.moemoepoint
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
