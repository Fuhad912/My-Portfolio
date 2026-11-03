import { NavLink, useLocation } from 'react-router-dom'
import { motion as Motion, useReducedMotion } from 'framer-motion'

const ICONS = {
  home: (
    <path
      d="M4 11.5 12 4l8 7.5M6 9.5V20h12V9.5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  about: (
    <>
      <circle cx="12" cy="8" r="3.4" fill="none" stroke="currentColor" strokeWidth={1.8} />
      <path
        d="M5 20c0-3.6 3.1-6.2 7-6.2s7 2.6 7 6.2"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
      />
    </>
  ),
  projects: (
    <path
      d="M4 7.2c0-.9.7-1.6 1.6-1.6h4l1.6 2h7.2c.9 0 1.6.7 1.6 1.6v8.2c0 .9-.7 1.6-1.6 1.6H5.6C4.7 19 4 18.3 4 17.4V7.2Z"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinejoin="round"
    />
  ),
  contact: (
    <path
      d="M4.5 6.5h15a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1Zm0 0 7.5 6 7.5-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
}

const TABS = [
  { key: 'home', label: 'Home', to: '/', end: true, kind: 'route' },
  { key: 'about', label: 'About', to: '#about', kind: 'anchor' },
  { key: 'projects', label: 'Work', to: '/projects', end: false, kind: 'route' },
  { key: 'contact', label: 'Contact', to: '#contact', kind: 'anchor' },
]

export default function MobileTabBar() {
  const location = useLocation()
  const reduceMotion = useReducedMotion()
  const isHome = location.pathname === '/'

  const isTabActive = (tab) => {
    if (tab.kind === 'route') {
      return tab.end ? location.pathname === '/' : location.pathname.startsWith('/projects')
    }
    return false
  }

  const getHref = (tab) => (isHome ? tab.to : `/${tab.to}`)

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-[max(0.9rem,env(safe-area-inset-bottom))] md:hidden"
    >
      <div className="relative flex items-center gap-0.5 rounded-full border border-white/15 bg-gradient-to-b from-neutral-800 to-neutral-950 p-1.5 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.55)]">
        {/* Static highlight keeps the depth without filtering scrolling content. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
        />

        {TABS.map((tab) => {
          const active = isTabActive(tab)
          const content = (
            <>
              {active ? (
                <Motion.span
                  layoutId={reduceMotion ? undefined : 'mobile-tab-pill'}
                  className="absolute inset-0 rounded-full bg-white/15"
                  transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                />
              ) : null}
              <span className="relative z-10 flex flex-col items-center gap-0.5">
                <svg
                  viewBox="0 0 24 24"
                  className={`h-5 w-5 transition-colors ${active ? 'text-white' : 'text-neutral-400'}`}
                  aria-hidden="true"
                >
                  {ICONS[tab.key]}
                </svg>
                <span
                  className={`text-[10px] font-medium leading-none transition-colors ${
                    active ? 'text-white' : 'text-neutral-400'
                  }`}
                >
                  {tab.label}
                </span>
              </span>
            </>
          )

          const itemClass =
            'relative flex h-14 w-16 flex-col items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950'

          if (tab.kind === 'route') {
            return (
              <NavLink key={tab.key} to={tab.to} end={tab.end} className={itemClass} aria-label={tab.label}>
                {content}
              </NavLink>
            )
          }

          return (
            <a key={tab.key} href={getHref(tab)} className={itemClass} aria-label={tab.label}>
              {content}
            </a>
          )
        })}
      </div>
    </nav>
  )
}
