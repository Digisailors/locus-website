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

// ---------------- Discover Platform ----------------
export const discover: InfoPageData[] = [
  {
    slug: 'why-locus',
    group: 'discover',
    banner: 'Industrial RTLS & sensor automation for automotive manufacturing',
    title: 'Why Locus',
    icon: 'Compass',
    summary: 'The case for automotive production line intelligence',
    description: 'Car assembly lines operate under strict takt times where missing a tool or misplacing a body dolly costs thousands per minute. Locus deploys sub-meter BLE AoA, centimeter UWB, LoRaWAN GPS, and mmWave radar to give automakers continuous spatial intelligence from stamping press to dealer shipping yard.',
    highlights: [
      h('Multi-technology precision', 'Combine sub-meter BLE AoA for plant-wide WIP, centimeter UWB for chassis marriage, LoRaWAN GPS for outdoor yards, and mmWave radar for lighting automation.'),
      h('Zero Wi-Fi reliance', 'Operates on dedicated industrial RF channels, avoiding Wi-Fi network congestion, IT interference, and corporate wireless constraints.'),
      h('Direct MES & PLC integration', 'Pushes real-time vehicle location and dwell data directly into Siemens, Rockwell, and SAP Manufacturing Execution Systems.'),
    ],
    bullets: [
      'Sub-meter BLE AoA & 10cm UWB accuracy',
      'Proven across stamping, BIW, paint shop, and assembly',
      'Camera-free worker privacy compliance with mmWave',
      'Measurable ROI through reduced cycle delays and 45% lighting energy savings',
    ],
    cta: 'Explore now',
  },
  {
    slug: 'locus-platform',
    group: 'discover',
    banner: 'The industrial RTLS engine for automotive 4.0',
    title: 'Locus Platform',
    icon: 'Layers',
    summary: 'Unified sensor fusion for automotive manufacturing',
    description: 'An industrial RTLS and spatial automation platform that ingests signals from BLE AoA gateways, UWB anchors, LoRaWAN GPS trackers, and mmWave radar, resolving them into real-time digital twins of your assembly line and holding yard.',
    highlights: [
      h('Industrial sensor fusion', 'Blends BLE AoA, UWB, LoRaWAN GNSS, and mmWave radar with sub-50ms latency into a unified 3D plant coordinate model.'),
      h('Live factory digital twin', 'Imports plant CAD/DWG layouts and displays moving chassis, AGVs, tool carts, and automated lighting zones live.'),
      h('Industrial APIs & MQTT', 'Stream real-time location events to MES, SCADA, PLCs, and ERP via MQTT, OPC-UA, REST, and WebSocket.'),
    ],
    bullets: [
      'Multi-plant global manufacturing console',
      'SIL-2 / ISO 26262 functional safety interlocks',
      'High-frequency micro-motion radar analytics',
      'On-premise edge appliance and private cloud deployment options',
    ],
    cta: 'Explore now',
  },
  {
    slug: 'smart-spaces-apps',
    group: 'discover',
    banner: 'Production line, yard & facility automation apps',
    title: 'Automotive Plant Apps',
    icon: 'LayoutGrid',
    summary: 'Purpose-built applications for car manufacturing and yard logistics',
    description: 'Activate ready-to-run industrial applications for chassis WIP tracking, finished car yard dispatch, smart torque wrench interlocks, and mmWave factory lighting automation.',
    highlights: [
      h('Production line tracker', 'Real-time vehicle chassis tracking across stamping, body-in-white, and final assembly with automated station geofences.'),
      h('Finished yard dispatcher', 'Locate any parked car by VIN across multi-acre holding lots with sub-two-meter LoRaWAN GPS accuracy.'),
      h('Facility energy manager', 'Automate high-bay LED lighting and monitor assembly cell dwell time using mmWave radar sensors.'),
    ],
    bullets: [
      'Switch on modules per production line',
      'Shared factory maps and tracking data',
      'Native Siemens, Rockwell & SAP connectors',
      'Open Python & C++ SDKs for custom robotic cell logic',
    ],
    cta: 'Explore now',
  },
  {
    slug: 'experience-locus',
    group: 'discover',
    banner: 'Tour an automotive assembly digital twin',
    title: 'Experience Locus',
    icon: 'PlayCircle',
    summary: 'See automotive RTLS in action before deployment',
    description: 'Explore an interactive digital twin of an automotive assembly facility: track chassis movement along the line, inspect UWB marriage synchronization, test outdoor yard locating, and watch mmWave automated lighting in action.',
    highlights: [
      h('Assembly line walkthrough', 'Watch vehicle chassis move through BIW, paint, and final marriage with real-time station takt times.'),
      h('Yard management simulator', 'Search by VIN and navigate across an outdoor finished vehicle holding lot in real time.'),
      h('Live technical demo', 'Book an engineering deep dive with automotive RTLS specialists and review your plant layout.'),
    ],
    bullets: [
      'Simulated automotive plant with 500+ assets',
      'Interactive UWB torque interlock demonstration',
      'Live mmWave lighting dimming simulation',
      'Detailed BOM and hardware budget sizing',
    ],
    cta: 'Request a demo',
  },
  {
    slug: 'packages',
    group: 'discover',
    banner: 'Industrial RTLS packages from pilot cell to multi-plant',
    title: 'Deployment Packages',
    icon: 'Package',
    summary: 'Flexible rollout tiers for automotive OEMs and Tier-1 suppliers',
    description: 'Simple deployment tiers matching your manufacturing scale, from an initial pilot on a critical assembly line to plant-wide RTLS and global multi-facility enterprise rollouts.',
    highlights: [
      h('Pilot Cell Package', 'BLE AoA & UWB coverage for a single critical line (e.g. chassis marriage or battery assembly) with 100 industrial tags.'),
      h('Full Assembly Plant', 'Plant-wide BLE AoA mesh, UWB critical zones, outdoor LoRaWAN yard gateways, and mmWave lighting automation.'),
      h('Global Enterprise', 'Multi-plant management, custom MES/PLC connector development, on-prem edge servers, and 24/7 industrial SLA.'),
    ],
    bullets: [
      'Turnkey hardware, anchors, tags & software',
      'On-site RF survey and installation support',
      'Industrial PLC & MES integration included',
      'Continuous OTA firmware updates for tags and gateways',
    ],
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
    slug: 'stories-from-locus',
    title: 'Stories from Locus',
    icon: 'Award',
    summary: 'Automotive OEM and Tier-1 customer case studies',
    description: 'Read how leading car manufacturers, electric vehicle producers, and heavy commercial truck makers use Locus to eliminate assembly delays, manage vehicle yards, and slash energy bills.',
    highlights: [
      h('EV Skateboard Assembly', 'A major EV manufacturer uses UWB and BLE AoA to achieve zero sequencing errors on its battery marriage line.'),
      h('Commercial Truck Yard', 'A heavy truck OEM locates parked chassis in under two minutes across a 40-acre outdoor holding facility with LoRaWAN GPS.'),
      h('Stamping & Paint Automation', 'A Tier-1 supplier cuts factory lighting electricity by 45% using mmWave radar micro-motion sensors.'),
    ],
    bullets: ['Filter stories by automotive sector', 'Verified takt time and energy savings metrics', 'Downloadable plant engineering briefs'],
  }),
  r('Insights', {
    slug: 'blogs',
    title: 'Blogs & Technical Articles',
    icon: 'Newspaper',
    summary: 'Industrial RTLS & automotive manufacturing engineering insights',
    description: 'Deep dives on BLE AoA antenna design, UWB multipath mitigation in high-metal automotive plants, LoRaWAN yard network architectures, and mmWave radar signal processing.',
    highlights: [
      h('AoA vs UWB on the Line', 'Choosing the right positioning technology for each stage of automotive manufacturing.'),
      h('Solving Metal Multipath', 'How advanced RF filtering handles steel presses, robotic arms, and car bodies.'),
      h('mmWave Industrial Lighting', 'Replacing unreliable PIR sensors with 60GHz radar in high-bay automotive plants.'),
    ],
    bullets: ['Technical papers published bi-weekly', 'Authored by industrial RTLS engineers', 'Practical factory deployment tips'],
  }),
  r('Insights', {
    slug: 'e-book',
    title: 'E-Book & Guides',
    icon: 'BookOpen',
    summary: 'Engineering playbooks for automotive asset tracking',
    description: 'Comprehensive technical handbooks covering factory RTLS deployment, finished vehicle yard management, and mmWave industrial facility automation.',
    highlights: [
      h('The Automotive RTLS Playbook', 'Architecture guide for deploying BLE AoA, UWB, and LoRaWAN across car assembly facilities.'),
      h('Yard Logistics Blueprint', 'Best practices for managing thousands of finished cars with low-power LoRaWAN GPS trackers.'),
      h('Factory Energy Optimization', 'Using mmWave micro-motion radar to automate high-bay lighting and achieve ISO 50001 compliance.'),
    ],
    bullets: ['Free engineering download', 'Includes RF link budget spreadsheets', 'MES integration architecture diagrams'],
  }),
  r('Insights', {
    slug: 'value-study',
    title: 'Value Study Report',
    icon: 'FileText',
    summary: 'Cost-benefit and takt time analysis for automotive RTLS',
    isNew: true,
    description: 'An independent engineering cost-benefit framework quantifying assembly throughput gains, eliminated tooling search times, and electrical energy reductions.',
    highlights: [
      h('Line throughput unlock', 'Model assembly line capacity gains from eliminating WIP search and sequencing delays.'),
      h('Tooling & asset protection', 'Quantify savings from zero lost torque wrenches, specialized calibration fixtures, and carrier dollies.'),
      h('Lighting power ROI', 'Calculate expected kilowatt-hour reductions from mmWave presence-automated high-bay fixtures.'),
    ],
    bullets: ['Transparent manufacturing models', 'Customizable by annual vehicle production volume', 'Executive summary presentation included'],
  }),
  r('Insights', {
    slug: 'roi-with-locus',
    title: 'ROI with Locus',
    icon: 'TrendingUp',
    summary: 'Calculate your plant return on investment',
    isNew: true,
    description: 'Estimate the financial payback and operational gains for your automotive plant using verified benchmarks from live manufacturing deployments.',
    highlights: [
      h('Plant benchmarks', 'Compare results against typical automotive assembly lines, stamping shops, and finished yards.'),
      h('Payback modeling', 'Most automotive plants achieve full capital expenditure payback within 6 to 9 months.'),
      h('CFO-ready output', 'Generate downloadable financial models with NPV, IRR, and annual operational savings.'),
    ],
    bullets: ['Takes five minutes to configure', 'Adjustable line speed and shift parameters', 'Backed by automotive manufacturing deployment data'],
  }),

  r('Tools', {
    slug: 'locus-studio',
    title: 'Locus Studio',
    icon: 'Boxes',
    summary: 'Design your plant for Automotive RTLS & mmWave Automation',
    isNew: true,
    description: 'Upload your automotive factory CAD or DWG floor plan and receive automated recommendations on BLE AoA locator density, UWB anchor placement, and mmWave radar lighting zones.',
    highlights: [
      h('Assembly line zoning', 'Define workstations, buffer lanes, and marriage zones on your plant layout.'),
      h('Anchor & gateway density', 'Automatically calculate optimal locator placement for sub-30cm precision in high-metal areas.'),
      h('Bill of materials export', 'Export a complete hardware count, cabling schedule, and installation map for your contractors.'),
    ],
    bullets: ['Works with AutoCAD DWG, DXF & PDF layouts', 'Automotive RF reflection simulation', 'Exportable hardware BOM and wiring plans'],
    cta: 'Explore the Studio',
  }),
  r('Tools', {
    slug: 'ai-map-generator',
    title: 'AI Map Generator',
    icon: 'Map',
    summary: 'Transform 2D plant drawings into 3D digital twins',
    description: 'Convert plant CAD blueprints and PDF architectural drawings into clean, multi-layered 3D factory maps with labeled workstations, conveyors, and storage bays.',
    highlights: [
      h('Automatic line detection', 'Conveyors, robot cells, safety fences, and stamping presses are detected and vectorised automatically.'),
      h('3D assembly visualization', 'Extrude factory levels into interactive 3D views with moving vehicle and AGV indicators.'),
      h('Live spatial updates', 'Easily adjust workstations and exclusion zones as line layouts reconfigure for new vehicle models.'),
    ],
    bullets: ['Supports DWG, DXF, PNG & PDF exports', 'Multi-floor stamping and assembly stacking', 'One-click publish to plant digital twin'],
  }),
  r('Tools', {
    slug: 'product-tour',
    title: 'Product Tour',
    icon: 'PlayCircle',
    summary: 'Guided Locus Automotive RTLS dashboard tour',
    description: 'A self-guided interactive tour of the Locus automotive manufacturing console with realistic production line data, yard maps, and lighting controls.',
    highlights: [
      h('Interactive assembly line', 'Follow a vehicle chassis moving from stamping to marriage with live cycle-time readouts.'),
      h('Outdoor yard locating', 'Simulate searching for target VINs in a 5,000-vehicle holding lot using LoRaWAN GPS.'),
      h('mmWave radar telemetry', 'Inspect real-time micro-motion presence signals and automated lighting zone dimming.'),
    ],
    bullets: ['Under ten minutes', 'No account registration required', 'Realistic automotive OEM sample data'],
    cta: 'Start Product Tour',
  }),
  r('Tools', {
    slug: 'experience-center',
    title: 'Experience Center',
    icon: 'Compass',
    summary: 'Role-based manufacturing use-case journeys',
    description: 'Explore how Locus supports plant managers, quality engineers, yard dispatchers, and energy directors through role-tailored workflows.',
    highlights: [
      h('Plant Manager', 'Keep assembly lines synchronized with live takt-time variance and buffer alerts.'),
      h('Quality Engineer', 'Ensure 100% torque operation verification and automated defect quarantine.'),
      h('Energy Director', 'Automate high-bay factory illumination with mmWave radar to slash facility power bills.'),
    ],
    bullets: ['Role-tailored walkthroughs', 'Real plant telemetry data', 'Live scenario simulators'],
  }),
  r('Tools', {
    slug: 'energy-saving-estimator',
    title: 'Energy Saving Estimator',
    icon: 'Calculator',
    summary: 'Calculate factory lighting energy & carbon reductions',
    description: 'Enter your plant square footage, existing high-bay fixture wattage, and operating shifts to calculate electricity savings from mmWave radar lighting automation.',
    highlights: [
      h('Simple plant inputs', 'Input factory bay area, operating shift hours, and local electricity rate per kWh.'),
      h('Verified energy models', 'Calculates annual megawatt-hour savings, carbon offset tonnage, and payback period.'),
      h('Actionable roadmap', 'Receive a prioritized schedule of plant zones with the highest energy-saving potential.'),
    ],
    bullets: ['Instant financial estimate', 'Supports DALI and 0-10V retrofits', 'Downloadable executive report'],
  }),

  r('Learn', {
    slug: 'runbooks',
    title: 'Deployment Runbooks',
    icon: 'FileText',
    summary: 'Engineering guides for deploying BLE AoA, UWB & mmWave',
    description: 'Step-by-step engineering playbooks for deploying industrial RTLS locators, UWB anchors, LoRaWAN gateways, and mmWave radar in automotive facilities.',
    highlights: [
      h('Physical installation', 'Mounting heights, angles, and power considerations for high-bay factory environments.'),
      h('RF calibration', 'Mitigating multipath reflections from metal vehicle bodies and overhead conveyors.'),
      h('MES/PLC commissioning', 'Connecting location streams to Siemens S7, Allen-Bradley ControlLogix, and SAP MES.'),
    ],
    bullets: ['Detailed wiring diagrams', 'Cabling and PoE specifications', 'Maintained by our deployment engineers'],
  }),
  r('Learn', {
    slug: 'design-deployment-module',
    title: 'Design & Deployment Module',
    icon: 'Cpu',
    summary: 'Outcome-ready industrial RTLS architecture',
    isNew: true,
    description: 'Transform your plant layout into a verified deployment design with exact device counts, anchor coordinates, and network configuration profiles.',
    highlights: [
      h('Coverage validation', 'Verify sub-meter AoA and centimeter UWB coverage before running factory cabling.'),
      h('Interlock testing', 'Configure fail-safe safety exclusion zones for robotic welding cells.'),
      h('Commissioning toolset', 'Mobile technician app to walk the line and confirm location accuracy against ground-truth benchmarks.'),
    ],
    bullets: ['Factory-floor installer guides', 'Signal heatmaps and link margins', 'Automated accuracy verification'],
  }),
  r('Learn', {
    slug: 'faqs',
    title: 'Automotive RTLS FAQs',
    icon: 'HelpCircle',
    summary: 'Answers to commonly asked automotive RTLS questions',
    description: 'Clear engineering answers about RF multipath in steel plants, tag battery endurance in paint ovens, LoRaWAN yard range, and mmWave worker privacy.',
    highlights: [
      h('Metal reflection handling', 'How BLE AoA antenna arrays and UWB time-stamping isolate direct line-of-sight from reflections.'),
      h('High-temperature tags', 'How paint shop RFID/BLE tags endure 250°C E-coat and paint curing ovens.'),
      h('Camera-free worker privacy', 'Why mmWave radar complies with European Works Councils and union privacy regulations.'),
    ],
    bullets: ['Grouped by technology & application', 'Regularly updated with OEM questions', 'Direct engineering contact for custom queries'],
  }),
  r('Learn', {
    slug: 'developer-hub',
    title: 'Developer Hub & APIs',
    icon: 'Code2',
    summary: 'Integrate Locus RTLS with MES, ERP, and SCADA',
    description: 'Complete API references, MQTT streaming brokers, and SDKs to push vehicle location, dwell metrics, and mmWave presence into your manufacturing software.',
    highlights: [
      h('MQTT & OPC-UA streams', 'High-throughput event streaming for real-time PLC and automated guided vehicle integration.'),
      h('REST & GraphQL APIs', 'Query vehicle build history, tag coordinates, and plant-wide spatial analytics.'),
      h('Factory digital twin SDK', 'Embed interactive 3D assembly line maps into your existing web and desktop MES interfaces.'),
    ],
    bullets: ['Open API schemas and Postman collections', 'Sample code in Python, C++, and Node.js', 'Simulated automotive plant sandbox'],
  }),

  r('Events', {
    slug: 'webinars',
    title: 'Webinars & Tech Talks',
    icon: 'Video',
    summary: 'Watch automotive RTLS and smart plant engineering sessions',
    description: 'Live webinars and on-demand engineering tech talks covering production line tracking, finished yard management, and mmWave factory energy automation.',
    highlights: [
      h('Live engineering panels', 'Join automotive plant directors and RTLS architects as they discuss real deployment lessons.'),
      h('On-demand technical deep dives', 'Learn how to calibrate BLE AoA in dense stamping halls and optimize LoRaWAN yard antennas.'),
      h('Customer OEM showcases', 'See live demonstrations of operating automotive digital twins and smart torque wrench setups.'),
    ],
    bullets: ['Free to attend for manufacturing professionals', 'Technical Q&A with system architects', 'New sessions hosted monthly'],
  }),
  r('Events', {
    slug: 'events-calendar',
    title: 'Events Calendar',
    icon: 'Calendar',
    summary: 'Meet Locus at automotive manufacturing & IoT summits',
    description: 'Visit our hands-on demonstration booths at leading automotive manufacturing expos, Industry 4.0 summits, and logistics conferences worldwide.',
    highlights: [
      h('Automotive manufacturing expos', 'See live demonstrations of chassis tracking and mmWave radar lighting automation.'),
      h('Technical workshops', 'Attend hands-on training sessions on plant RTLS design and UWB calibration.'),
      h('Private plant briefings', 'Schedule an executive briefing with our industrial engineering leadership at major events.'),
    ],
    bullets: ['Global automotive events schedule', 'Book 1-on-1 booth meetings in advance', 'Live hardware demonstrations on site'],
  }),
]

export const resourcePromo = {
  badge: 'NEW',
  label: 'Locus Studio',
  title: 'Design your plant for Automotive RTLS & mmWave Automation',
  href: '/resources/locus-studio',
}

export const allInfo: InfoPageData[] = [...discover, ...resources]
export const findInfo = (group: InfoPageData['group'], slug: string) => allInfo.find((i) => i.group === group && i.slug === slug)
