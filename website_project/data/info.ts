export interface InfoPageData {
  slug: string
  group: 'discover' | 'resource'
  title: string
  icon: string
  /** Short line shown in menus and as the page tagline */
  summary: string
  /** Longer copy for the menu's right-hand panel (Discover) and page hero */
  description: string
  highlights: { title: string; description: string }[]
  bullets: string[]
  isNew?: boolean
  cta?: string
  /** Discover menu: show a dark banner card with this headline instead of the text panel */
  banner?: string
}

const h = (title: string, description: string) => ({ title, description })

// ---------------- Discover Spaces ----------------
export const discover: InfoPageData[] = [
  {
    slug: 'why-locus', group: 'discover', banner: 'Your network as a sensor for smart spaces', title: 'Why Locus', icon: 'Compass',
    summary: 'The case for spatial intelligence',
    description: 'Buildings hold more data than any team can see. Locus turns the wireless network you already own into a live picture of people, devices and space, so every decision starts from what is really happening.',
    highlights: [
      h('Use what you already own', 'Positioning runs on your existing Wi-Fi and BLE infrastructure, so there is no rip-and-replace and value arrives in weeks.'),
      h('One map, many outcomes', 'Wayfinding, occupancy, asset tracking and analytics share the same location layer instead of separate silos.'),
      h('Open by design', 'Documented APIs and SDKs let you push location data into the tools your teams already use.'),
    ],
    bullets: ['Enterprise-grade security and privacy controls', 'Deployed across offices, hospitals, venues and plants', 'Vendor-neutral integrations', 'Measurable ROI within the first quarter'],
    cta: 'Explore now',
  },
  {
    slug: 'locus-platform', group: 'discover', banner: 'The ultimate platform for smart spaces', title: 'Locus Platform', icon: 'Layers',
    summary: 'The cloud engine behind every location',
    description: 'A single cloud platform that ingests signals from Wi-Fi, BLE and UWB, resolves them into accurate positions and exposes them as maps, analytics, alerts and APIs.',
    highlights: [
      h('Location engine', 'Fuses radio signals into positions with typical accuracy of one to three metres, across multiple floors and buildings.'),
      h('Digital maps', 'Import floor plans or generate 3D maps, then keep them current as your buildings change.'),
      h('Data and APIs', 'Stream events, query history and build apps on top of a consistent developer platform.'),
    ],
    bullets: ['Multi-site management console', 'Role-based access and audit trails', 'Real-time event streaming', 'Cloud and private deployment options'],
    cta: 'Explore now',
  },
  {
    slug: 'smart-spaces-apps', group: 'discover', title: 'Smart Spaces Apps', icon: 'LayoutGrid',
    summary: 'Drive real business outcomes with apps built on Locus',
    description: 'Choose built-in Locus apps to power smart space outcomes that improve experiences, efficiency and analytics, or extend with partner apps from our pre-validated ecosystem to drive vertical-specific outcomes.',
    highlights: [
      h('Built-in apps', 'Occupancy, wayfinding, asset tracking, engagement and analytics ready to switch on for any site.'),
      h('Partner ecosystem', 'Pre-validated integrations for workplace, healthcare, retail and building-management platforms.'),
      h('Custom apps', 'Use the SDK and APIs to build experiences that are specific to your organisation.'),
    ],
    bullets: ['Switch apps on per site', 'Shared maps and data across apps', 'Validated partner integrations', 'Extend with your own code'],
    cta: 'Explore now',
  },
  {
    slug: 'experience-locus', group: 'discover', banner: 'Experience smart space, day in the life', title: 'Experience Locus', icon: 'PlayCircle',
    summary: 'See it working before you commit',
    description: 'Walk through persona-based journeys, try the product tour and talk to specialists in a live environment that shows what Locus does in a space like yours.',
    highlights: [
      h('Guided product tour', 'Click through the dashboard with realistic data and see each use case end to end.'),
      h('Persona journeys', 'Follow a facilities manager, a clinician or a visitor through a day with Locus.'),
      h('Live demo', 'Book a session with a specialist and bring your own floor plans and questions.'),
    ],
    bullets: ['No installation needed', 'Realistic sample buildings', 'Tailored to your industry', 'Follow-up sizing and pricing guidance'],
    cta: 'Request a demo',
  },
  {
    slug: 'packages', group: 'discover', banner: 'Packages for every workplace', title: 'Packages', icon: 'Package',
    summary: 'Start small, scale to every site',
    description: 'Simple packages that match how far along you are, from a pilot in a single building to a global rollout with premium support.',
    highlights: [
      h('Essentials', 'Maps, occupancy and analytics for a first site, ideal for proving the value quickly.'),
      h('Advanced', 'Adds wayfinding, asset tracking, engagement and integrations for multi-site operations.'),
      h('Enterprise', 'Full platform with private deployment options, advanced security and dedicated success support.'),
    ],
    bullets: ['Clear per-site pricing', 'Upgrade as you grow', 'Onboarding and training included', 'Flexible term lengths'],
    cta: 'Talk to sales',
  },
]

// ---------------- Resources ----------------
export const resourceColumns = ['Insights', 'Tools', 'Learn', 'Events'] as const
export type ResourceColumn = (typeof resourceColumns)[number]

export interface ResourceItem extends InfoPageData { column: ResourceColumn }

const r = (column: ResourceColumn, d: Omit<InfoPageData, 'group'>): ResourceItem => ({ ...d, group: 'resource', column })

export const resources: ResourceItem[] = [
  r('Insights', {
    slug: 'stories-from-locus', title: 'Stories from Locus', icon: 'Award', summary: 'Discover customer success stories',
    description: 'Read how hospitals, campuses, venues and enterprises use Locus to cut search time, reclaim space and delight visitors.',
    highlights: [h('Healthcare', 'A hospital network locates critical equipment in seconds and reduces wasted staff time.'), h('Workplace', 'A global enterprise reshapes its real estate portfolio using measured desk utilisation.'), h('Venues', 'A stadium operator shortens concession queues with live density insight.')],
    bullets: ['Filter stories by industry', 'Measured outcomes for every story', 'Downloadable summaries'],
  }),
  r('Insights', {
    slug: 'blogs', title: 'Blogs', icon: 'Newspaper', summary: 'See latest Locus news & stories',
    description: 'Product updates, engineering deep dives and practical advice from the people building and deploying Locus.',
    highlights: [h('Product news', 'What is new in maps, analytics and the developer platform.'), h('How-to guides', 'Practical tips for deployment, tagging and floor plan quality.'), h('Industry thinking', 'Trends in hybrid work, smart buildings and indoor positioning.')],
    bullets: ['New posts every week', 'Subscribe by email', 'Written by our engineers and customers'],
  }),
  r('Insights', {
    slug: 'e-book', title: 'E-Book', icon: 'BookOpen', summary: 'Read in-depth guides from experts',
    description: 'Long-form guides covering indoor positioning, workplace analytics and smart building strategy.',
    highlights: [h('Indoor positioning explained', 'How Wi-Fi, BLE and UWB compare, and when to use each.'), h('The hybrid workplace playbook', 'Turning utilisation data into layout and lease decisions.'), h('Smart hospital handbook', 'A practical roadmap for equipment and patient flow visibility.')],
    bullets: ['Free to download', 'Checklists and templates', 'Updated annually'],
  }),
  r('Insights', {
    slug: 'value-study', title: 'Value Study Report', icon: 'FileText', summary: 'A comprehensive cost-benefit analysis', isNew: true,
    description: 'An independent-style cost-benefit framework that quantifies savings from space consolidation, energy reduction and productivity gains.',
    highlights: [h('Cost savings', 'Model real estate and energy savings from measured occupancy.'), h('Productivity', 'Quantify time reclaimed from searching for people, rooms and assets.'), h('Payback', 'See expected payback period and three-year net benefit.')],
    bullets: ['Transparent assumptions', 'Adjustable to your portfolio', 'Executive summary included'],
  }),
  r('Insights', {
    slug: 'roi-with-locus', title: 'ROI with Locus', icon: 'TrendingUp', summary: 'See the cost savings and benefits you get', isNew: true,
    description: 'Estimate the return on investment for your sites using benchmarks from real deployments.',
    highlights: [h('Benchmarks', 'Compare against typical outcomes for your industry and building size.'), h('Scenario planning', 'Model conservative, expected and ambitious outcomes.'), h('Board-ready output', 'Export a summary you can take straight into budget discussions.')],
    bullets: ['Takes about five minutes', 'No sign-up required for the estimate', 'Backed by deployment data'],
  }),

  r('Tools', {
    slug: 'locus-studio', title: 'Locus Studio', icon: 'Boxes', summary: 'Design your network for Smart Spaces', isNew: true,
    description: 'Pick use cases and get recommendations on network hardware, software, density and placement, all before you deploy a single device.',
    highlights: [h('Choose use cases', 'Select what you want to achieve, from wayfinding to asset tracking.'), h('Get recommendations', 'Receive hardware, software, density and placement guidance for your floor plan.'), h('Share the plan', 'Export a bill of materials and deployment plan for your team and partners.')],
    bullets: ['Works with uploaded floor plans', 'Accuracy-based sizing', 'Exportable deployment plan'], cta: 'Explore the Studio',
  }),
  r('Tools', {
    slug: 'ai-map-generator', title: 'AI Map Generator', icon: 'Map', summary: 'Transform your 2D maps into 3D',
    description: 'Upload a floor plan image or CAD export and get a clean, labelled, navigable map in minutes.',
    highlights: [h('Automatic detection', 'Walls, doors, rooms and stairs are recognised and vectorised.'), h('3D output', 'Extrude floors into 3D views with consistent styling.'), h('Edit and refine', 'Adjust labels, zones and points of interest in the map editor.')],
    bullets: ['Supports PDF, PNG and DWG', 'Multi-floor stacking', 'One-click publish to your site'],
  }),
  r('Tools', {
    slug: 'product-tour', title: 'Product Tour', icon: 'PlayCircle', summary: 'Guided Locus dashboard tour',
    description: 'A self-guided walkthrough of the Locus dashboard with realistic data and clear explanations at every step.',
    highlights: [h('Interactive', 'Click through real screens rather than watching a video.'), h('By use case', 'Pick the journey that matters to you, such as occupancy or asset tracking.'), h('Share it', 'Send a tour link to colleagues who need to see it.')],
    bullets: ['Under ten minutes', 'No account needed', 'Available on any device'], cta: 'Start Product Tour',
  }),
  r('Tools', {
    slug: 'experience-center', title: 'Experience Center', icon: 'Compass', summary: 'Persona based usecase journeys',
    description: 'Explore how Locus supports facilities managers, clinicians, retailers and visitors through persona-based journeys.',
    highlights: [h('Facilities manager', 'Keep buildings efficient with live occupancy and energy insight.'), h('Clinician', 'Find equipment and patients quickly and safely.'), h('Visitor', 'Arrive and navigate with confidence.')],
    bullets: ['Story-driven walkthroughs', 'Real screens and data', 'Tailored by industry'],
  }),
  r('Tools', {
    slug: 'energy-saving-estimator', title: 'Energy Saving Estimator', icon: 'Calculator', summary: 'Calculate your energy savings',
    description: 'Enter a few details about your buildings to estimate the energy and carbon you could save with presence-based control.',
    highlights: [h('Simple inputs', 'Floor area, occupancy pattern and energy cost are all you need.'), h('Clear results', 'See annual savings, carbon reduction and payback.'), h('Actionable', 'Get a shortlist of the changes that deliver most.')],
    bullets: ['Instant estimate', 'Adjust assumptions', 'Download the report'],
  }),

  r('Learn', {
    slug: 'runbooks', title: 'Runbooks', icon: 'FileText', summary: 'Step-by-step guidance to deploy, adopt, and maximize the value of Locus',
    description: 'Practical runbooks for each use case, from first deployment to sustained adoption and value tracking.',
    highlights: [h('Deploy', 'Checklists and design patterns for reliable rollouts.'), h('Adopt', 'Change-management guidance to bring teams along.'), h('Maximise', 'KPIs and review cadences to keep improving outcomes.')],
    bullets: ['One runbook per use case', 'Templates included', 'Maintained by our success team'],
  }),
  r('Learn', {
    slug: 'design-deployment-module', title: 'Design and Deployment Module', icon: 'Cpu', summary: 'Create outcome-ready networks for Smart Spaces', isNew: true,
    description: 'Turn your Studio plan into a deployment-ready design with device counts, positions and configuration guidance.',
    highlights: [h('Design', 'Generate placement layouts optimised for your accuracy goals.'), h('Validate', 'Check coverage and density before installation.'), h('Deploy', 'Follow guided steps and confirm results with built-in verification.')],
    bullets: ['Installer-friendly output', 'Coverage heatmaps', 'Post-install verification'],
  }),
  r('Learn', {
    slug: 'faqs', title: 'FAQs', icon: 'HelpCircle', summary: 'Answers to commonly asked questions',
    description: 'Quick answers about accuracy, privacy, hardware requirements, pricing and integrations.',
    highlights: [h('Accuracy and hardware', 'What accuracy to expect and which devices are supported.'), h('Privacy and security', 'How data is collected, anonymised and protected.'), h('Pricing and support', 'How packages work and what support is included.')],
    bullets: ['Grouped by topic', 'Updated regularly', 'Ask a question if it is missing'],
  }),
  r('Learn', {
    slug: 'developer-hub', title: 'Developer Hub', icon: 'Code2', summary: 'Deploy, code, and innovate with Locus Cloud',
    description: 'APIs, SDKs, sample apps and a sandbox for building on top of the Locus platform.',
    highlights: [h('APIs', 'REST and streaming interfaces for locations, events and analytics.'), h('SDKs', 'iOS, Android and web SDKs for embedding maps and wayfinding.'), h('Sandbox', 'Test with simulated buildings and devices before you go live.')],
    bullets: ['Quick-start tutorials', 'Sample code on GitHub', 'Community and support'],
  }),

  r('Events', {
    slug: 'webinars', title: 'Webinars', icon: 'Video', summary: 'Watch live & on-demand webinars',
    description: 'Live sessions and on-demand recordings on product releases, industry topics and customer experiences.',
    highlights: [h('Live sessions', 'Join experts and ask questions in real time.'), h('On demand', 'Watch recordings whenever suits you.'), h('By topic', 'Filter by industry, use case or level.')],
    bullets: ['Free to attend', 'Slides and resources afterwards', 'New sessions every month'],
  }),
  r('Events', {
    slug: 'events-calendar', title: 'Events Calendar', icon: 'Calendar', summary: 'Explore our schedule of global events, summits, and showcases',
    description: 'Meet the Locus team at conferences, customer summits and regional showcases around the world.',
    highlights: [h('Conferences', 'Find us at leading industry events.'), h('Customer summits', 'Hear directly from teams running Locus in production.'), h('Regional showcases', 'Hands-on demos close to where you are.')],
    bullets: ['Add events to your calendar', 'Book a meeting in advance', 'Recordings shared afterwards'],
  }),
]

export const resourcePromo = {
  badge: 'NEW',
  label: 'Locus Studio',
  title: 'Design your network for Smart Spaces',
  href: '/resources/locus-studio',
}

export const allInfo: InfoPageData[] = [...discover, ...resources]
export const findInfo = (group: InfoPageData['group'], slug: string) => allInfo.find((i) => i.group === group && i.slug === slug)
