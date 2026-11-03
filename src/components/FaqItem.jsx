import { useId, useState } from 'react'
import { motion as Motion, useReducedMotion } from 'framer-motion'

export default function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  const id = useId()
  const reduceMotion = useReducedMotion()

  return (
    <div className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-5">
      <h3>
        <button
          id={`${id}-question`}
          type="button"
          aria-expanded={open}
          aria-controls={`${id}-answer`}
          onClick={() => setOpen((current) => !current)}
          className="flex w-full cursor-pointer items-center justify-between gap-4 text-left text-base font-semibold text-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
        >
          {question}
          <Motion.span
            aria-hidden="true"
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            className="shrink-0 text-xl font-normal text-accent"
          >
            +
          </Motion.span>
        </button>
      </h3>
      <Motion.div
        id={`${id}-answer`}
        role="region"
        aria-labelledby={`${id}-question`}
        aria-hidden={!open}
        inert={!open}
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <p className="pt-3 text-sm leading-6 text-neutral-300">{answer}</p>
      </Motion.div>
    </div>
  )
}
