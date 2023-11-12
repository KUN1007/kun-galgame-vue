/* -B means backend, message error code is defined by backend */

const errorMessagesEN: Record<number, string> = {
  10101: `User not found (-B)`,
  10102: `User password error (-B)`,
  10103: `Email verification code error (-B)`,
  10104: `Email is already registered, please change it (-B)`,
  10105: `Username is already registered, please change it (-B)`,
  10106: `User bio is too long (-B)`,
  10107: `Invalid Email, Name, Password, or Verification code (-B)`,

  10201: `Your daily topic limit has been reached for today. (-B)`,
  10202: `Your moemoepoints are less than 1100, so you can't use the topic suggestion feature (-B)`,

  10301: `Sending emails too frequently, please waiting 30s (-B)`,
}

const errorMessagesCN: Record<number, string> = {
  10101: `用户未找到 (-B)`,
  10102: `用户密码错误 (-B)`,
  10103: `邮箱验证码错误 (-B)`,
  10104: `邮箱已被注册，请更改 (-B)`,
  10105: `用户名已被注册，请修改 (-B)`,
  10106: `用户签名过长 (-B)`,
  10107: `非法的邮箱, 用户名, 或密码 (-B)`,

  10201: `您今日可以发表的话题数已达上限 (-B)`,
  10202: `您的萌萌点不足 1100, 无法使用推话题功能 (-B)`,

  10301: `发送邮件频率过快, 请等待 30 秒 (-B)`,
}

export const getErrorMessageEN = (errorCode: number) => {
  return errorMessagesEN[errorCode] || `Unknown server error (-B)`
}

export const getErrorMessageCN = (errorCode: number) => {
  return errorMessagesCN[errorCode] || `未知的服务器错误 (-B)`
}
