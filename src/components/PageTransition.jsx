import { motion as Motion, useReducedMotion } from 'framer-motion'

export default function PageTransition({ children }) {
  const reduceMotion = useReducedMotion()

  return (
    <Motion.div
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={reduceMotion ? {} : { opacity: 1 }}
      exit={reduceMotion ? {} : { opacity: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.18, ease: 'easeOut' }}
    >
      {children}
    </Motion.div>
  )
}
