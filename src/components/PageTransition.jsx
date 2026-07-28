import { motion as Motion, useReducedMotion } from 'framer-motion'

export default function PageTransition({ children }) {
  const reduceMotion = useReducedMotion()

  return (
    <Motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
      exit={reduceMotion ? {} : { opacity: 0, y: -14 }}
      transition={reduceMotion ? undefined : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Motion.div>
  )
}
