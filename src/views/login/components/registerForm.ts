interface RegisterFormItem {
  index: number
  value: string
  type: string
  placeholder: string
  class: string
}

export const registerFormItem: RegisterFormItem[] = [
  {
    index: 1,
    value: 'name',
    type: 'text',
    placeholder: '用户名',
    class: 'input',
  },
  {
    index: 2,
    value: 'email',
    type: 'email',
    placeholder: '邮箱',
    class: 'input',
  },
  {
    index: 3,
    value: 'password',
    type: 'text',
    placeholder: '密码',
    class: 'input',
  },
  {
    index: 4,
    value: 'code',
    type: 'text',
    placeholder: '邮箱验证码',
    class: 'input',
  },
]
