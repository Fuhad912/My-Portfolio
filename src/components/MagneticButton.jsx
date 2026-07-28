import { useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

export default function MagneticButton({ href, children, className = '', ...rest }) {
  const buttonRef = useRef(null)
  const reduceMotion = useReducedMotion()

  const handlePointerMove = (event) => {
    if (reduceMotion || !buttonRef.current) {
      return
    }

    const rect = buttonRef.current.getBoundingClientRect()
    const x = event.clientX - (rect.left + rect.width / 2)
    const y = event.clientY - (rect.top + rect.height / 2)

    buttonRef.current.style.transform = `translate3d(${x * 0.08}px, ${y * 0.08}px, 0)`
  }

  const resetPosition = () => {
    if (!buttonRef.current) {
      return
    }

    buttonRef.current.style.transform = 'translate3d(0, 0, 0)'
  }

  return (
    <a
      ref={buttonRef}
      href={href}
      className={`btn-primary ${className}`.trim()}
      style={{ willChange: reduceMotion ? 'auto' : 'transform' }}
      onPointerMove={reduceMotion ? undefined : handlePointerMove}
      onPointerLeave={reduceMotion ? undefined : resetPosition}
      onBlur={resetPosition}
      {...rest}
    >
      {children}
    </a>
  )
}
