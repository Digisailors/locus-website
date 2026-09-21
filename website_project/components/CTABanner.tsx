import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CTABannerProps {
  title: string
  description: string
  buttonText: string
  buttonHref: string
}

export default function CTABanner({ title, description, buttonText, buttonHref }: CTABannerProps) {
  return (
    <section className="py-24 bg-primary-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,153,255,0.5) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-h1 text-white mb-4">
          {title}
        </h2>
        <p className="text-body-lg text-white/70 max-w-2xl mx-auto mb-8">
          {description}
        </p>
        <Link 
          href={buttonHref}
          className="btn btn-primary btn-lg group inline-flex items-center gap-2"
        >
          <span>{buttonText}</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  )
}