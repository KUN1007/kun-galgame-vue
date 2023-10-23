<script setup lang="ts">
import { ref, computed } from 'vue'
// Global message component (top)
import Message from '@/components/alert/Message'

// Import the router
import { useRoute, useRouter } from 'vue-router'

// Import the icon font
import { Icon } from '@iconify/vue'

// Import CSS animations
import 'animate.css'

const router = useRouter()
// Current route
const route = useRoute()
// Name of the current page route
const routeName = computed(() => route.name as string)

// Adjust the background color based on the mouse coordinates
const x = ref(0)
// Whether to display information prompts
const isShowInfo = ref(false)

// When the mouse moves
const onMousemove = (e: MouseEvent) => {
  x.value = e.clientX
}

// Click the help button
const handleClickHelp = () => {
  if (routeName.value === 'Edit') {
    isShowInfo.value = true
  } else {
    const helpHtmlEN = `<p>You can click on the left settings to adjust the editor's mode.</p>
    <p>We recommend finishing your text before formatting.</p>
    <p>The website's code is handwritten, and errors are inevitable.</p>
    <p>If you encounter any errors, please <a style="color: var(--kungalgame-blue-4); border-bottom: 2px solid var(--kungalgame-blue-4);" href="/contact">Contact Us</a>.</p>`
    const helpHtmlCN = `<p>您可以点击左侧的设置调整编辑器的模式</p>
    <p>我们建议您写完文本再进行格式化</p>
    <p>网站的代码是手写的，错误在所难免</p>
    <p>如果您遇到错误，请<a style="color: var(--kungalgame-blue-4); border-bottom: 2px solid var(--kungalgame-blue-4);" href="/contact">联系我们</a></p>`

    Message(helpHtmlEN, helpHtmlCN, 'info', 5000)
  }
}
</script>

<template>
  <div class="help">
    <div class="title" @click="handleClickHelp">
      <span><Icon icon="line-md:question-circle" /></span>
    </div>
    <div
      v-if="isShowInfo"
      @mousemove="onMousemove"
      @mouseleave="isShowInfo = false"
      class="info"
      :style="{ backgroundColor: `hsl(${x}, 77%, 77%)` }"
    >
      <ul>
        <li>{{ $tm('edit.help1') }}</li>
        <li>{{ $tm('edit.help2') }}</li>
        <li>{{ $tm('edit.help3') }}</li>
        <li>{{ $tm('edit.help4') }}</li>
        <li>
          {{ $tm('edit.help5') }}
          <span @click="router.push('/contact')">
            {{ $tm('edit.contact') }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.help {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title {
  cursor: pointer;
  margin-left: 20px;
  color: var(--kungalgame-font-color-1);
  font-size: 23px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    display: flex;
  }
}
.info {
  padding: 3px;
  color: var(--kungalgame-font-color-2);
  position: absolute;
  left: 200px;
  transition: 0.3s background-color ease;
  border-radius: 5px;
  margin-bottom: 100px;

  ul {
    display: flex;
    flex-direction: column;
    background-color: var(--kungalgame-white);
    padding: 5px;
    border-radius: 5px;

    li {
      &::before {
        content: '❆ ';
        color: var(--kungalgame-pink-3);
      }

      cursor: default;
      font-size: 15px;
      line-height: 27px;

      span {
        cursor: pointer;
        color: var(--kungalgame-blue-4);

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
