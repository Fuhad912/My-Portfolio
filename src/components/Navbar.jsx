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
  const location = useLocation()
  const isHome = location.pathname === '/'

  const getHref = (anchor) => (isHome ? anchor : `/${anchor}`)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/45 backdrop-blur-xl">
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

      </nav>
    </header>
  )
}
