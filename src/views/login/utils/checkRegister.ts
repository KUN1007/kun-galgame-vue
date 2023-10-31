import Message from '@/components/alert/Message'
import {
  isValidEmail,
  isValidName,
  isValidPassword,
  isValidMailConfirmCode,
} from '@/utils/validate'
import i18n from '@/language/i18n'

// Check if the form fields are valid
export const checkRegisterForm = (
  name: string,
  email: string,
  password: string
): boolean => {
  if (!name.trim() || !email.trim() || !password.trim()) {
    Message(
      'Username, email, password field cannot be empty!',
      '用户名，邮箱，密码字段不可为空！',
      'warn'
    )
    return false
  }

  if (!isValidName(name)) {
    Message('Invalid username format!', '非法的用户名格式！', 'warn')
    return false
  }

  if (!isValidEmail(email)) {
    Message('Invalid email format!', '非法的邮箱格式！', 'warn')
    return false
  }

  if (!isValidPassword(password)) {
    Message('Invalid password format!', '非法的密码格式！', 'warn')
    return false
  }

  return true
}

// Check if the form fields are valid, on submit register form
export const checkRegisterFormSubmit = (isSendCode: boolean, code: string) => {
  if (!isSendCode) {
    Message(
      'Need to send an email verification code',
      '需要发送邮箱验证码',
      'warn'
    )
    return
  }

  if (!code.trim()) {
    Message(
      'Email verification code cannot be empty',
      '邮箱验证码不可为空',
      'warn'
    )
    return
  }

  if (!isValidMailConfirmCode(code)) {
    Message(
      'Invalid email verification code format!',
      '非法的邮箱验证码格式！',
      'warn'
    )
    return
  }
}
