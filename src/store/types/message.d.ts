export interface MessageStore {
  // 是否展示通知消息
  showInfo: boolean
  // 是否展示警告消息
  showAlert: boolean
  // 通知消息的内容
  infoMsg: string
  // 警告消息的内容
  alertMsg: string
  // 是否展示取消按钮，Alert 组件专用
  isShowCancel: boolean
  // 返回确认信息，Alert 组件专用
  confirm: boolean

  // 人机验证组件
  // 是否显示人机验证
  isShowCapture: boolean
  // 是否验证通过
  isCaptureSuccessful: boolean
}
