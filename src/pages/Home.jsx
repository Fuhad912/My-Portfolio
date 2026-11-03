import { Link } from 'react-router-dom'
import { motion as Motion, useReducedMotion } from 'framer-motion'
import MagneticButton from '../components/MagneticButton'
import FaqItem from '../components/FaqItem'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { faqs, focusAreas, profile } from '../data/profile'
import { featuredProjectIds, projects } from '../data/projects'
import cvUrl from '../../Bello-Fuhad-CV.pdf?url'

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
        transition: { staggerChildren: 0.15, delayChildren: 0.18 },
      },
    }

  const heroItem = reduceMotion
    ? undefined
    : {
      hidden: { opacity: 0, y: 28 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
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
            <Motion.h1
              variants={heroItem}
              className="text-4xl font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              {profile.heroKicker}{' '}
              <span className="relative inline-block pb-2 text-accent">
                {profile.preferredName}.
                <Motion.span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-accent"
                  initial={reduceMotion ? false : { scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
              </span>
            </Motion.h1>

            <Motion.p
              variants={heroItem}
              className="mt-6 text-2xl font-medium leading-snug tracking-tight text-neutral-200 sm:text-3xl"
            >
              {profile.headline}
            </Motion.p>

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
              <a href={cvUrl} download="Bello-Fuhad-CV.pdf" className="btn-secondary gap-2 w-full sm:w-auto">
                <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3v12m-4-4 4 4 4-4M5 16v4h14v-4" />
                </svg>
                Download CV
                <span className="text-[10px] font-medium tracking-wide text-neutral-400">PDF</span>
              </a>
              <Link to="/projects" className="btn-secondary gap-2 w-full sm:w-auto">
                View all projects
                <span aria-hidden="true">&rarr;</span>
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

      {/* 04 FAQ SECTION */}
      <section id="faq" className="py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="04 // FAQ"
              title="Frequently Asked Questions"
              description="Clear answers regarding availability, technical stack, and collaboration."
            />
          </Reveal>

          <div className="mt-8 space-y-3 sm:mt-10">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 0.03}>
                <FaqItem question={faq.question} answer={faq.answer} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
