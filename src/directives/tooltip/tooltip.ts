import type { Directive, DirectiveBinding } from 'vue'
import { KUNGalgameLanguage } from '@/utils/getDefaultEnv'

interface TooltipBinding {
  message: {
    en: string
    zh: string
  }
  position: 'top' | 'right' | 'bottom' | 'left'
}

const initializeTooltip = (element: HTMLElement, binding: DirectiveBinding) => {
  const { message, position } = (binding.value as TooltipBinding) || {
    message: '',
    position: 'left',
  }

  const messageI18n = KUNGalgameLanguage === 'en' ? message.en : message.zh

  element.setAttribute('tooltip', messageI18n)
  element.setAttribute('position', position)
}

/* This plugin is enabled */
export const tooltip: Directive = {
  mounted(element: HTMLElement, binding: DirectiveBinding) {
    initializeTooltip(element, binding)
  },

  updated(element: HTMLElement, binding: DirectiveBinding) {
    initializeTooltip(element, binding)
  },
}
