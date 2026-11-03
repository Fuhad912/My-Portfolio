import { useRef, useState } from 'react'
import { motion as Motion, useReducedMotion } from 'framer-motion'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { profile } from '../data/profile'

const navLinkClass = ({ isActive }) =>
  `relative pb-1 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 ${
    isActive
      ? 'text-white after:scale-x-100'
      : 'text-neutral-400 hover:text-white after:scale-x-0 hover:after:scale-x-100'
  } after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:bg-white after:transition-transform`

const sectionLinkClass =
  'relative pb-1 text-sm font-medium text-neutral-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform hover:after:scale-x-100'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const location = useLocation()
  const isHome = location.pathname === '/'

  const getHref = (anchor) => (isHome ? anchor : `/${anchor}`)

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-neutral-950/95"
      onKeyDown={(event) => {
        if (event.key === 'Escape' && menuOpen) {
          setMenuOpen(false)
          menuButtonRef.current?.focus()
        }
      }}
    >
      <nav
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6"
        aria-label="Primary"
      >
        <Link
          to="/"
          className="text-base font-semibold tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
        >
          {profile.name}
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          <a href={getHref('#about')} className={sectionLinkClass}>
            About
          </a>
          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>
          <a href={getHref('#contact')} className={sectionLinkClass}>
            Contact
          </a>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-neutral-700 text-neutral-200 transition-colors hover:border-white hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 md:hidden"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className="relative block h-4 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded-sm bg-current transition-all duration-200 ${
                menuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rounded-sm bg-current transition-opacity duration-150 ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-5 rounded-sm bg-current transition-all duration-200 ${
                menuOpen ? 'bottom-1/2 translate-y-1/2 -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </nav>

      <Motion.div
        id="mobile-menu"
        initial={false}
        animate={menuOpen ? 'open' : 'closed'}
        variants={{
          open: { height: 'auto', opacity: 1, transition: { duration: reduceMotion ? 0 : 0.24, staggerChildren: reduceMotion ? 0 : 0.04 } },
          closed: { height: 0, opacity: 0, transition: { duration: reduceMotion ? 0 : 0.18 } },
        }}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className="overflow-hidden bg-neutral-950 px-4 md:hidden"
      >
        <div className="flex flex-col gap-1 border-t border-neutral-800 py-4">
          {[
            { label: 'Home', to: '/' },
            { label: 'About', href: getHref('#about') },
            { label: 'Projects', to: '/projects' },
            { label: 'Contact', href: getHref('#contact') },
          ].map(({ label, to, href }) => (
            <Motion.div
              key={label}
              variants={{ open: { opacity: 1, y: 0 }, closed: { opacity: 0, y: reduceMotion ? 0 : -6 } }}
              transition={{ duration: reduceMotion ? 0 : 0.2, ease: 'easeOut' }}
            >
              {to ? (
                <NavLink to={to} end={to === '/'} className="block py-2 text-base font-medium text-neutral-100" onClick={() => setMenuOpen(false)}>
                  {label}
                </NavLink>
              ) : (
                <a href={href} className="block py-2 text-base font-medium text-neutral-100" onClick={() => setMenuOpen(false)}>
                  {label}
                </a>
              )}
            </Motion.div>
          ))}
        </div>
      </Motion.div>
    </header>
  )
}
