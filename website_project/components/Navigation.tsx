import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

interface NavigationProps {
  currentPath: string
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/platform', label: 'Platform' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/industries', label: 'Industries' },
  { href: '/technology', label: 'Technology' },
  { href: '/use-cases', label: 'Use Cases' },
]

export default function Navigation({ currentPath }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="site-nav" aria-label="Primary navigation">
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
            const isActive = currentPath === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`site-nav__link ${
                  isActive 
                    ? 'site-nav__link--active'
                    : ''
                }`}
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div id="mobile-navigation" className="site-nav__mobile md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = currentPath === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`site-nav__link ${
                    isActive 
                      ? 'site-nav__link--active'
                      : ''
                  }`}
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
