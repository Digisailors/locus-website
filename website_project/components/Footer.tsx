import { Github, Linkedin, Twitter, Youtube } from 'lucide-react'

const footerLinks = {
  product: [
    { label: 'Platform', href: '#platform' },
    { label: 'Features', href: '#features' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Technology', href: '#technology' },
    { label: 'Pricing', href: '#pricing' },
  ],
  industries: [
    { label: 'Manufacturing', href: '#manufacturing' },
    { label: 'Healthcare', href: '#healthcare' },
    { label: 'Retail', href: '#retail' },
    { label: 'Logistics', href: '#logistics' },
    { label: 'Education', href: '#education' },
  ],
  resources: [
    { label: 'Documentation', href: '#docs' },
    { label: 'API Reference', href: '#api' },
    { label: 'Blog', href: '#blog' },
    { label: 'Case Studies', href: '#cases' },
    { label: 'Support', href: '#support' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Careers', href: '#careers' },
    { label: 'Partners', href: '#partners' },
    { label: 'Contact', href: '#contact' },
    { label: 'Press', href: '#press' },
  ],
}

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-navy py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/images/logo.png" 
                alt="Logo" 
                className="h-10 w-auto"
              />
              <span className="font-display text-xl font-bold text-white">
                Your Brand
              </span>
            </div>
            <p className="text-white/60 text-body mb-6 max-w-sm">
              Transform your buildings into smart spaces with AI-powered spatial intelligence. 
              Trusted by enterprises worldwide.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-cyan transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-display font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-white/60 hover:text-accent-cyan transition-colors text-body-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold mb-4">Industries</h4>
            <ul className="space-y-2">
              {footerLinks.industries.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-white/60 hover:text-accent-cyan transition-colors text-body-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-white/60 hover:text-accent-cyan transition-colors text-body-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-body-sm">
            © {new Date().getFullYear()} Your Brand. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-white/40 hover:text-white text-body-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-white/40 hover:text-white text-body-sm transition-colors">
              Terms of Service
            </a>
            <a href="/cookies" className="text-white/40 hover:text-white text-body-sm transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}