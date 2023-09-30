import { render, h } from 'vue'
import Message from './KUNGalgameMessage.vue'

type MessageType = `warn` | `success` | `error` | `info`

/**
 * @param {string} messageEN - 消息的英文
 * @param {string} messageCN - 消息的中文
 * @param {type} type - 消息的类型，有 `warn` | `success` | `error` | `info` 四种
 * @param {number} duration - 消息的展示时间，可选，默认 3s
 */

export default (
  messageEN: string,
  messageCN: string,
  type: MessageType,
  duration?: number
) => {
  // 初始化的时候先将上一次创建的内容销毁
  render(null, document.body)

  const messageNode = h(Message, {
    messageCN,
    messageEN,
    type,
    duration,
  })

  const time = duration ? duration : 3000

  const handleDestroy = () => {
    // 从 body 上移除组件
    render(null, document.body)
  }

  setTimeout(() => {
    handleDestroy()
  }, time)

  render(messageNode, document.body)
}
