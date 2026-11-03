import { memo } from 'react'
import { motion as Motion, useReducedMotion } from 'framer-motion'

function ProjectCardComponent({ project, index = 0, showDetails = true, showLinks = true }) {
  const reduceMotion = useReducedMotion()

  return (
    <Motion.article
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900/40 transition-colors hover:border-neutral-700"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1, margin: '0px 0px -32px 0px' }}
      transition={reduceMotion ? undefined : {
        opacity: { duration: 0.55, delay: Math.min(index * 0.08, 0.24) },
        y: { type: 'spring', stiffness: 260, damping: 28 },
      }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-neutral-800 bg-neutral-900">
        <img
          src={project.image}
          alt={project.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.025]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-semibold tracking-tight text-neutral-100">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-neutral-300">{project.description}</p>

        {showDetails && project.challenge ? (
          <p className="mt-4 text-sm leading-6 text-neutral-400">
            <span className="font-medium text-neutral-200">The problem: </span>
            {project.challenge}
          </p>
        ) : null}

        {showDetails && project.highlights?.length ? (
          <ul className="mt-4 space-y-1.5" aria-label={`${project.title} key features`}>
            {project.highlights.map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm leading-6 text-neutral-300">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color:var(--color-accent)]" />
                {point}
              </li>
            ))}
          </ul>
        ) : null}

        {showDetails && project.tags?.length ? (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.title} tech tags`}>
            {project.tags.map((tag) => (
              <li
                key={`${project.id}-${tag}`}
                className="rounded-md border border-neutral-800 bg-neutral-900/80 px-2.5 py-1 text-xs font-medium text-neutral-300"
              >
                {tag}
              </li>
            ))}
          </ul>
        ) : null}

        {showLinks ? (
          <div className="mt-6 flex flex-wrap gap-2 pt-1">
            {project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-primary !px-4 !py-2">
                Live Demo
              </a>
            ) : null}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary !px-4 !py-2"
              >
                GitHub
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </Motion.article>
  )
}

const ProjectCard = memo(ProjectCardComponent)

export default ProjectCard
