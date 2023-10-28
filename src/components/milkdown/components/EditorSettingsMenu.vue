<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
// Import the icon font
import { Icon } from '@iconify/vue'
// Import CSS animations
import 'animate.css'

// Import the topic editing store
import { useKUNGalgameEditStore } from '@/store/modules/edit'
// Import the reply store
import { useKUNGalgameTopicStore } from '@/store/modules/topic'
import { storeToRefs } from 'pinia'

// Import the keyword display toggle button
import SwitchButton from './SwitchButton.vue'

// Topic editing page store
const { editorHeight } = storeToRefs(useKUNGalgameEditStore())
// Topic page store for replies
const { replyDraft } = storeToRefs(useKUNGalgameTopicStore())

defineProps<{
  isShowSettingsMenu: boolean
}>()

// Define emits to close the settings panel
const emits = defineEmits<{
  close: [isShowSettingsMenu: boolean]
}>()

// Current route
const route = useRoute()
// Name of the current page route
const routeName = computed(() => route.name as string)

// Close the settings panel
const handelCloseSettingsPanel = () => {
  emits('close', false)
}
</script>

<template>
  <Transition
    enter-active-class="animate__animated animate__jackInTheBox animate__faster"
    leave-active-class="animate__animated animate__rollOut animate__faster"
  >
    <!-- Settings menu -->
    <div v-if="isShowSettingsMenu" class="settings-menu">
      <div class="content">
        <!-- Editor height settings -->
        <div class="editor-height-title">
          <span> {{ $tm('edit.editorHeight') }} </span>
          <span>{{ editorHeight }} px</span>
        </div>

        <!-- Editor page -->
        <div v-if="routeName === 'Edit'" class="editor-height">
          <span>200 px</span>
          <input
            type="range"
            min="200"
            max="500"
            step="1"
            v-model="editorHeight"
          />
          <span>500 px</span>
        </div>

        <!-- Reply panel -->
        <div v-if="routeName === 'Topic'" class="editor-height">
          <span>100 px</span>
          <input
            type="range"
            min="100"
            max="500"
            step="1"
            v-model="replyDraft.editorHeight"
          />
          <span>500 px</span>
        </div>

        <!-- Whether to display popular keywords -->
        <div class="keywords">
          <div class="keywords-title">{{ $tm('edit.tagsHint') }}</div>
          <SwitchButton />
        </div>
      </div>

      <!-- Close button -->
      <div class="close">
        <Icon @click="handelCloseSettingsPanel" icon="line-md:close" />
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.settings-menu {
  width: 323px;
  padding: 10px;
  z-index: 1009;
  position: absolute;
  margin-bottom: 190px;
  background-color: var(--kungalgame-white);
  border: 1px solid var(--kungalgame-blue-1);
  box-shadow: var(--shadow);
  border-radius: 5px;
  display: flex;

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .editor-height-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    font-size: 17px;
  }

  .editor-advance {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    font-size: 17px;
  }
}

.editor-height {
  margin-bottom: 20px;
  display: flex;
  justify-content: space between;
  align-items: center;
}

// Close settings
.close {
  font-size: 25px;
  margin-left: 10px;
  display: flex;
  justify-content: end;
  cursor: pointer;
}

// Whether to display popular keywords
.keywords {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 17px;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
