import { render, h } from 'vue'
import Message from './KUNGalgameMessage.vue'

export default (
  message: string,
  type: string,
  duration: number
) => {
  const messageNode = h(Message, {
    message,
    type,
    duration,
  })

  const handleDestroy = () => {
    // 从 body 上移除组件
    render(null, document.body)
  }

  setTimeout(() => {
    handleDestroy()
  }, duration)

  render(messageNode, document.body)
}
