// useSpanEffect.ts
export function applyStyle(element: HTMLElement) {
  const style = `
    position: relative;
    display: inline-block;
    padding: 7px 17px;
    color: $kungalgame-blue-3;
    overflow: hidden;
    border: 2px solid $kungalgame-blue-2;
    filter: hue-rotate(0deg);
    transition: all 0.1s linear;
    cursor: pointer;
  `

  element.setAttribute('style', style)

  element.addEventListener('mouseover', () => {
    element.style.border = '2px solid transparent'
    element.style.color = '$kungalgame-orange-3'
    for (let i = 0; i < 4; i++) {
      const span = document.createElement('span')
      element.appendChild(span)
    }

    element.querySelectorAll('span').forEach((span, index) => {
      span.style.position = 'absolute'
      span.style.display = 'block'

      if (index === 0) {
        span.style.filter = 'hue-rotate(0deg)'
        span.style.top = '0'
        span.style.left = '0'
        span.style.width = '100%'
        span.style.height = '3px'
        span.style.background = `linear-gradient(90deg, transparent, $kungalgame-blue-3)`
        span.style.animation = 'animate1 1s linear infinite'
      } else if (index === 1) {
        span.style.filter = 'hue-rotate(60deg)'
        span.style.top = '-100%'
        span.style.right = '0'
        span.style.width = '3px'
        span.style.height = '100%'
        span.style.background = `linear-gradient(180deg, transparent, $kungalgame-blue-3)`
        span.style.animation = 'animate2 1s linear infinite'
        span.style.animationDelay = '0.25s'
      } else if (index === 2) {
        span.style.filter = 'hue-rotate(120deg)'
        span.style.bottom = '0'
        span.style.right = '0'
        span.style.width = '100%'
        span.style.background = `linear-gradient(270deg, transparent, $kungalgame-blue-3)`
        span.style.animation = 'animate3 1s linear infinite'
        span.style.animationDelay = '0.5s'
      } else if (index === 3) {
        span.style.filter = 'hue-rotate(300deg)'
        span.style.bottom = '-100%'
        span.style.left = '0'
        span.style.width = '3px'
        span.style.height = '100%'
        span.style.background = `linear-gradient(360deg, transparent, $kungalgame-blue-3)`
        span.style.animation = 'animate4 1s linear infinite'
        span.style.animationDelay = '0.75s'
      }
    })
  })

  // Define keyframe animations
  const keyframeStyle = `
    @keyframes animate1 {
      0% {
        left: -100%;
      }
      50%,
      100% {
        left: 100%;
      }
    }

    @keyframes animate2 {
      0% {
        top: -100%;
      }
      50%,
      100% {
        top: 100%;
      }
    }

    @keyframes animate3 {
      0% {
        right: -100%;
        height: 3px;
      }
      50%,
      100% {
        height: 2px;
        right: 100%;
      }
    }

    @keyframes animate4 {
      0% {
        bottom: -100%;
      }
      50%,
      100% {
        bottom: 100%;
      }
    }
  `

  const styleElement = document.createElement('style')
  styleElement.innerHTML = keyframeStyle
  document.head.appendChild(styleElement)
}
