/**
 * 检查用户的输入是否合法
 */
import Message from '@/components/alert/Message'
import {
  isValidEmail,
  isValidMailConfirmCode,
  isValidPassword,
} from '@/utils/validate'

// 检查邮箱
export const checkEmail = (email: string) => {
  if (!email.trim()) {
    Message('Email can not be empty!', '邮箱不能为空', 'warn')
    return false
  }

  if (email.trim().length > 100) {
    Message('The email length exceeds the limit!', '邮箱长度超出限制', 'warn')
    return false
  }

  if (!isValidEmail(email)) {
    Message('Email format is invalid!', '邮箱格式非法', 'warn')
    return false
  }

  return true
}

// 检查验证码
export const checkCode = (email: string, code: string) => {
  if (!checkEmail(email)) {
    return false
  }

  if (!isValidMailConfirmCode(code)) {
    Message('Verification code format is invalid!', '验证码格式非法', 'warn')
    return false
  }

  return true
}

// 检查密码
export const checkPassword = (newPassword: string, confirmPassword: string) => {
  if (!newPassword) {
    Message('New password cannot be empty!', '新密码不可为空！', 'warn')
    return false
  }
  if (!confirmPassword) {
    Message('Please input new password again!', '请再次输入新密码！', 'warn')
    return false
  }

  if (newPassword !== confirmPassword) {
    Message(
      'The two password entries do not match!',
      '两次输入密码不一致!',
      'warn'
    )
    return false
  }

  if (!isValidPassword(confirmPassword) || !isValidPassword(newPassword)) {
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
