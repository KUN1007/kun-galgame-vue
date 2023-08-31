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
}

export const useKUNGalgameMessageStore = defineStore({
  id: 'message',
  persist: false,
  state: (): Message => ({
    showInfo: false,
    showAlert: false,
    infoMsg: '',
    alertMsg: '',
    isShowCancel: false,
    confirm: false,
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
