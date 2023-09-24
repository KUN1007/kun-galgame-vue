<script setup lang="ts">
import { ref, computed } from 'vue'
// 导入问题
import { questionsEN } from './questionsEN'
import { questionsCN } from './questionsCN'
// 全局消息组件（顶部）
import message from '@/components/alert/Message'
// 导入设置塑件，目的是获取语言
import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'

// 使用设置 store 获取语言
const { showKUNGalgameLanguage } = storeToRefs(useKUNGalgameSettingsStore())
// 当前的语言
const questions =
  showKUNGalgameLanguage.value === 'en' ? questionsEN : questionsCN

const props = defineProps<{
  isShowValidate: boolean
}>()

const emits = defineEmits<{
  handleVerify: [res: boolean]
  handleClose: [isShowValidate: boolean]
}>()

// 用于随机选择问题的函数
const randomizeQuestion = () => {
  // 生成一个介于0到问题数量减1之间的随机整数
  return Math.floor(Math.random() * questions.length)
}

// 用户输入的答案
const userAnswers = ref('')
// 当前问题的索引
const currentQuestionIndex = ref(randomizeQuestion())
// 当前的问题
const currentQuestion = computed(() => questions[currentQuestionIndex.value])
// 错误次数计数
const errorCounter = ref(0)
const expectedKeys = ref(['k', 'u', 'n'])
const currentIndex = ref(0)
// 是否显示提示
const isShowHint = ref(false)
// 是否显示答案
const isShowAnswer = ref(false)

// 监听键盘事件
const checkKeyPress = (event: KeyboardEvent) => {
  const pressedKey = event.key

  if (pressedKey === expectedKeys.value[currentIndex.value]) {
    // 当用户按下了期望的键时
    if (currentIndex.value === expectedKeys.value.length - 1) {
      // 如果已经按下了最后一个键 "n"，触发相应逻辑
      isShowAnswer.value = true
    } else {
      // 否则，继续下一个期望的键
      currentIndex.value++
    }
  } else {
    // 如果按下了错误的键，重新开始检查
    currentIndex.value = 0
  }
}

// 提交问题
const submitAnswer = () => {
  const correctOption = currentQuestion.value.correctOption

  if (userAnswers.value === correctOption) {
    // 回答正确
    emits('handleVerify', true)
    message(
      'Human-machine identity verification successful ~',
      '人机身份验证通过 ~',
      'success'
    )
  } else {
    // 回答错误
    errorCounter.value++

    message('Wrong answer!', '回答错误！', 'warn')

    // 随机选择一个新的问题
    const randomIndex = randomizeQuestion()
    currentQuestionIndex.value = randomIndex
    userAnswers.value = ''

    // 错误次数大于三次显示提示
    if (errorCounter.value >= 3) {
      isShowHint.value = true
    }
  }
}
</script>

<template>
  <Teleport to="body" :disabled="props.isShowValidate">
    <Transition name="capture">
      <!-- 遮罩 -->
      <div
        class="mask"
        @keydown="checkKeyPress($event)"
        tabindex="0"
        v-if="props.isShowValidate"
      >
        <div class="validate">
          <!-- 标题 -->
          <div class="title">
            <!-- <span>{{ `❮` }}</span> -->
            <h2>{{ $tm('AlertInfo.capture.title') }}</h2>
            <!-- <span>{{ `❯` }}</span> -->
          </div>
          <p class="question">{{ currentQuestion.text }}</p>

          <!-- 选择项 -->
          <div class="select">
            <label
              v-for="(option, index) in currentQuestion.options"
              :key="index"
            >
              <input type="radio" v-model="userAnswers" :value="option" />
              {{ option }}
            </label>
          </div>

          <!-- 提交按钮 -->
          <div class="btn">
            <button @click="submitAnswer">
              {{ $tm('AlertInfo.capture.submit') }}
            </button>
            <button @click="emits('handleClose', false)">
              {{ $tm('AlertInfo.capture.close') }}
            </button>
          </div>

          <!-- 提示 -->
          <!-- tabindex 使得该元素可以被页面聚焦 -->
          <div class="hint-container">
            <div v-if="isShowHint" class="hint">
              <div>{{ $tm('AlertInfo.capture.hint1') }}</div>
              <div>
                {{ $tm('AlertInfo.capture.hint2') }}
                <span>kun</span>
                {{ $tm('AlertInfo.capture.hint3') }}
              </div>
            </div>
            <div v-if="isShowAnswer" class="answer">
              <div>{{ $tm('AlertInfo.capture.hint4') }}</div>
              <a
                href="http://github.com/KUN1007/kun-galgame-vue"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ $tm('AlertInfo.capture.answer') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

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
  width: 300px;
  min-height: 300px;
  margin: auto;
  padding: 17px;
  background-color: var(--kungalgame-trans-white-2);
  border: 1px solid var(--kungalgame-blue-1);
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 17px;
  color: var(--kungalgame-blue-4);
}

.question {
  font-size: 17px;
  margin-bottom: 20px;
  font-style: oblique;
}

.select {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  margin-bottom: 20px;
}

.btn {
  display: flex;
  justify-content: space-around;

  button {
    width: 77px;
    padding: 5px;
    color: var(--kungalgame-blue-4);
    border: 1px solid var(--kungalgame-blue-4);
    border-radius: 5px;
    background-color: var(--kungalgame-trans-white-9);
    transition: all 0.2s;
    &:hover {
      color: var(--kungalgame-white);
      background-color: var(--kungalgame-blue-4);
    }
  }
}

.hint-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: end;
  font-style: oblique;
  .hint {
    width: 100%;
    font-size: 10px;
    span {
      color: var(--kungalgame-pink-4);
      font-weight: bold;
    }
  }
  .answer {
    width: 100%;
    div {
      font-size: 10px;
    }
    a {
      color: var(--kungalgame-blue-5);
      &:hover {
        text-decoration: underline;
      }
    }
  }
}

/* 激活后的样式 */
.active {
  transition: all 0.2s;
  border: 2px solid var(--kungalgame-pink-3);
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
