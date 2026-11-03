import { useMemo, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { projects } from '../data/projects'

const GROUP_ORDER = ['Products', 'Client Work', 'Experiments']
const GROUP_DESCRIPTIONS = {
  Products: 'Self-directed products I own end to end, built and run past launch.',
  'Client Work': 'Sites and systems built for real clients, shipped to their spec.',
  Experiments: 'Smaller builds used to practice a specific technique or idea.',
}

export default function Projects() {
  const [query, setQuery] = useState('')
  const [activeTag, setActiveTag] = useState('All')

  const tags = useMemo(() => {
    const uniqueTags = new Set(projects.flatMap((project) => project.tags))
    return ['All', ...Array.from(uniqueTags).sort((a, b) => a.localeCompare(b))]
  }, [])

  const filteredProjects = useMemo(() => {
    const trimmedQuery = query.trim().toLowerCase()

    return projects.filter((project) => {
      const matchesTag = activeTag === 'All' || project.tags.includes(activeTag)
      const matchesQuery =
        trimmedQuery.length === 0 ||
        [project.title, project.description, project.tags.join(' ')]
          .join(' ')
          .toLowerCase()
          .includes(trimmedQuery)

      return matchesTag && matchesQuery
    })
  }, [activeTag, query])

  const groupedProjects = useMemo(() => {
    return GROUP_ORDER.map((group) => ({
      group,
      items: filteredProjects.filter((project) => project.group === group),
    })).filter((section) => section.items.length > 0)
  }, [filteredProjects])

  return (
    <>
      <section className="border-b border-neutral-800 py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Work"
              title="All projects"
              description={`${projects.length} projects spanning product engineering, real-time systems, and applied AI. Search or filter by stack.`}
            />
          </Reveal>

          <Reveal delay={0.1} className="mt-8">
            <label htmlFor="project-search" className="mb-2 block text-sm font-medium text-neutral-200">
              Search projects
            </label>
            <input
              id="project-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by title, description, or tech..."
              className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-4 py-2.5 text-sm text-neutral-100 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring-1 focus:ring-neutral-200"
            />
          </Reveal>

          <Reveal delay={0.15} className="mt-5">
            <p className="mb-2 text-sm font-medium text-neutral-200">Filter by tag</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => {
                const isActive = activeTag === tag
                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setActiveTag(tag)}
                    className={`rounded-md border px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 ${
                      isActive
                        ? 'border-white bg-white text-black'
                        : 'border-neutral-800 bg-neutral-900 text-neutral-300 hover:border-neutral-600 hover:text-white'
                    }`}
                  >
                    {tag}
                  </button>
                )
              })}
            </div>
          </Reveal>

          <p className="mt-5 text-sm text-neutral-400">
            Showing {filteredProjects.length} of {projects.length} projects
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          {groupedProjects.length === 0 ? (
            <p className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-6 text-sm text-neutral-300">
              No projects match your current filters. Try another search term or tag.
            </p>
          ) : (
            <div className="space-y-14">
              {groupedProjects.map(({ group, items }) => (
                <div key={group}>
                  <div className="mb-6 flex items-baseline justify-between gap-4 border-b border-neutral-800 pb-3">
                    <h2 className="text-lg font-semibold tracking-tight text-neutral-100">{group}</h2>
                    <span className="text-xs text-neutral-500">{items.length} project{items.length === 1 ? '' : 's'}</span>
                  </div>
                  <p className="mb-6 -mt-3 text-sm text-neutral-400">{GROUP_DESCRIPTIONS[group]}</p>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((project, index) => (
                      <ProjectCard key={project.id} project={project} index={index} showDetails showLinks />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
