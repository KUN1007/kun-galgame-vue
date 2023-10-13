// 全局消息组件（顶部）
import Message from '@/components/alert/Message'
import { getErrorMessageEN, getErrorMessageCN } from './errorI18n'

const showMessage = (errorCode: number) => {
  const messageType = 'error'
  const messageTextEN = getErrorMessageEN(errorCode)
  const messageTextCN = getErrorMessageCN(errorCode)
  Message(messageTextEN, messageTextCN, messageType)
}

/**
 * KUNGalgame 已知错误处理函数，错误代码与后端协同
 */
export const kungalgameErrorHandler = (errorNumber: number) => {
  showMessage(errorNumber)
}
