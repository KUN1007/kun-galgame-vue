/**
 * 检查用户的各种输入是否合法
 */
import Message from '@/components/alert/Message'
import { isValidEmail, isValidMailConfirmCode } from '@/utils/validate'

// 检查发送邮箱验证码
export const checkSendCode = (email: string) => {
  if (!email) {
    Message('Please input your new email!', '请输入您的新邮箱！', 'warn')
    return false
  }

  if (!isValidEmail(email)) {
    Message(
      'Please input valid email format!',
      '请输入有效的邮箱格式！',
      'warn'
    )
    return false
  }

  return true
}

// 检查重置邮箱
export const checkResetEmail = (
  hasSentCodeEmail: string,
  newEmail: string,
  code: string
) => {
  if (!hasSentCodeEmail) {
    Message(
      'Please send the email verification code first',
      '请先发送邮箱验证码',
      'warn'
    )
    return false
  }

  // 这里只是临时验证一下，验证逻辑在后端
  if (hasSentCodeEmail !== newEmail) {
    Message(
      'The email to which the verification code has been sent is different from the one you want to change.',
      '已经发送验证码的邮箱与要更改的邮箱不相等',
      'warn'
    )
    return false
  }

  if (!code) {
    Message(
      'Email verification code cannot be empty',
      '邮箱验证码不可为空',
      'warn'
    )
  }

  if (!isValidMailConfirmCode(code)) {
    Message(
      'Invalid email verification code format!',
      '非法的邮箱验证码格式！',
      'warn'
    )
    return false
  }
  return true
}
