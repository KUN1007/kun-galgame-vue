import { defineStore } from 'pinia'

interface Message {
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

export const useKUNGalgameMessageStore = defineStore({
  id: 'message',
  // 所有消息组件均不需要持久存储
  persist: false,
  state: (): Message => ({
    showInfo: false,
    showAlert: false,
    infoMsg: '',
    alertMsg: '',
    isShowCancel: false,
    confirm: false,
    isShowCapture: false,
    isCaptureSuccessful: false,
  }),
  getters: {},
  actions: {
    info(infoMsg: string) {
      this.showInfo = true
      this.infoMsg = infoMsg
    },
    alert(alertMsg: string, isShowCancel: boolean): Promise<boolean> {
      return new Promise<boolean>((resolve) => {
        this.showAlert = true
        this.alertMsg = alertMsg
        this.isShowCancel = isShowCancel

        this.handleClose = () => resolve(false)

        this.handleConfirm = () => resolve(true)
      })
    },
    handleClose() {},
    handleConfirm() {},
  },
})
