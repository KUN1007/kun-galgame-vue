import { type Directive, DirectiveBinding } from 'vue'

/* 该插件未启用 */

// 放大 v-html 渲染出来的节点中的图片
export const zoomImagesDirective: Directive = {
  // binding 指的是传给指定的值，这里没有
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const { scale, time } = binding.value || { scale: 1.2, time: 0.3 }

    el.querySelectorAll('img').forEach((img: HTMLImageElement) => {
      img.addEventListener('click', () => {
        img.style.transition = `transform ${time}s ease`
        img.style.transform = img.classList.contains('zoomed')
          ? 'scale(1)'
          : `scale(${scale})`
      })
    })
  },
}
