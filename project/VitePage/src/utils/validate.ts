// 正则表达式匹配合法 URL
export const isValidURL = (url: string) => {
  const regex =
    /^(https?|http):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return regex.test(url)
}

// 正则表达式匹配合法邮箱
export const isValidEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

// 匹配 1 到 17 位数 中文、英文、数字、下划线、~ 的用户名
export const isValidName = (name: string) => {
  const regex = /^[\u4E00-\u9FFFa-zA-Z0-9_~]{1,17}$/
  return regex.test(name)
}

// 正则表达式匹配 6 到 17 位数的密码，必须包含至少一个英文字符和一个数字，可以选择性的包含 \w!@#$%^&*()-+= 特殊字符
export const isValidPassword = (pwd: string) => {
  const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])[\w!@#$%^&*()-+=]{6,17}$/
  return regex.test(pwd)
}

// 正则表达式匹配 7 位英文或数字，邮箱验证码
export const isValidMailConfirmCode = (code: string) => {
  const regex = /^[a-zA-Z0-9]{7}$/
  return regex.test(code)
}
