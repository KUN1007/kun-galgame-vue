<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Message from '@/components/alert/Message'
import BackgroundImageSkeleton from '@/components/skeleton/settings-panel/BackgroundImageSkeleton.vue'

import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'

import { backgroundImages } from './background'
import { getBackgroundURL } from '@/hooks/useBackgroundPicture'
import { restoreBackground } from '@/hooks/useBackgroundPicture'

const imageArray = ref<string[]>([])
// Use the settings panel store
const { showKUNGalgameBackground, showKUNGalgameCustomBackground } =
  storeToRefs(useKUNGalgameSettingsStore())

// Get background image thumbnails
const getBackground = async (imageNumber: number) => {
  return await getBackgroundURL(`bg${imageNumber}-m`)
}

// Change the background image
const handleChangeImage = (index: number) => {
  showKUNGalgameBackground.value = `bg${index}`
}

// Custom background
const url = ref('')

const handleCustomBackground = () => {
  if (url.value) {
    showKUNGalgameCustomBackground.value = url.value
    showKUNGalgameBackground.value = 'bg1007'
    url.value = ''
  } else {
    Message('Please input a valid image URL', '请输入合法的图片链接', 'warn')
  }
}

const handleHoverBackgroundImage = () => {}

onMounted(async () => {
  for (const background of backgroundImages) {
    const backgroundURL = await getBackground(background.index)
    imageArray.value.push(backgroundURL)
  }
})
</script>

<template>
  <div class="kungalgame-background">
    <div class="bg-settings">
      {{ $tm('header.settings.background') }}
    </div>
    <ul class="kungalgame-background-container">
      <li>
        <span>{{ $tm('header.settings.preset') }}</span>
        <!-- Preset background collection -->
        <ul class="kungalgame-restore-bg">
          <li
            v-for="kun in backgroundImages"
            :key="kun.index"
            v-tooltip="{ message: kun.message, position: 'bottom' }"
          >
            <img
              v-if="kun"
              :src="imageArray[kun.index - 1]"
              @click="handleChangeImage(kun.index)"
              @hover="handleHoverBackgroundImage"
            />

            <BackgroundImageSkeleton v-if="!imageArray[kun.index - 1]" />
          </li>
        </ul>
      </li>

      <!-- User-customized background -->
      <li>
        <!-- Title -->
        <span>{{ $tm('header.settings.custom') }}</span>

        <!-- Input field -->
        <div class="kungalgamer-bg">
          <div class="bg-url-input">
            <input
              :placeholder="`${$tm('header.settings.url')}`"
              type="text"
              v-model="url"
              required
            />

            <!-- Confirm background URL -->
            <button @click="handleCustomBackground">
              {{ $tm('header.settings.confirm') }}
            </button>
          </div>
        </div>

        <!-- Reset blank background -->
        <button class="restore-bg" @click="restoreBackground">
          {{ $tm('header.settings.restore') }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
/* Background settings */
.kungalgame-background-container {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  display: block;
  /* Height of the background menu */
  height: 100%;
  font-size: 15px;
  font-weight: normal;
  color: var(--kungalgame-font-color-3);

  /* Font for the title of the background container */
  span {
    height: 30px;
    /* Centered */
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.bg-settings {
  margin: 10px 0;
}

/* Grid of background image thumbnails, three rows and three columns */
.kungalgame-restore-bg {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 80px);
  grid-template-rows: repeat(3, 50px);
  position: relative;
  /* Distance from the lower area */
  margin-bottom: 10px;

  /* Center individual images */
  li {
    display: flex;
    justify-content: center;
    align-items: center;

    /* Spacing for individual images */
    img {
      cursor: pointer;
      width: 70px;
      position: relative;

      /* Image hover effect */
      &:hover {
        transform: scale(3);
        transition: 0.2s;
        z-index: 7;
      }
    }

    .image-detail {
      position: absolute;
    }
  }
}
.kungalgamer-bg {
  display: flex;
  flex-direction: column;
}
/* URL input box */
.bg-url-input {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--kungalgame-font-color-3);

  input {
    width: 100%;
    padding-left: 5px;
    height: 25px;
    border: 1px solid var(--kungalgame-blue-4);
    background-color: var(--kungalgame-trans-white-9);
    color: var(--kungalgame-font-color-3);

    /* Focus on the input box */
    &:focus {
      outline: none;
      background-color: var(--kungalgame-trans-blue-0);
    }
  }
  /* Confirm button */
  button {
    flex-shrink: 0;
    padding: 0 10px;
    height: 25px;
    width: 70px;
    color: var(--kungalgame-font-color-3);
    border: 1px solid var(--kungalgame-blue-4);
    border-left: none;
    background-color: var(--kungalgame-trans-white-5);
    cursor: pointer;

    /* Confirm button hover effect */
    &:hover {
      background-color: var(--kungalgame-trans-red-1);

      /* Confirm button active effect */
      &:active {
        background-color: var(--kungalgame-trans-red-3);
      }
    }
  }
}

.restore-bg {
  font-size: 15px;
  cursor: pointer;
  height: 30px;
  width: 100%;
  margin-top: 10px;
  color: var(--kungalgame-font-color-3);
  border: 1px solid var(--kungalgame-blue-4);
  background-color: var(--kungalgame-trans-white-9);
  transition: all 0.2s;
  color: var(--kungalgame-blue-4);

  &:hover {
    color: var(--kungalgame-white);
    background-color: var(--kungalgame-blue-4);
  }
}
</style>
