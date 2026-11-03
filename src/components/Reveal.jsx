import { motion as Motion, useReducedMotion } from 'framer-motion'

export default function Reveal({ children, className = '', delay = 0 }) {
  const reduceMotion = useReducedMotion()

  return (
    <Motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1, margin: '0px 0px -32px 0px' }}
      transition={reduceMotion ? undefined : { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: Math.min(delay, 0.2) }}
    >
      {children}
    </Motion.div>
  )
}
