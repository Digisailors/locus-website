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
    <nav className="bg-white border-b border-border-default py-4 px-8 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
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
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = currentPath === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive 
                    ? 'bg-accent-cyan/10 text-accent-cyan' 
                    : 'text-charcoal-grey hover:text-primary-navy hover:bg-surface-neutral'
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
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
        <div className="md:hidden mt-4 pb-4 border-t border-border-default pt-4">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = currentPath === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive 
                      ? 'bg-accent-cyan/10 text-accent-cyan' 
                      : 'text-charcoal-grey hover:text-primary-navy hover:bg-surface-neutral'
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