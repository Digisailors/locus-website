import Link from 'next/link'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Check, ChevronLeft, ChevronRight, Download, Plus, UploadCloud } from 'lucide-react'
import { Hero, reveal } from './ResourceListings'

const ease = [0.22, 1, 0.36, 1] as const

/* ============ ROI ============ */
const roiIndustries = [
  { k: 'Workspaces', tags: ['Space savings', 'Energy', 'Hybrid work'], stats: [['30%', 'Real estate savings'], ['25%', 'Lower energy use'], ['4x', 'Faster space planning']] },
  { k: 'Healthcare', tags: ['Asset tracking', 'Patient flow', 'Safety'], stats: [['40%', 'Less equipment search time'], ['20%', 'Higher asset utilisation'], ['<3s', 'Alert response']] },
  { k: 'Retail', tags: ['Footfall', 'Engagement', 'Conversion'], stats: [['15%', 'Conversion uplift'], ['2.5x', 'Wi-Fi opt-in'], ['18%', 'Longer dwell time']] },
]

export function Roi({ study }: { study?: boolean }) {
  const [sel, setSel] = useState(0)
  const cur = roiIndustries[sel]
  return (
    <>
      <Hero title={study ? 'The value of smart spaces, quantified.' : 'Know your ROI before you deploy.'} sub="Model savings across space, energy, productivity and experience using benchmarks from real deployments.">
        <Link href="/contact" className="rp-btn">Download the ROI report <Download size={18} /></Link>
      </Hero>
      <section className="rp-body">
        <div className="rp-wrap rp-two">
          <motion.div {...reveal}>
            <h2 className="rp-h2">How does Locus deliver value?</h2>
            <p>Locus turns the wireless network you already own into a live picture of people, devices and space, so decisions start from what is really happening.</p>
          </motion.div>
          <motion.ul className="rp-list" {...reveal}>
            {['Workplaces: right-size space and cut energy', 'Healthcare: find equipment and improve flow', 'Retail: understand and engage every shopper', 'IT: one platform on the network you already run'].map((x) => <li key={x}><Check size={18} />{x}</li>)}
          </motion.ul>
        </div>
        <div className="rp-wrap rp-block">
          <motion.h2 className="rp-h2" {...reveal}>How is the ROI calculated?</motion.h2>
          <motion.p {...reveal}>We use conservative estimates built from real customer data, then let you adjust each assumption for your own portfolio.</motion.p>
        </div>
        <div className="rp-wrap rp-block">
          <motion.h2 className="rp-h2" {...reveal}>Select your industry. See your ROI.</motion.h2>
          <div className="rp-roi">
            {roiIndustries.map((r, i) => (
              <motion.button key={r.k} className={`rp-roi__card ${sel === i ? 'is-on' : ''}`} onClick={() => setSel(i)} {...reveal} transition={{ ...reveal.transition, delay: i * 0.08 }}>
                <h3>{r.k}</h3>
                <span>{r.tags.map((t) => <i key={t}>{t}</i>)}</span>
              </motion.button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={sel} className="rp-roi__result" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, ease }}>
              {cur.stats.map(([v, l]) => <div key={l}><strong>{v}</strong><span>{l}</span></div>)}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}

/* ============ FAQs ============ */
const faqData: Record<string, [string, string][]> = {
  General: [
    ['What is Locus?', 'Locus is a cloud platform that turns the wireless network you already have into a sensor for people, devices and spaces.'],
    ['Which industries use Locus?', 'Workplaces, healthcare, retail, education, manufacturing, airports, venues and hospitality.'],
    ['Do I need new hardware?', 'Most use cases run on your existing Wi-Fi and BLE infrastructure. Tags or sensors are added only where extra precision is needed.'],
    ['What user roles are available?', 'Administrators, facilities, IT, analytics and read-only roles with per-site permissions.'],
  ],
  'Free Trial': [
    ['Who is eligible for a free trial?', 'Any organisation with a compatible wireless network can start a trial.'],
    ['What is included?', 'Maps, occupancy monitoring and analytics for one site, with sample data available on day one.'],
    ['Is a payment method required?', 'No. You only pay if you choose to continue.'],
  ],
  Licensing: [
    ['How can I purchase Locus?', 'Through Locus directly or through an authorised partner.'],
    ['What packages are available?', 'Essentials, Advanced and Enterprise, described on the Packages page.'],
    ['Can I try advanced features?', 'Yes. Ask your specialist to enable them for the duration of your trial.'],
  ],
  Activation: [
    ['How do I verify my licence?', 'Use the Find my licence tool with your organisation details.'],
    ['How do I activate and log in?', 'Follow the activation email, set your password and sign in to the dashboard.'],
  ],
  Deployment: [
    ['How do I connect my network?', 'Link your wireless controller or cloud-managed network from the dashboard using the Setup Guide.'],
    ['Is IT involvement required?', 'A network administrator is needed for the initial connection; after that, teams self-serve.'],
    ['How long does configuration take?', 'Typically a few hours per site once maps are ready.'],
  ],
  Technical: [
    ['Where is data stored?', 'In regional cloud data centres, selectable at onboarding.'],
    ['How much capacity is supported?', 'The platform scales to very large multi-site estates.'],
    ['How long is data retained?', 'Retention is configurable per site.'],
  ],
  'Data Security': [
    ['Who owns the data?', 'You do. Locus processes it on your behalf.'],
    ['Is data encrypted?', 'Yes, in transit and at rest.'],
    ['Which regulations are supported?', 'Controls are provided to help you meet GDPR and regional privacy requirements.'],
    ['What is collected?', 'Only the signals needed for the features you switch on, with anonymisation by default.'],
  ],
}

export function Faqs() {
  const cats = Object.keys(faqData)
  const [cat, setCat] = useState(cats[0])
  const [open, setOpen] = useState<number | null>(0)
  const [sent, setSent] = useState(false)
  return (
    <>
      <Hero title="Frequently Asked Questions" sub="Answers about accuracy, privacy, hardware, licensing and deployment." />
      <section className="rp-body">
        <div className="rp-wrap rp-faq">
          <ul className="rp-faq__cats">
            {cats.map((c) => (
              <li key={c}><button className={cat === c ? 'is-on' : ''} onClick={() => { setCat(c); setOpen(0) }}>{c}<span>{faqData[c].length}</span></button></li>
            ))}
          </ul>
          <AnimatePresence mode="wait">
            <motion.div key={cat} className="rp-faq__list" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35, ease }}>
              <h2>{cat}</h2>
              {faqData[cat].map(([q, a], i) => (
                <div key={q} className={`sol-faq ${open === i ? 'is-open' : ''}`}>
                  <button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}><span>{q}</span><Plus size={20} /></button>
                  <div className="sol-faq__body"><div><p>{a}</p></div></div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="rp-wrap rp-block">
          <motion.form className="rp-form" {...reveal} onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
            <h2 className="rp-h2">Can&apos;t find what you&apos;re looking for?</h2>
            {sent ? <p className="rp-ok"><Check size={18} /> Thanks, we will get back to you shortly.</p> : (
              <>
                <input required placeholder="Your name" aria-label="Your name" />
                <input required type="email" placeholder="Work email" aria-label="Work email" />
                <textarea required rows={4} placeholder="Your question" aria-label="Your question" />
                <button className="rp-btn" type="submit">Send <ArrowRight size={18} /></button>
              </>
            )}
          </motion.form>
        </div>
      </section>
    </>
  )
}

/* ============ Locus Studio ============ */
const useCases = ['Occupancy monitoring', 'Asset tracking', 'Indoor navigation', 'Guest Wi-Fi onboarding', 'Location analytics', 'Detect & Locate', 'Smart desking', 'Energy efficiency']
const sizes = [['Small', 20000], ['Medium', 75000], ['Large', 200000], ['Campus', 600000]] as const
const layouts = ['Open office', 'Hospital / clinical', 'Warehouse / plant', 'Retail / mall']

export function Studio() {
  const [step, setStep] = useState(1)
  const [picked, setPicked] = useState<string[]>(['Occupancy monitoring'])
  const [size, setSize] = useState(1)
  const [layout, setLayout] = useState(0)
  const area = sizes[size][1]
  const dens = layout === 1 || layout === 3 ? 1800 : layout === 2 ? 3500 : 2500
  const aps = Math.ceil(area / dens)
  const tags = picked.includes('Asset tracking') ? Math.ceil(area / 400) : 0
  const tier = picked.length > 4 ? 'Enterprise' : picked.length > 2 || tags ? 'Advanced' : 'Essentials'
  return (
    <>
      <section className="rp-dark">
        <div className="rp-wrap">
          <motion.p className="rp-dark__pill" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>NEW</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }}>Locus Studio</motion.h1>
          <motion.p className="rp-dark__lead" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.12 }}>Design your network for Smart Spaces. Pick use cases and get recommendations on network hardware, software, density and placement.</motion.p>
          <Link href="/resources/product-tour" className="rp-btn">Start Product Tour <ArrowRight size={18} /></Link>
        </div>
      </section>
      <section className="rp-body">
        <div className="rp-wrap rp-cols3">
          {[['1', 'Choose your use cases'], ['2', 'Tell us about your building'], ['3', 'Get your recommendations']].map(([n, t], i) => (
            <motion.div key={n} {...reveal} transition={{ ...reveal.transition, delay: i * 0.1 }}><span>{n}</span><h3>{t}</h3></motion.div>
          ))}
        </div>
        <div className="rp-wrap rp-block">
          <motion.h2 className="rp-h2" {...reveal}>What is a Smart Space?</motion.h2>
          <motion.p {...reveal}>A smart space senses how people and things use a building, then responds. Locus does it by leveraging the network and devices you already have, at low total cost of ownership.</motion.p>
          <div className="rp-stages">
            {[['Hardware foundation', 'Your network as a sensor'], ['Software platform', 'The Locus operating system'], ['Outcomes', 'Apps and experiences']].map(([t, d], i) => (
              <motion.div key={t} {...reveal} transition={{ ...reveal.transition, delay: i * 0.1 }}><b>{i + 1}</b><h3>{t}</h3><p>{d}</p></motion.div>
            ))}
          </div>
        </div>
        <div className="rp-wrap rp-block">
          <h2 className="rp-h2">Design your smart space</h2>
          <div className="rp-steps">{[1, 2, 3, 4].map((n) => <button key={n} className={step === n ? 'is-on' : step > n ? 'is-done' : ''} onClick={() => setStep(n)}>{n < 4 ? `Step ${n}` : 'Results'}</button>)}</div>
          <AnimatePresence mode="wait">
            <motion.div key={step} className="rp-builder" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.35, ease }}>
              {step === 1 && <div className="rp-chips">{useCases.map((u) => <button key={u} className={picked.includes(u) ? 'is-on' : ''} onClick={() => setPicked(picked.includes(u) ? picked.filter((x) => x !== u) : [...picked, u])}>{u}</button>)}</div>}
              {step === 2 && <div className="rp-chips">{sizes.map(([l, a], i) => <button key={l} className={size === i ? 'is-on' : ''} onClick={() => setSize(i)}>{l} &middot; {a.toLocaleString('en-US')} sq ft</button>)}</div>}
              {step === 3 && <div className="rp-chips">{layouts.map((l, i) => <button key={l} className={layout === i ? 'is-on' : ''} onClick={() => setLayout(i)}>{l}</button>)}</div>}
              {step === 4 && (
                <div className="rp-result">
                  <div><strong>{aps}</strong><span>Access points recommended</span></div>
                  <div><strong>{tags}</strong><span>Asset tags suggested</span></div>
                  <div><strong>{tier}</strong><span>Recommended package</span></div>
                  <p>Illustrative sizing for {picked.length} use case{picked.length === 1 ? '' : 's'}, about {area.toLocaleString('en-US')} sq ft. A specialist will validate placement on your floor plan.</p>
                  <Link href="/contact" className="rp-btn">Contact Sales <ArrowRight size={18} /></Link>
                </div>
              )}
              {step < 4 && <button className="rp-btn rp-btn--outline rp-next" onClick={() => setStep(step + 1)}>{step === 3 ? 'See recommendations' : 'Next'} <ArrowRight size={16} /></button>}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}

/* ============ Energy saving estimator ============ */
export function Estimator() {
  const [area, setArea] = useState(80000)
  const [cost, setCost] = useState(0.14)
  const [empty, setEmpty] = useState(45)
  const kwh = area * 15 * (empty / 100) * 0.35
  const save = kwh * cost
  const co2 = kwh * 0.0004
  return (
    <>
      <Hero title="Energy Saving Estimator" sub="Calculate your energy savings from presence-based control." />
      <section className="rp-body">
        <div className="rp-wrap rp-est">
          <motion.div className="rp-est__form" {...reveal}>
            <label>Floor area <b>{area.toLocaleString('en-US')} sq ft</b><input type="range" min={5000} max={500000} step={5000} value={area} onChange={(e) => setArea(+e.target.value)} /></label>
            <label>Energy cost <b>${cost.toFixed(2)} / kWh</b><input type="range" min={0.05} max={0.4} step={0.01} value={cost} onChange={(e) => setCost(+e.target.value)} /></label>
            <label>Time spaces sit empty <b>{empty}%</b><input type="range" min={10} max={80} value={empty} onChange={(e) => setEmpty(+e.target.value)} /></label>
          </motion.div>
          <motion.div className="rp-est__out" {...reveal}>
            <div><strong>${Math.round(save).toLocaleString('en-US')}</strong><span>Estimated annual saving</span></div>
            <div><strong>{Math.round(kwh).toLocaleString('en-US')}</strong><span>kWh saved per year</span></div>
            <div><strong>{co2.toFixed(0)} t</strong><span>CO&#8322; avoided</span></div>
            <p>Illustrative estimate only. Actual savings depend on your building systems.</p>
            <Link href="/contact" className="rp-btn">Get a detailed assessment <ArrowRight size={18} /></Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

/* ============ AI Map Generator ============ */
export function MapGen() {
  const [file, setFile] = useState<string | null>(null)
  const [gen, setGen] = useState(false)
  return (
    <>
      <Hero title="AI Map Generator" sub="Transform your 2D maps into 3D." />
      <section className="rp-body">
        <div className="rp-wrap rp-map">
          <label className="rp-drop">
            <input type="file" accept="image/*,.pdf" onChange={(e) => { const f = e.target.files?.[0]; setFile(f ? f.name : null); setGen(false) }} />
            <UploadCloud size={44} />
            <b>{file ?? 'Drop a floor plan or click to upload'}</b>
            <span>PNG, JPG or PDF</span>
          </label>
          <button className="rp-btn" disabled={!file} onClick={() => setGen(true)}>Generate 3D map <ArrowRight size={18} /></button>
          <div className="rp-map__stage">
            <svg viewBox="0 0 400 260" className={gen ? 'is-3d' : ''} aria-label="Floor plan preview">
              <g className="rp-map__plan">
                <rect x="40" y="40" width="320" height="180" fill="#fff" stroke="#0b1f33" strokeWidth="3" />
                <path d="M40 120h140M220 40v100M220 140h140M140 140v80" stroke="#0b1f33" strokeWidth="3" fill="none" />
                <rect x="60" y="60" width="60" height="40" fill="#d7f5df" /><rect x="240" y="60" width="90" height="60" fill="#d7f5df" /><rect x="240" y="160" width="90" height="40" fill="#d7f5df" />
              </g>
            </svg>
            <p>{gen ? 'Generated: walls, rooms and doors detected.' : 'Your generated map appears here.'}</p>
          </div>
        </div>
      </section>
    </>
  )
}

/* ============ Product tour ============ */
const tour = [
  ['Dashboard', 'See digitisation stats and every app in one place.'],
  ['Maps', 'Explore live multi-floor maps of every site.'],
  ['Occupancy', 'Track headcount by zone, right now and over time.'],
  ['Assets', 'Search any tagged asset and see its history.'],
  ['Engagements', 'Trigger messages and offers from location.'],
]

export function Tour() {
  const [i, setI] = useState(0)
  return (
    <>
      <Hero title="Product Tour" sub="Guided Locus dashboard tour." />
      <section className="rp-body">
        <div className="rp-wrap rp-tour">
          <div className="rp-tour__screen">
            <div className="rp-tour__bar">{tour.map(([t], n) => <button key={t} className={n === i ? 'is-on' : ''} onClick={() => setI(n)}>{t}</button>)}</div>
            <AnimatePresence mode="wait">
              <motion.div key={i} className="rp-tour__view" initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35, ease }}>
                {Array.from({ length: 6 }, (_, n) => <span key={n} style={{ animationDelay: `${n * 0.15}s` }} />)}
                <i className="rp-tour__spot" />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="rp-tour__side">
            <AnimatePresence mode="wait">
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <span>Step {i + 1} of {tour.length}</span>
                <h2>{tour[i][0]}</h2>
                <p>{tour[i][1]}</p>
              </motion.div>
            </AnimatePresence>
            <div className="rp-tour__nav">
              <button onClick={() => setI((i + tour.length - 1) % tour.length)} aria-label="Previous"><ChevronLeft /></button>
              <button onClick={() => setI((i + 1) % tour.length)} aria-label="Next"><ChevronRight /></button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

/* ============ Developer hub ============ */
const code: Record<string, string> = {
  curl: `curl https://api.locus.example/v1/sites/{siteId}/occupancy \\\n  -H "Authorization: Bearer $LOCUS_TOKEN"`,
  javascript: `const res = await fetch(\`\${API}/v1/sites/\${siteId}/occupancy\`, {\n  headers: { Authorization: \`Bearer \${token}\` },\n})\nconst { zones } = await res.json()`,
  python: `import requests\n\nr = requests.get(f"{API}/v1/sites/{site_id}/occupancy",\n                 headers={"Authorization": f"Bearer {token}"})\nzones = r.json()["zones"]`,
}

export function DevHub() {
  const [lang, setLang] = useState('curl')
  return (
    <>
      <Hero title="Developer Hub" sub="Deploy, code, and innovate with Locus Cloud." />
      <section className="rp-body">
        <div className="rp-wrap rp-cols3">
          {[['APIs', 'REST and streaming interfaces for locations, events and analytics.'], ['SDKs', 'iOS, Android and web SDKs for embedding maps and wayfinding.'], ['Sandbox', 'Test with simulated buildings and devices before you go live.']].map(([t, d], i) => (
            <motion.div key={t} {...reveal} transition={{ ...reveal.transition, delay: i * 0.1 }}><h3>{t}</h3><p>{d}</p></motion.div>
          ))}
        </div>
        <div className="rp-wrap rp-block">
          <h2 className="rp-h2">Get your first response in minutes</h2>
          <div className="rp-code">
            <div>{Object.keys(code).map((l) => <button key={l} className={lang === l ? 'is-on' : ''} onClick={() => setLang(l)}>{l}</button>)}</div>
            <pre><code>{code[lang]}</code></pre>
          </div>
        </div>
      </section>
    </>
  )
}

/* ============ Docs (Setup guide, Runbooks) ============ */
const docs: Record<string, { title: string; sub: string; nav: [string, string[]][] }> = {
  setup: { title: 'Setup Guide', sub: 'Support on deploying, managing & using Locus.', nav: [
    ['Get started', ['Create your account', 'Connect your network', 'Add your first site']],
    ['Maps', ['Import a floor plan', 'Place access points', 'Publish the map']],
    ['Manage', ['Users and roles', 'Alerts and rules', 'Integrations']],
  ] },
  runbooks: { title: 'Runbooks', sub: 'Step-by-step guidance to deploy, adopt, and maximize the value of Locus.', nav: [
    ['Occupancy', ['Plan', 'Deploy', 'Adopt', 'Measure']],
    ['Asset tracking', ['Choose tags', 'Tag your assets', 'Set up alerts']],
    ['Wayfinding', ['Prepare maps', 'Embed the SDK', 'Launch to users']],
  ] },
}

export function Docs({ kind }: { kind: 'setup' | 'runbooks' }) {
  const d = docs[kind]
  const flat = d.nav.flatMap(([s, l]) => l.map((x) => [s, x] as const))
  const [i, setI] = useState(0)
  return (
    <>
      <Hero title={d.title} sub={d.sub} />
      <section className="rp-body">
        <div className="rp-wrap rp-docs">
          <nav className="rp-docs__nav" aria-label="Documentation">
            {d.nav.map(([s, list]) => (
              <div key={s}><b>{s}</b>{list.map((x) => { const idx = flat.findIndex((f) => f[1] === x); return <button key={x} className={idx === i ? 'is-on' : ''} onClick={() => setI(idx)}>{x}</button> })}</div>
            ))}
          </nav>
          <AnimatePresence mode="wait">
            <motion.article key={i} className="rp-docs__body" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <small>{flat[i][0]}</small>
              <h2>{flat[i][1]}</h2>
              <p>Follow these steps to complete <b>{flat[i][1].toLowerCase()}</b>. Most teams finish in under an hour.</p>
              <ol>
                <li>Open the Locus dashboard and choose your site.</li>
                <li>Select <b>{flat[i][0]}</b> from the left menu.</li>
                <li>Complete the guided form and review the summary.</li>
                <li>Save. The change is applied to your site within minutes.</li>
              </ol>
              <div className="rp-docs__pn">
                <button disabled={i === 0} onClick={() => setI(i - 1)}><ChevronLeft size={16} /> Previous</button>
                <button disabled={i === flat.length - 1} onClick={() => setI(i + 1)}>Next <ChevronRight size={16} /></button>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}

/* ============ Design & deployment module ============ */
export function Module() {
  const ch = ['Define outcomes', 'Survey your network', 'Design access point placement', 'Plan tags and sensors', 'Validate coverage', 'Deploy and verify']
  return (
    <>
      <Hero title="Design and Deployment Module" sub="Create outcome-ready networks for Smart Spaces.">
        <Link href="/contact" className="rp-btn">Download the module <Download size={18} /></Link>
      </Hero>
      <section className="rp-body">
        <div className="rp-wrap">
          <ol className="rp-chapters">
            {ch.map((c, i) => <motion.li key={c} {...reveal} transition={{ ...reveal.transition, delay: i * 0.06 }}><span>{i + 1}</span>{c}</motion.li>)}
          </ol>
        </div>
      </section>
    </>
  )
}
