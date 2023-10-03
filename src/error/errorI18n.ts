const errorMessagesEN: Record<number, string> = {
  10101: 'User not found',
  10102: 'User password error',
  10103: 'Email verification code error',
  10104: 'Email is already registered, please change it',
  10105: 'Username is already registered, please change it',
}

const errorMessagesCN: Record<number, string> = {
  10101: '用户未找到',
  10102: '用户密码错误',
  10103: '邮箱验证码错误',
  10104: '邮箱已被注册，请更改',
  10105: '用户名已被注册，请修改',
}

export const getErrorMessageEN = (errorCode: number) => {
  return errorMessagesEN[errorCode] || 'Unknown server error'
}

export const getErrorMessageCN = (errorCode: number) => {
  return errorMessagesCN[errorCode] || '未知的服务器错误'
}
