import { defineStore } from 'pinia'

// message store 的类型
import { MessageStore } from '../types/message'

export const useKUNGalgameMessageStore = defineStore({
  id: 'KUNGalgameMessage',
  // 所有消息组件均不需要持久存储
  persist: false,
  state: (): MessageStore => ({
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
