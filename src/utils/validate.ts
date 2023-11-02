// Regular expression to match a valid URL
export const isValidURL = (url: string) => {
  const regex =
    /^(https?|http):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|net|org|biz|moe|info|name|pro|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return regex.test(url)
}

// Regular expression to match a valid email
export const isValidEmail = (email: string) => {
  const regex = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{1,24}$/
  return regex.test(email)
}

// Match a username of 1 to 17 characters containing Chinese, English, Japanese, numbers, underscores, or tildes
export const isValidName = (name: string) => {
  const regex =
    /^[\u4E00-\u9FFFa-zA-Z0-9_~\u3040-\u30FF\u31F0-\u31FF\u3200-\u33FF\u3400-\u4DBF\u20000-\x2A6DF\x2A700-\x2B73F\x2B740-\x2B81F\x2B820-\x2CEAF\xF900-\xFAFF]{1,17}$/
  return regex.test(name)
}

// Regular expression to match a password of 6 to 107 characters, containing at least one letter and one number, and optionally including special characters \w!@#$%^&*()-+=
export const isValidPassword = (pwd: string) => {
  const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])[\w!@#$%^&*()-+=]{6,107}$/
  return regex.test(pwd)
}

// Regular expression to match a 7-character alphanumeric email confirmation code
export const isValidMailConfirmCode = (code: string) => {
  const regex = /^[a-zA-Z0-9]{7}$/
  return regex.test(code)
}
