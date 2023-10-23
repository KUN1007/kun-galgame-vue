// Global message component (top)
import Message from '@/components/alert/Message'
import { getErrorMessageEN, getErrorMessageCN } from './errorI18n'

const showMessage = (errorCode: number) => {
  const messageType = 'error'
  const messageTextEN = getErrorMessageEN(errorCode)
  const messageTextCN = getErrorMessageCN(errorCode)
  Message(messageTextEN, messageTextCN, messageType)
}

/**
 * KUNGalgame known error handling function
 * Error codes coordinated with the backend
 */
export const kungalgameErrorHandler = (errorNumber: number) => {
  showMessage(errorNumber)
}
