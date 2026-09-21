import { useState, useEffect } from 'react'
import { ArrowRight, Play, MapPin, Layers, Activity } from 'lucide-react'
import SpatialCanvas from './SpatialCanvas'

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showDemo, setShowDemo] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="locus-hero relative min-h-screen bg-surface-neutral overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <SpatialCanvas />
      </div>

      {/* Gradient Overlay */}
      <div className="locus-hero__overlay absolute inset-0 bg-gradient-to-b from-surface-neutral/80 via-surface-neutral/60 to-surface-neutral z-10" />

      {/* Hero Content */}
      <div className="locus-hero__content relative z-20 px-8 pt-20 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="locus-hero__grid grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="locus-hero__copy space-y-8 transition-all duration-1000">
              {/* Eyebrow */}
              <div className="locus-hero__eyebrow inline-flex items-center gap-2 px-4 py-2 bg-accent-cyan/10 rounded-full">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                <span className="text-caption text-accent-cyan font-medium uppercase tracking-wider">
                  Spatial Intelligence Platform
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-display-1 text-primary-navy leading-tight">
                Turn Your Buildings{' '}
                <span className="text-accent-cyan">Into Smart Spaces</span>
              </h1>

              {/* Subheadline */}
              <p className="text-body-lg text-charcoal-grey max-w-xl">
                Our cloud engine transforms your infrastructure into a smart sensor network. 
                Real-time positioning, 3D mapping, and location analytics powered by AI.
              </p>

              {/* Stats */}
              <div className="locus-hero__stats grid grid-cols-3 gap-6 pt-4">
                <div className="text-center">
                  <div className="text-h2 text-primary-navy font-display font-bold">99.9%</div>
                  <div className="text-body-sm text-charcoal-grey">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-h2 text-primary-navy font-display font-bold">40%</div>
                  <div className="text-body-sm text-charcoal-grey">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-h2 text-primary-navy font-display font-bold">50cm</div>
                  <div className="text-body-sm text-charcoal-grey">Precision</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="btn btn-primary btn-lg group">
                  <span>Request Demo</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => setShowDemo(true)}
                  className="btn btn-secondary btn-lg gap-2"
                >
                  <Play className="w-5 h-5" />
                  <span>Watch Video</span>
                </button>
              </div>
            </div>

            {/* Right Content - Feature Cards */}
            <div className="locus-hero__cards relative space-y-4 transition-all duration-1000 delay-300">
              {/* Floating Cards */}
              <div className="space-y-4">
                {/* Card 1 */}
                <div className="card card-elevated flex items-center gap-4 p-6 hover:shadow-3 transition-all cursor-pointer group">
                  <div className="w-12 h-12 rounded-lg bg-accent-cyan/10 flex items-center justify-center group-hover:bg-accent-cyan/20 transition-colors">
                    <MapPin className="w-6 h-6 text-accent-cyan" />
                  </div>
                  <div>
                    <h3 className="text-h3 text-primary-navy">Indoor Navigation</h3>
                    <p className="text-body-sm text-charcoal-grey">Turn-by-turn guidance with AR overlay</p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="card card-elevated flex items-center gap-4 p-6 hover:shadow-3 transition-all cursor-pointer group ml-6">
                  <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center group-hover:bg-success/20 transition-colors">
                    <Layers className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h3 className="text-h3 text-primary-navy">Multi-Floor Maps</h3>
                    <p className="text-body-sm text-charcoal-grey">3D visualization of complex buildings</p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="card card-elevated flex items-center gap-4 p-6 hover:shadow-3 transition-all cursor-pointer group">
                  <div className="w-12 h-12 rounded-lg bg-info/10 flex items-center justify-center group-hover:bg-info/20 transition-colors">
                    <Activity className="w-6 h-6 text-info" />
                  </div>
                  <div>
                    <h3 className="text-h3 text-primary-navy">Real-time Analytics</h3>
                    <p className="text-body-sm text-charcoal-grey">Occupancy & flow monitoring</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-navy/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-navy rounded-full" />
        </div>
      </div>
    </section>
  )
}
