const errorMessagesEN: Record<number, string> = {
  10101: 'User not found',
  10102: 'User password error',
  10103: 'Email verification code error',
  10104: 'Email is already registered, please change it',
  10105: 'Username is already registered, please change it',

  10201: 'Your daily topic limit has been reached for today.',
  10202: `Your moemoepoints are less than 1100, so you can't use the topic suggestion feature`,
}

const errorMessagesCN: Record<number, string> = {
  10101: '用户未找到',
  10102: '用户密码错误',
  10103: '邮箱验证码错误',
  10104: '邮箱已被注册，请更改',
  10105: '用户名已被注册，请修改',

  10201: '您今日可以发表的话题数已达上限',
  10202: '您的萌萌点不足 1100, 无法使用推话题功能',
}

export const getErrorMessageEN = (errorCode: number) => {
  return errorMessagesEN[errorCode] || 'Unknown server error'
}

export const getErrorMessageCN = (errorCode: number) => {
  return errorMessagesCN[errorCode] || '未知的服务器错误'
}
