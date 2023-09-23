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

// 用户输入的答案
const userAnswers = ref([])
// 当前问题的索引
const currentQuestionIndex = ref(0)
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
  const userAnswer = userAnswers.value[currentQuestionIndex.value]
  const correctOption = currentQuestion.value.correctOption

  if (userAnswer === correctOption) {
    // 回答正确
    emits('handleVerify', true)
  } else {
    // 回答错误
    errorCounter.value++

    message('Wrong answer!', '回答错误！', 'warn')

    // 前进到下一题
    nextQuestion()

    // 错误次数大于三次显示提示
    if (errorCounter.value >= 3) {
      isShowHint.value = true
    }
  }
}

const nextQuestion = () => {
  if (currentQuestionIndex.value < questions.length - 1) {
    currentQuestionIndex.value++
  } else {
    message('', '已经没有问题了，杂鱼~♡', 'info')
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
            <h2>请回答下面的问题</h2>
            <!-- <span>{{ `❯` }}</span> -->
          </div>
          <p class="question">{{ currentQuestion.text }}</p>

          <!-- 选择项 -->
          <div class="select">
            <label
              v-for="(option, index) in currentQuestion.options"
              :key="index"
            >
              <input
                type="radio"
                v-model="userAnswers[currentQuestionIndex]"
                :value="option"
              />
              {{ option }}
            </label>
          </div>

          <!-- 提交按钮 -->
          <div class="btn">
            <button @click="submitAnswer">提交</button>
            <button @click="emits('handleClose', false)">关闭</button>
          </div>

          <!-- 提示 -->
          <!-- tabindex 使得该元素可以被页面聚焦 -->
          <div class="hint-container">
            <div v-if="isShowHint" class="hint">
              <div>真是杂鱼呢~♡这都答不出来~杂鱼~♡杂鱼~♡</div>
              <div>
                臭杂鱼♡，试试在页面上敲击 <span>kun</span> 呢，杂鱼~♡杂鱼~♡
              </div>
            </div>
            <div v-if="isShowAnswer" class="answer">
              <div>杂鱼~♡杂鱼~♡你就看吧，最后害的还是你自己</div>
              <a
                href="http://github.com/KUN1007/kun-galgame-vue"
                target="_blank"
                rel="noopener noreferrer"
              >
                答案
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
  height: 100%;
  width: 300px;
  height: 300px;
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
./questionsCN
