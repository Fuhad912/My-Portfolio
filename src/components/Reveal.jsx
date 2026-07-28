import { motion as Motion, useReducedMotion } from 'framer-motion'

export default function Reveal({ children, className = '', delay = 0 }) {
  const reduceMotion = useReducedMotion()

  return (
    <Motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={reduceMotion ? undefined : { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Motion.div>
  )
}
