<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed, ref, watchEffect } from 'vue'
import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'
import { storeToRefs } from 'pinia'

const { name, avatar } = storeToRefs(useKUNGalgameUserStore())

const currentPageUsername = ref(name)

const currentPageUserAvatar = ref(avatar)

const props = defineProps<{
  name?: string
  avatar?: string
  moemoepoint?: number
}>()

// Use watchEffect instead of watch, it's kind of confusing, right?
//  Yeah, I'm confused too, ahahaha
watchEffect(() => {
  // Users without avatars
  if (props.name) {
    currentPageUsername.value = props.name
    currentPageUserAvatar.value = ''
  }
  // Users with avatars
  if (props.name && props.avatar) {
    currentPageUsername.value = props.name
    currentPageUserAvatar.value = props.avatar
  }
})

const mpWidth = computed(() => {
  return props.moemoepoint ? `${props.moemoepoint % 100}%` : '0%'
})
</script>

<template>
  <!-- Page header -->
  <div class="header">
    <!-- User avatar -->
    <div class="avatar">
      <img v-if="avatar" :src="avatar" :alt="name" />
    </div>

    <!-- Username -->
    <div class="name">
      <span>{{ name }}</span>
      <span>KUNGalgame</span>
    </div>

    <!-- User Moemoepoint -->
    <div class="moemoepoint">
      <Transition name="progress">
        <div class="mp-progress"></div>
      </Transition>
      <p>
        <span><Icon icon="line-md:star-alt-twotone"></Icon></span>
        <span>{{ props.moemoepoint }}</span>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* Page header */
.header {
  height: 150px;
  position: relative;
  display: flex;
  flex-direction: column;
}

/* User avatar */
.avatar {
  position: absolute;
  top: 5px;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  left: 50px;
  z-index: 2;

  img {
    width: 140px;
    height: 140px;
    border-radius: 50%;

    &:hover {
      animation: spin 1s;
    }
  }
}

/* Username */
.name {
  flex-grow: 2;
  width: 100%;
  background-color: var(--kungalgame-trans-blue-0);
  border-radius: 7px 7px 0 0;
  align-items: center;

  span:nth-child(1) {
    font-family: serif;
    position: absolute;
    font-size: 22px;
    margin-left: 210px;
    margin-top: 60px;
    z-index: 1;
  }

  span:nth-child(2) {
    font-family: serif;
    position: absolute;
    right: 0;
    font-size: 100px;
    color: var(--kungalgame-trans-white-5);
    font-style: italic;
    text-shadow: 2px 2px 2px var(--kungalgame-trans-white-5);
  }
}

@keyframes spin {
  50% {
    transform: rotate(360deg);
  }
  70% {
    transform: scale(1.1);
  }
  80% {
    box-shadow: 0px 0px 2px 7px var(--kungalgame-trans-red-2);
  }
}

/* User Moemoepoint */
.moemoepoint {
  height: 1px;
  flex-grow: 1;
  border-top: 2px solid var(--kungalgame-blue-4);
  border-bottom: 1px solid var(--kungalgame-blue-4);
  display: flex;
  align-items: center;
  z-index: 1;

  p {
    position: absolute;
    right: 0;
    font-size: 17px;
    padding-right: 20px;
    font-style: italic;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--kungalgame-pink-4);

      &:nth-child(1) {
        font-size: 20px;
      }
    }
  }
}
/* User Moemoepoint progress */
.mp-progress {
  transition: width 0.5s;
  height: 100%;
  /* This value will change the blue portion's width based on the user's Moemoepoint count */
  width: v-bind(mpWidth);
  background-color: var(--kungalgame-trans-blue-2);
}

.progress-enter-active {
  width: 0;
}

@media (max-width: 700px) {
  .header {
    height: 110px;
  }

  .avatar {
    left: 30px;
    width: 100px;
    height: 100px;

    img {
      width: 100px;
      height: 100px;
    }
  }

  .name {
    span:nth-child(1) {
      margin-left: 150px;
      margin-top: 40px;
    }

    span:nth-child(2) {
      bottom: 30%;
      font-size: 50px;
    }
  }
}
</style>
