import { Link } from 'react-router-dom'
import { motion as Motion, useReducedMotion } from 'framer-motion'
import MagneticButton from '../components/MagneticButton'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { faqs, focusAreas, profile, testimonials, testimonialsNote } from '../data/profile'
import { featuredProjectIds, projects } from '../data/projects'

const featuredProjects = featuredProjectIds
  .map((id) => projects.find((project) => project.id === id))
  .filter(Boolean)

export default function Home() {
  const reduceMotion = useReducedMotion()

  const heroContainer = reduceMotion
    ? undefined
    : {
      hidden: { opacity: 1 },
      show: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.05 },
      },
    }

  const heroItem = reduceMotion
    ? undefined
    : {
      hidden: { opacity: 0, y: 16 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      },
    }

  return (
    <>
      {/* HERO SECTION */}
      <section id="hero" className="overflow-hidden border-b border-neutral-800">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <Motion.div
            variants={heroContainer}
            initial={reduceMotion ? false : 'hidden'}
            animate={reduceMotion ? undefined : 'show'}
            className="order-2 max-w-2xl lg:order-1"
          >
            <Motion.p variants={heroItem} className="eyebrow">
              {profile.heroKicker}
            </Motion.p>

            <Motion.h1
              variants={heroItem}
              className="mt-4 text-3xl font-semibold tracking-tight text-neutral-100 sm:text-5xl lg:text-6xl"
            >
              {profile.headline}
            </Motion.h1>

            <Motion.p variants={heroItem} className="mt-5 text-base leading-7 text-neutral-300 sm:text-lg">
              {profile.heroSubtitle}
            </Motion.p>

            <Motion.p variants={heroItem} className="mt-4 text-sm text-neutral-400 sm:text-base">
              {profile.role} · {profile.affiliation}
            </Motion.p>

            <Motion.div variants={heroItem} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <MagneticButton href="#contact" className="w-full sm:w-auto">
                Get in touch
              </MagneticButton>
              <Link to="/projects" className="btn-secondary w-full sm:w-auto">
                View all projects
              </Link>
            </Motion.div>

            {profile.stats?.length ? (
              <Motion.dl
                variants={heroItem}
                className="mt-10 grid grid-cols-3 gap-4 border-t border-neutral-800 pt-6 sm:gap-8"
              >
                {profile.stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="text-[11px] uppercase leading-tight tracking-wide text-neutral-500 sm:text-xs">
                      {stat.label}
                    </dt>
                    <dd className="mt-1 text-xl font-semibold text-neutral-100 sm:text-2xl">{stat.value}</dd>
                  </div>
                ))}
              </Motion.dl>
            ) : null}
          </Motion.div>

          <Motion.figure
            initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="hero-glow relative order-1 w-full justify-self-center lg:order-2 lg:justify-self-end"
          >
            <div className="mx-auto h-[160px] w-[160px] overflow-hidden rounded-xl border border-neutral-700 bg-neutral-900 p-2 shadow-[0_24px_54px_-32px_rgba(124,140,255,0.35)] sm:h-[210px] sm:w-[210px]">
              <img
                src={profile.avatar.src}
                alt={profile.avatar.alt}
                loading="eager"
                decoding="async"
                className="h-full w-full rounded-lg object-cover"
              />
            </div>

            <Motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
              className="mt-5 text-center"
            >
              <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                Fuhad Bello
              </h2>
              <Motion.p
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.75 }}
                className="mt-2 text-sm leading-relaxed text-neutral-400"
              >
                <span className="text-neutral-200">Computer Science Student</span>
                <span className="mx-1.5 text-neutral-600">|</span>
                <span className="text-neutral-200">Founder, ThinkRight</span>
              </Motion.p>
            </Motion.div>
          </Motion.figure>
        </div>
      </section>

      {/* 01 ABOUT SECTION */}
      <section id="about" className="border-b border-neutral-800 py-14 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow="01 // ABOUT ME" title="Background & Engineering Philosophy" />
          </Reveal>

          <Reveal delay={0.08} className="space-y-4">
            {profile.about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-7 text-neutral-300">
                {paragraph}
              </p>
            ))}

            {profile.currentlyFocusedOn?.length ? (
              <div className="mt-6 border-t border-neutral-800 pt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">Currently Focused On</p>
                <ul className="space-y-2">
                  {profile.currentlyFocusedOn.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-6 text-neutral-300">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-accent)]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </Reveal>
        </div>
      </section>

      {/* 02 FOCUS & SKILLS SECTION */}
      <section id="focus" className="border-b border-neutral-800 py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="02 // TECHNICAL FOCUS"
              title="Core Engineering Focus Areas"
              description="Key technical domains I continuously refine across backend, frontend, and product architecture."
            />
          </Reveal>
          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area, index) => (
              <Reveal
                key={area.title}
                delay={index * 0.04}
                className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-5 sm:p-6"
              >
                <h3 className="text-lg font-semibold tracking-tight text-neutral-100">{area.title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-300">{area.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 03 SELECTED PROJECTS SECTION */}
      <section id="projects" className="border-b border-neutral-800 py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="03 // FEATURED WORK"
              title="Selected Projects & Systems"
              description={`${featuredProjects.length} featured products built for real users, exam platforms, and real-time social applications.`}
            />
          </Reveal>

          <div className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} showDetails={false} showLinks />
            ))}
          </div>

          <Reveal className="mt-10 flex justify-start sm:mt-12">
            <Link to="/projects" className="btn-primary w-full sm:w-auto">
              View all projects
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 04 TESTIMONIALS SECTION */}
      <section id="testimonials" className="border-b border-neutral-800 py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="04 // RECOMMENDATIONS"
              title="Client & Collaborator Feedback"
              description="Notes reflecting the kind of results these projects delivered."
            />
          </Reveal>
          <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal
                key={item.name}
                delay={index * 0.05}
                className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-5 sm:p-6"
              >
                <p className="text-sm leading-6 text-neutral-300">&quot;{item.quote}&quot;</p>
                <div className="mt-5 border-t border-neutral-800 pt-4">
                  <p className="text-sm font-semibold text-neutral-100">{item.name}</p>
                  <p className="mt-0.5 text-xs text-neutral-500">{item.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15} className="mt-6">
            <p className="text-xs leading-5 text-neutral-500">{testimonialsNote}</p>
          </Reveal>
        </div>
      </section>

      {/* 05 FAQ SECTION */}
      <section id="faq" className="py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="05 // FAQ"
              title="Frequently Asked Questions"
              description="Clear answers regarding availability, technical stack, and collaboration."
            />
          </Reveal>

          <div className="mt-8 space-y-3 sm:mt-10">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 0.03}>
                <details className="group rounded-lg border border-neutral-800 bg-neutral-900/40 p-5">
                  <summary className="list-none cursor-pointer pr-8 text-base font-semibold text-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-neutral-300">{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
