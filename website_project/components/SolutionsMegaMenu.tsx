import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { byGroup } from '../data/solutions'
import SolutionIcon from './SolutionIcon'

const columns = [
  { heading: 'By Usecase', items: byGroup('usecase') },
  { heading: 'By Industry', items: byGroup('industry') },
  { heading: 'By Teams', items: byGroup('team') },
]

export default function SolutionsMegaMenu({ onNavigate }: { onNavigate: () => void }) {
  const featured = byGroup('featured')
  let step = 0

  return (
    <div className="mega" role="region" aria-label="Solutions">
      <div className="mega__inner">
        <div className="mega__left">
          <div className="mega__cards">
            {featured.map((s, i) => (
              <Link
                key={s.slug}
                href={`/solutions/${s.slug}`}
                onClick={onNavigate}
                className="mega-card"
                style={{ animationDelay: `${80 + i * 70}ms` }}
              >
                <div className="mega-card__art">
                  <SolutionIcon name={s.icon} className="mega-card__icon" />
                </div>
                <h3 className="mega-card__title">{s.title}</h3>
                <p className="mega-card__sub">{s.tagline}</p>
                <div className="mega-card__foot">
                  <div className="mega-card__tags">
                    {s.tags?.map((t) => <span key={t}>{t}</span>)}
                  </div>
                  <span className="mega-card__go" aria-hidden="true"><ArrowRight size={18} /></span>
                </div>
              </Link>
            ))}
          </div>
          <Link href="/contact" onClick={onNavigate} className="mega__cta">
            Experience Locus <ArrowRight size={18} />
          </Link>
        </div>

        <div className="mega__cols">
          {columns.map((col) => (
            <div key={col.heading} className="mega__col">
              <h4 className="mega__heading">{col.heading}</h4>
              <ul>
                {col.items.map((s) => (
                  <li key={s.slug} style={{ animationDelay: `${120 + step++ * 22}ms` }}>
                    <Link href={`/solutions/${s.slug}`} onClick={onNavigate} className="mega__link">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
