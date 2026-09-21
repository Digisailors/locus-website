import Link from 'next/link'
import { ArrowUpRight, Building2, MapPin, Radar } from 'lucide-react'
import { resourceColumns, resources, resourcePromo } from '../data/info'

export default function ResourcesMegaMenu({ onNavigate }: { onNavigate: () => void }) {
  let step = 0
  return (
    <div className="mega" role="region" aria-label="Resources">
      <div className="mega__inner mega__inner--resources">
        <div className="rmenu__cols">
          {resourceColumns.map((col) => (
            <div key={col} className="rmenu__col">
              <h4 className="rmenu__heading">{col}</h4>
              <ul>
                {resources.filter((r) => r.column === col).map((r) => (
                  <li key={r.slug} style={{ animationDelay: `${100 + step++ * 40}ms` }}>
                    <Link href={`/resources/${r.slug}`} onClick={onNavigate} className={`rmenu__item ${r.isNew ? 'is-new' : ''}`}>
                      {r.isNew && <span className="rmenu__badge">New</span>}
                      <strong>{r.title}</strong>
                      <span>{r.summary}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Link href={resourcePromo.href} onClick={onNavigate} className="rmenu__promo">
          <div className="rmenu__promo-copy">
            <p><b>{resourcePromo.badge}</b><i /> {resourcePromo.label}</p>
            <h3>{resourcePromo.title}</h3>
            <span className="rmenu__promo-go">Explore <ArrowUpRight size={16} /></span>
          </div>
          <div className="rmenu__promo-art" aria-hidden="true">
            <span className="cube cube--a"><Radar size={26} /></span>
            <span className="cube cube--b"><MapPin size={26} /></span>
            <span className="cube cube--c"><Building2 size={26} /></span>
          </div>
        </Link>
      </div>
    </div>
  )
}
