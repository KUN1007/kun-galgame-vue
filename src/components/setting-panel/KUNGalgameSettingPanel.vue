<!-- Settings panel component, displaying the entire forum's settings panel -->
<script setup lang="ts">
// Import icon font
import { Icon } from '@iconify/vue'
// Import mascot component
import Loli from './components/Loli.vue'
// Import mode switch component
import Mode from './components/Mode.vue'
// Import language switch component
import SwitchLanguage from './components/SwitchLanguage.vue'
// Page width adjustment component
import PageWidth from './components/PageWidth.vue'
// Font settings component
import Font from './components/Font.vue'
// Import background settings component
import Background from './components/Background.vue'
// Import settings store
import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'

// Use the settings store
const settingsStore = useKUNGalgameSettingsStore()
const { isShowPageWidth } = storeToRefs(settingsStore)

// Define emits to close the settings panel
const emits = defineEmits<{
  close: [showKUNGalgamePanel: boolean]
}>()

// Restore all settings to default
const handleRecover = () => {
  settingsStore.setKUNGalgameSettingsRecover()
}

// Close the settings panel
const handelCloseSettingsPanel = () => {
  emits('close', false)
}
</script>

<template>
  <!-- Root element -->
  <div class="root">
    <div class="container">
      <div class="title">
        <span>{{ $tm('header.settings.name') }}</span>
        <span><Icon class="settings-icon" icon="uiw:setting-o" /></span>
      </div>

      <!-- Mode switch component -->
      <Mode />

      <!-- Language switch component -->
      <SwitchLanguage />

      <div class="switch">
        <div class="menu">
          <span
            :class="isShowPageWidth ? 'active' : ''"
            @click="isShowPageWidth = true"
          >
            {{ $tm('header.settings.width') }}
          </span>
          <span
            :class="isShowPageWidth ? '' : 'active'"
            @click="isShowPageWidth = false"
          >
            {{ $tm('header.settings.font') }}
          </span>
        </div>

        <TransitionGroup name="item" tag="div">
          <div class="item" v-if="isShowPageWidth">
            <!-- Page width adjustment component -->
            <PageWidth />
          </div>

          <div class="item" v-else-if="!isShowPageWidth">
            <!-- Set the page font -->
            <Font />
          </div>
        </TransitionGroup>
      </div>

      <!-- Background settings component -->
      <Background />

      <button class="reset" @click="handleRecover">
        {{ $tm('header.settings.recover') }}
      </button>
    </div>

    <!-- Mascot component -->
    <Loli class="loli" />

    <!-- Close panel -->
    <div class="close">
      <!-- showKUNGalgamePanel exists in the settings, false to close the settings panel -->
      <Icon @click="handelCloseSettingsPanel" icon="line-md:close" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* Root container */
.root {
  top: 65px;
  right: 0;
  position: absolute;
  background-color: var(--kungalgame-trans-white-5);
  backdrop-filter: blur(5px);
  box-shadow: var(--shadow);
  border-radius: 10px;
  display: flex;
  color: var(--kungalgame-font-color-3);
  border: 1px solid var(--kungalgame-blue-1);
  overflow-y: scroll;
}

.container {
  position: relative;
  margin: 20px;
  font-size: 17px;
}

.title {
  font-size: 23px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    display: flex;
    align-items: center;
  }
}

// Keep the settings button rotating
.settings-icon {
  animation: settings 3s linear infinite;
}

@keyframes settings {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Menu for switching settings options */
.switch {
  display: flex;
  flex-direction: column;

  .menu {
    display: flex;
    justify-content: space-between;
    margin-bottom: 17px;
    border: 1px solid var(--kungalgame-blue-4);

    span {
      cursor: pointer;
      width: 100%;
      padding: 2px;
      display: flex;
      font-size: 15px;
      justify-content: center;
      color: var(--kungalgame-blue-4);
      transition: all 0.2s;

      &:nth-child(1) {
        border-right: 1px solid var(--kungalgame-blue-4);
      }
    }

    .active {
      background-color: var(--kungalgame-blue-4);
      color: var(--kungalgame-white);
    }
  }

  .item {
    width: 100%;
    height: 73px;
  }
}

.reset {
  font-size: 15px;
  cursor: pointer;
  margin-top: 20px;
  color: var(--kungalgame-font-color-3);
  border: 1px solid var(--kungalgame-red-4);
  background-color: var(--kungalgame-trans-red-1);
  width: 100%;
  height: 30px;
  transition: all 0.2s;

  &:hover {
    background-color: var(--kungalgame-red-4);
    color: var(--kungalgame-white);
  }
}

.close {
  font-size: 25px;
  width: 270px;
  display: flex;
  justify-content: end;
  margin: 20px;
  cursor: pointer;
}

.item-move, /* Transition applied to moving elements */
.item-enter-active,
.item-leave-active {
  transition: all 0.5s ease;
}

.item-enter-from,
.item-leave-to {
  opacity: 0;
  transform: translateY(77px);
}

/* Ensure the leaving element is removed from the layout flow
  to correctly calculate the animated movement. */
.item-leave-active {
  position: absolute;
}

@media (max-width: 1000px) {
  .root {
    display: none;
  }
}
@media (max-height: 600px) {
  .root {
    right: -600px;
    transition: 0.5s;
  }
}
</style>
