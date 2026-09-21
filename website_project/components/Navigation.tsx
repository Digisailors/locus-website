import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { ChevronDown, Menu, X } from 'lucide-react'
import SolutionsMegaMenu from './SolutionsMegaMenu'
import DiscoverMegaMenu from './DiscoverMegaMenu'
import ResourcesMegaMenu from './ResourcesMegaMenu'
import { byGroup } from '../data/solutions'
import { discover, resourceColumns, resources } from '../data/info'

interface NavigationProps {
  currentPath: string
}

type MenuKey = 'discover' | 'solutions' | 'resources'

type NavLink = { href: string; label: string; menu?: MenuKey }

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/discover', label: 'Discover Spaces', menu: 'discover' },
  { href: '/platform', label: 'Platform' },
  { href: '/solutions', label: 'Solutions', menu: 'solutions' },
  { href: '/resources', label: 'Resources', menu: 'resources' },
  { href: '/industries', label: 'Industries' },
  { href: '/technology', label: 'Technology' },
  { href: '/use-cases', label: 'Use Cases' },
]

type MobileSection = { heading: string; items: { href: string; label: string }[] }

const mobileSections: Record<MenuKey, MobileSection[]> = {
  discover: [{ heading: 'Discover Spaces', items: discover.map((d) => ({ href: `/discover/${d.slug}`, label: d.title })) }],
  solutions: (
    [['Featured', 'featured'], ['By Usecase', 'usecase'], ['By Industry', 'industry'], ['By Teams', 'team']] as const
  ).map(([heading, g]) => ({ heading, items: byGroup(g).map((s) => ({ href: `/solutions/${s.slug}`, label: s.title })) })),
  resources: resourceColumns.map((c) => ({
    heading: c,
    items: resources.filter((r) => r.column === c).map((r) => ({ href: `/resources/${r.slug}`, label: r.title })),
  })),
}

export default function Navigation({ currentPath }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null)
  const [mobileOpen, setMobileOpen] = useState<MenuKey | null>(null)
  const [shown, setShown] = useState<MenuKey | null>(null)
  const [closing, setClosing] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout>>()
  const unmountTimer = useRef<ReturnType<typeof setTimeout>>()
  const router = useRouter()

  const openMega = (key: MenuKey) => { clearTimeout(closeTimer.current); setOpenMenu(key) }
  const scheduleClose = () => { clearTimeout(closeTimer.current); closeTimer.current = setTimeout(() => setOpenMenu(null), 140) }
  const closeAll = () => { setOpenMenu(null); setMobileMenuOpen(false) }

  // Keep the panel mounted while it plays its closing animation
  useEffect(() => {
    clearTimeout(unmountTimer.current)
    if (openMenu) { setShown(openMenu); setClosing(false); return }
    setClosing(true)
    unmountTimer.current = setTimeout(() => { setShown(null); setClosing(false) }, 200)
    return () => clearTimeout(unmountTimer.current)
  }, [openMenu])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpenMenu(null) }
    const onRoute = () => { setOpenMenu(null); setMobileMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    router.events.on('routeChangeStart', onRoute)
    return () => {
      window.removeEventListener('keydown', onKey)
      router.events.off('routeChangeStart', onRoute)
      clearTimeout(closeTimer.current)
    }
  }, [router.events])

  const isActive = (link: NavLink) =>
    link.menu ? currentPath.startsWith(link.href) : currentPath === link.href

  return (
    <nav
      className="site-nav"
      aria-label="Primary navigation"
      onMouseEnter={() => clearTimeout(closeTimer.current)}
      onMouseLeave={scheduleClose}
    >
      <div className="site-nav__inner">
        {/* Logo */}
        <Link href="/" className="site-nav__brand flex items-center gap-3" aria-label="Locus Spatial Intelligence home">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-10 w-auto"
          />
          <span className="font-display text-xl font-bold text-primary-navy">
            Spatial Intelligence
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="site-nav__links hidden md:flex">
          {navLinks.map((link) => {
            if (link.menu) {
              const key = link.menu
              const open = openMenu === key
              return (
                <button
                  key={link.href}
                  type="button"
                  className={`site-nav__link site-nav__trigger ${isActive(link) || open ? 'site-nav__link--active' : ''}`}
                  aria-expanded={open}
                  aria-haspopup="true"
                  onMouseEnter={() => openMega(key)}
                  onFocus={() => openMega(key)}
                  onClick={() => setOpenMenu(open ? null : key)}
                >
                  {link.label}
                  <ChevronDown className={`site-nav__chevron ${open ? 'is-open' : ''}`} size={15} aria-hidden="true" />
                </button>
              )
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={() => setOpenMenu(null)}
                className={`site-nav__link ${isActive(link) ? 'site-nav__link--active' : ''}`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/contact" className="btn btn-primary btn-sm">
            Request Demo
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="site-nav__menu-button md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-primary-navy" />
          ) : (
            <Menu className="w-6 h-6 text-primary-navy" />
          )}
        </button>
      </div>

      {/* Mega menus (desktop) */}
      {shown && (
        <div className="hidden md:block">
          <div className={`mega-backdrop ${closing ? 'is-closing' : ''}`} onClick={() => setOpenMenu(null)} aria-hidden="true" />
          <div className={closing ? 'mega-wrap is-closing' : 'mega-wrap'}>
            {shown === 'discover' && <DiscoverMegaMenu onNavigate={closeAll} />}
            {shown === 'solutions' && <SolutionsMegaMenu onNavigate={closeAll} />}
            {shown === 'resources' && <ResourcesMegaMenu onNavigate={closeAll} />}
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div id="mobile-navigation" className="site-nav__mobile md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              if (link.menu) {
                const key = link.menu
                const open = mobileOpen === key
                return (
                  <div key={link.href}>
                    <button
                      type="button"
                      className="site-nav__link site-nav__trigger w-full justify-between"
                      aria-expanded={open}
                      onClick={() => setMobileOpen(open ? null : key)}
                    >
                      {link.label}
                      <ChevronDown className={`site-nav__chevron ${open ? 'is-open' : ''}`} size={16} aria-hidden="true" />
                    </button>
                    {open && (
                      <div className="mega-mobile">
                        {mobileSections[key].map((section) => (
                          <div key={section.heading}>
                            <p className="mega-mobile__heading">{section.heading}</p>
                            {section.items.map((item) => (
                              <Link key={item.href} href={item.href} className="mega-mobile__link" onClick={closeAll}>
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`site-nav__link ${isActive(link) ? 'site-nav__link--active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              href="/contact"
              className="btn btn-primary mt-2 mx-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Request Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
