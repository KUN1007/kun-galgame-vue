import type { Directive, DirectiveBinding } from 'vue'

/* This plugin is not enabled */

// Enlarge images in nodes rendered by v-html
export const zoom: Directive = {
  // The binding refers to values passed to the directive; there are none here
  mounted(element: HTMLElement, binding: DirectiveBinding) {
    const { scale, time } = binding.value || { scale: 1.2, time: 0.3 }

    element.querySelectorAll('img').forEach((img: HTMLImageElement) => {
      img.addEventListener('click', () => {
        img.style.transition = `transform ${time}s ease`
        img.style.transform = img.classList.contains('zoomed')
          ? 'scale(1)'
          : `scale(${scale})`
      })
    })
  },
}
