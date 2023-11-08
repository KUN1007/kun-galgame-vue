import type { Directive, DirectiveBinding } from 'vue'

interface TooltipBinding {
  message: string
  position: 'top' | 'right' | 'bottom' | 'left'
}

const initializeTooltip = (element: HTMLElement, binding: DirectiveBinding) => {
  const { message, position } = (binding.value as TooltipBinding) || {
    message: '',
    position: 'left',
  }

  element.setAttribute('tooltip', message)
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
