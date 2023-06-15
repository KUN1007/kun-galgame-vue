<template>
  <Teleport to="body" :disabled="props.isShowValidate">
    <Transition name="capture">
      <div class="mask" v-if="props.isShowValidate">
        <div class="validate">
          <div class="text">
            <div
              class="character"
              v-for="(char, index) in characters"
              :key="index"
              :style="char.style"
              @click="handleCharacterClick(char)"
            >
              <text>{{ char.value }}</text>
            </div>
          </div>
          <div class="msg">
            <div v-if="isVerified" class="pass">验证通过</div>
            <div v-else-if="errorCount > 0" class="error">
              点击错误，请重新点击
            </div>
            <div class="hint" v-if="!isVerified">
              请按顺序点击以下字符:
              {{ characters.map((char) => char.value).join(' ') }}
            </div>
            <div class="refresh" @click="resetCharacters">点击刷新</div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const containerRef = ref<HTMLDivElement | null>(null)
const characters = ref(generateRandomCharacters())
const clickedCharacters = ref('')
const isVerified = ref(false)
const errorCount = ref(0)

const props = defineProps(['isShowValidate'])
const emits = defineEmits(['validate'])

interface Character {
  value: string
  style: {
    top: string
    left: string
  }
}

emits('validate', false)

// 获得随机 26 个字符
function generateRandomCharacters(): Character[] {
  const chars = t('AlertInfo.captureText')
  const randomChars: Character[] = []

  // 创建一个 Set 集合用于去重
  const charSet = new Set<string>()

  while (charSet.size < 3) {
    const randomIndex = Math.floor(Math.random() * chars.length)
    const char = chars[randomIndex]

    // 如果字符不在集合中，则添加到集合和结果数组中
    if (!charSet.has(char)) {
      charSet.add(char)
      const character: Character = {
        value: char,
        style: {
          top: `${getRandomCoordinate()}px`,
          left: `${getRandomCoordinate()}px`,
        },
      }
      randomChars.push(character)
    }
  }

  return randomChars
}

function getRandomCoordinate(): number {
  const minCoordinate = 50
  const maxCoordinate = 150
  return (
    Math.floor(Math.random() * (maxCoordinate - minCoordinate + 1)) +
    minCoordinate
  )
}

const handleCharacterClick = (char: Character): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    clickedCharacters.value += char.value
    if (
      clickedCharacters.value.length === 3 &&
      clickedCharacters.value === characters.value.map((c) => c.value).join('')
    ) {
      isVerified.value = true
      emits('validate', true)
    } else if (clickedCharacters.value.length >= 3) {
      errorCount.value += 1
      resetCharacters()
      emits('validate', false)
    }
  })
}

function resetCharacters() {
  characters.value = generateRandomCharacters()
  clickedCharacters.value = ''
  isVerified.value = false
}

onMounted(() => {
  const container = containerRef.value
  if (container) {
    container.style.width = '300px'
    container.style.height = '300px'
  }
})
</script>

<style lang="scss" scoped>
.mask {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
  color: var(--kungalgame-font-color-3);
}

.validate {
  height: 100%;
  width: 300px;
  height: 300px;
  margin: auto;
  padding: 20px 30px;
  background-color: var(--kungalgame-trans-white-2);
  border: 1px solid var(--kungalgame-blue-1);
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  display: flex;
}

.text {
  cursor: pointer;
  position: absolute;
  font-size: 30px;
  transform: translateX(-30px);
}

.character {
  position: relative;
}

.refresh {
  width: 64px;
  color: var(--kungalgame-blue-4);
  margin-top: 20px;
  cursor: pointer;
  border-bottom: 2px solid var(--kungalgame-trans-white-9);
  &:hover {
    border-bottom: 2px solid var(--kungalgame-blue-4);
  }
}

.msg {
  position: absolute;
}

.capture-enter-from {
  opacity: 0;
}

.capture-leave-to {
  opacity: 0;
}

.capture-enter-from .validate,
.capture-leave-to .validate {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
