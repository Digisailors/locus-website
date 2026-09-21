import Link from 'next/link'
import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { discover } from '../data/info'

export default function DiscoverMegaMenu({ onNavigate }: { onNavigate: () => void }) {
  const [active, setActive] = useState(0)
  const current = discover[active]

  return (
    <div className="mega" role="region" aria-label="Discover Spaces">
      <div className="mega__inner mega__inner--discover">
        <ul className="dmenu__list">
          {discover.map((d, i) => (
            <li key={d.slug} style={{ animationDelay: `${60 + i * 55}ms` }}>
              <Link
                href={`/discover/${d.slug}`}
                onClick={onNavigate}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={`dmenu__item ${i === active ? 'is-active' : ''}`}
              >
                {d.title} <ChevronRight size={16} />
              </Link>
            </li>
          ))}
        </ul>

        {current.banner ? (
          <Link href={`/discover/${current.slug}`} onClick={onNavigate} className="dmenu__banner" key={current.slug}>
            <span className="dmenu__banner-glow" aria-hidden="true" />
            <span className="dmenu__banner-logo"><img src="/images/logo.png" alt="" /></span>
            <span className="dmenu__banner-copy">
              <h3>{current.banner}</h3>
              <span className="dmenu__banner-btn">See How</span>
            </span>
          </Link>
        ) : (
          <div className="dmenu__panel" key={current.slug}>
            <h3>{current.summary}</h3>
            <p>{current.description}</p>
            <Link href={`/discover/${current.slug}`} onClick={onNavigate} className="dmenu__btn">
              {(current.cta ?? 'Explore now').toUpperCase()}
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
