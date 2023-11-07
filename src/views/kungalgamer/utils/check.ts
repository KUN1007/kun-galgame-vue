/**
 * Check if the user's various inputs are valid
 */
import Message from '@/components/alert/Message'
import {
  isValidEmail,
  isValidMailConfirmCode,
  isValidPassword,
} from '@/utils/validate'

// Check for sending email verification code
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

// Check for resetting email
export const checkResetEmail = (
  hasSentCodeEmail: string,
  newEmail: string,
  code: string
) => {
  if (!hasSentCodeEmail) {
    Message(
      'Please send the email verification code first!',
      '请先发送邮箱验证码！',
      'warn'
    )
    return false
  }

  // Temporary validation here, actual validation is on the backend
  if (hasSentCodeEmail !== newEmail) {
    Message(
      'The email to which the verification code has been sent is different from the one you want to change.',
      '已经发送验证码的邮箱与要更改的邮箱不相等！',
      'warn'
    )
    return false
  }

  if (!code) {
    Message(
      'Email verification code cannot be empty!',
      '邮箱验证码不可为空！',
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

// Check for changing the password
export const checkChangePassword = (
  oldPassword: string,
  newPassword: string,
  repeatPassword: string
) => {
  if (!oldPassword) {
    Message('Old password cannot be empty!', '旧密码不可为空！', 'warn')
    return false
  }
  if (!newPassword) {
    Message('New password cannot be empty!', '新密码不可为空！', 'warn')
    return false
  }
  if (!repeatPassword) {
    Message('Please input new password again!', '请再次输入新密码！', 'warn')
    return false
  }

  if (newPassword !== repeatPassword) {
    Message(
      'The two password entries do not match',
      '两次输入密码不一致',
      'warn'
    )
    return false
  }

  if (!isValidPassword(oldPassword) || !isValidPassword(newPassword)) {
    Message(
      'Invalid password format.\nPassword must be 6 to 17 characters long and must include at least one letter and one number.\nIt can optionally include special characters such as \\w!@#$%^&()-+=',
      '非法的密码格式，密码的长度为 6 到 17 位，必须包含至少一个英文字符和一个数字，可以选择性的包含 \\w!@#$%^&*()-+= 等特殊字符',
      'warn',
      5000
    )
    return false
  }
  return true
}
