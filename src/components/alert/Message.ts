import { render, h, ref } from 'vue'
import Message from './KUNGalgameMessage.vue'

type MessageType = `warn` | `success` | `error` | `info`

/**
 * @param {string} messageEN - 消息的英文
 * @param {string} messageCN - 消息的中文
 * @param {type} type - 消息的类型，有 `warn` | `success` | `error` | `info` 四种
 * @param {number} duration - 消息的展示时间，可选，默认 3s
 */

// 消息的计数，在有新消息展示的时候销毁消息会产生错误后果
const messageCount = ref(0)

export default (
  messageEN: string,
  messageCN: string,
  type: MessageType,
  duration?: number
) => {
  // 增加消息计数
  messageCount.value++
  // 先移除上一个组件
  render(null, document.body)

  const messageNode = h(Message, {
    messageCN,
    messageEN,
    type,
    duration,
  })

  const time = duration ? duration : 3000

  // 指定时间后删除消息
  setTimeout(() => {
    // 递减消息计数
    messageCount.value--

    // 消息计数为零时再移除组件
    if (!messageCount.value) {
      // 从 body 上移除组件
      render(null, document.body)
    }
  }, time)

  render(messageNode, document.body)
}
