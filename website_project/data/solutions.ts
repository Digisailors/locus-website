export type SolutionGroup = 'featured' | 'usecase' | 'industry' | 'team'

export interface Solution {
  slug: string
  title: string
  group: SolutionGroup
  icon: string
  tagline: string
  description: string
  image?: string
  tags?: string[]
  metrics: { value: string; label: string }[]
  benefits: { title: string; description: string }[]
  features: string[]
  related: string[]
}

type S = Solution
const f = (o: Omit<S, 'group'>, group: SolutionGroup): S => ({ ...o, group })

export const solutions: Solution[] = [
  // ==========================================
  // ---------- FEATURED AUTOMOTIVE -----------
  // ==========================================
  f({
    slug: 'production-line-tracking',
    title: 'Vehicle Production Line Tracking',
    icon: 'Car',
    tagline: 'Stamping, BIW & Final Assembly RTLS',
    description: 'Continuous real-time tracking of automotive chassis, vehicle bodies, and WIP carriers through every workstation using BLE AoA locator gateways and UWB precision anchors.',
    image: '/images/cards/asset.svg',
    tags: ['Assembly Lines', 'WIP Tracking'],
    metrics: [
      { value: '<30cm', label: 'BLE AoA positioning precision' },
      { value: '85%', label: 'Reduction in WIP search time' },
      { value: '0', label: 'Assembly line sequencing errors' },
    ],
    benefits: [
      { title: 'Zero assembly delays', description: 'Eliminate lost tooling, misplaced body dollies, and sequencing errors across multi-bay production lines.' },
      { title: 'Automated MES station handoffs', description: 'Auto-confirm vehicle arrival, cycle start, and station completion without manual barcode or RFID scans.' },
      { title: 'Takt time optimization', description: 'Detect station bottlenecks, buffer overruns, and dwell-time variances in real time.' },
    ],
    features: [
      'Sub-meter BLE AoA locator gateway mesh',
      'Automated workstation geofencing',
      'Direct PLC, MES & ERP (SAP) integration',
      'Full vehicle chassis movement playback',
    ],
    related: ['chassis-marriage', 'tool-tracking', 'ble-aoa-gateways', 'uwb-precision'],
  }, 'featured'),

  f({
    slug: 'yard-management',
    title: 'Finished Vehicle Yard Management',
    icon: 'Truck',
    tagline: 'LoRaWAN GPS Logistics & Holding Lots',
    description: 'Locate thousands of finished cars, test-track fleets, and transit haulers across extensive outdoor holding yards with multi-kilometer LoRaWAN-based GPS trackers.',
    image: '/images/cards/map.svg',
    tags: ['Outdoor Logistics', 'Finished Cars'],
    metrics: [
      { value: '15km', label: 'LoRaWAN gateway outdoor range' },
      { value: '<2m', label: 'GPS slot-level vehicle locating' },
      { value: '90%', label: 'Faster driver dispatch to parked cars' },
    ],
    benefits: [
      { title: 'Instant vehicle slot locating', description: 'Drivers navigate straight to the exact row and slot of the target VIN in massive multi-acre holding lots.' },
      { title: 'Automated shipping dispatch', description: 'Coordinate car haulers, railcars, and roll-on/roll-off shipping lines with automated entry and exit geofences.' },
      { title: 'Multi-year battery performance', description: 'Ultra-low-power LoRaWAN trackers operate for years without battery replacement or recurring cellular fees.' },
    ],
    features: [
      'Multi-acre outdoor staging lot mapping',
      'VIN-to-GPS tracker instant pairing',
      'Automated yard gate check-in & check-out',
      'Offline battery telemetry & anti-tamper alerts',
    ],
    related: ['lorawan-gps', 'distribution-centers', 'commercial-trucks'],
  }, 'featured'),

  f({
    slug: 'facility-automation',
    title: 'mmWave Lighting & Occupancy',
    icon: 'Zap',
    tagline: 'Industrial Smart Lighting & Safety Radar',
    description: 'Transform plant energy efficiency with 60GHz/77GHz mmWave micro-motion radar sensors that automate high-bay lighting and monitor worker cell occupancy without optical cameras.',
    image: '/images/cards/analytics.svg',
    tags: ['Energy Automation', 'mmWave Radar'],
    metrics: [
      { value: '45%', label: 'Lighting electricity saved' },
      { value: '100%', label: 'Camera-free privacy compliance' },
      { value: '<50ms', label: 'Micro-motion detection latency' },
    ],
    benefits: [
      { title: 'Automated high-bay illumination', description: 'Dynamically brighten assembly aisles and paint bays when workers or AGVs enter; dim when idle to slash electrical overhead.' },
      { title: 'Workstation dwell & safety monitoring', description: 'Track operator presence at critical assembly stations and alert on restricted machinery exclusion zones.' },
      { title: 'Non-invasive privacy compliance', description: 'Full spatial awareness and occupancy counts without recording video or personal biometric data.' },
    ],
    features: [
      '60/77 GHz micro-motion radar sensing',
      'DALI / 0-10V lighting system integration',
      'Workstation dwell-time analytics',
      'Robotic cell exclusion zone triggers',
    ],
    related: ['lighting-automation', 'worker-safety-occupancy', 'mmwave-sensors'],
  }, 'featured'),

  // ==========================================
  // ---------- BY TECHNOLOGY & HARDWARE ------
  // ==========================================
  f({
    slug: 'ble-aoa-gateways',
    title: 'BLE & BLE AoA Gateways',
    icon: 'Radio',
    tagline: 'Sub-meter Angle-of-Arrival locator gateways',
    description: 'Industrial-grade Bluetooth Low Energy (BLE) gateways and Angle-of-Arrival (AoA) antenna arrays deliver 30–50 cm positioning for vehicle chassis, dollies, tooling carts, and mobile workstations.',
    metrics: [{ value: '30-50cm', label: 'Typical AoA precision' }, { value: '80m', label: 'Locator coverage radius' }, { value: '5+ yr', label: 'Tag battery lifetime' }],
    benefits: [
      { title: 'Dense factory floor tracking', description: 'Handles thousands of simultaneous asset tags in high-metal automotive environments.' },
      { title: 'Cost-effective scalability', description: 'Requires fewer gateways than legacy RSSI beacons while delivering reliable sub-meter precision.' },
      { title: 'Ruggedized industrial housing', description: 'IP67-rated enclosures resistant to dust, metal particulates, oil mists, and vibration.' },
    ],
    features: ['Multi-antenna array AoA calculation', 'BLE 5.1/5.2 Direction Finding standard', 'Power-over-Ethernet (PoE) connectivity', 'Ruggedized IP67 plant-floor enclosure'],
    related: ['production-line-tracking', 'uwb-precision', 'tool-tracking'],
  }, 'usecase'),

  f({
    slug: 'uwb-precision',
    title: 'UWB Precision Positioning',
    icon: 'Crosshair',
    tagline: 'Centimeter-accurate Ultra-Wideband tracking',
    description: 'Deploy 10–30 cm precision Ultra-Wideband (UWB) anchors and active tags for mission-critical automotive assembly stages, automated chassis marriage lines, and robotic cell interlocks.',
    metrics: [{ value: '10-30cm', label: 'Centimeter precision' }, { value: '<10ms', label: 'Update latency' }, { value: '99.9%', label: 'RF immunity to metal multipath' }],
    benefits: [
      { title: 'Zero-margin assembly alignment', description: 'Ensures body shells and chassis sub-frames are perfectly positioned before robotic bolting.' },
      { title: 'Smart tool interlocking', description: 'Enable electric torque wrenches only when the tool is physically inside the designated bolt zone.' },
      { title: 'High-speed robotic cell safety', description: 'Trigger immediate safety stops if an operator enters an active robotic welding or handling cell.' },
    ],
    features: ['Time-of-Flight (ToF) & TDoA RF positioning', 'Ultra-low latency sub-second updates', 'Torque wrench & tool bus controller interface', 'Automotive safety integrity (SIL-2 ready)'],
    related: ['chassis-marriage', 'tool-tracking', 'ble-aoa-gateways'],
  }, 'usecase'),

  f({
    slug: 'lorawan-gps',
    title: 'LoRaWAN GPS Tracking',
    icon: 'Navigation',
    tagline: 'Long-range outdoor vehicle and transit tracking',
    description: 'Track finished automobiles, shipping containers, and transport haulers across multi-kilometer outdoor staging lots, test tracks, and rail distribution docks with low-power LoRaWAN GPS devices.',
    metrics: [{ value: '15km', label: 'Outdoor LoRaWAN range' }, { value: '0', label: 'Cellular SIM / monthly fees' }, { value: '7+ yr', label: 'Battery operating life' }],
    benefits: [
      { title: 'Complete outdoor yard coverage', description: 'A single outdoor LoRaWAN gateway covers an entire car holding yard of up to 15 square kilometers.' },
      { title: 'No monthly carrier recurring costs', description: 'Operates on license-free industrial bands (868/915 MHz), completely bypassing costly cellular data plans.' },
      { title: 'Automated yard geofencing', description: 'Instant alerts whenever a vehicle leaves the compound, enters a transit lane, or reaches the shipping railhead.' },
    ],
    features: ['High-sensitivity multi-constellation GNSS', 'LoRaWAN 1.0.4/1.1 Class A/C protocol', 'Magnetic and OBD-II vehicle mount options', 'Anti-tamper shock & motion detection'],
    related: ['yard-management', 'distribution-centers', 'commercial-trucks'],
  }, 'usecase'),

  f({
    slug: 'mmwave-sensors',
    title: 'mmWave Radar Sensors',
    icon: 'Radar',
    tagline: '60/77 GHz micro-motion detection radar',
    description: 'Industrial millimeter-wave radar sensors detect minute human motions (breathing, hand movements) and AGV trajectories to automate lighting and monitor workstation occupancy without optical cameras.',
    metrics: [{ value: '60/77GHz', label: 'Radar frequency band' }, { value: '100%', label: 'Camera-free privacy compliance' }, { value: '0.1s', label: 'Presence detection response' }],
    benefits: [
      { title: 'Immune to factory environmental noise', description: 'Unaffected by ambient light, darkness, smoke, steam, dust, or temperature fluctuations in paint shops and welding bays.' },
      { title: 'Micro-motion sensitivity', description: 'Detects stationary workers sitting or standing at workstations, preventing accidental lighting shutoffs.' },
      { title: 'Camera-free worker privacy', description: 'Achieves GDPR/union-compliant worker safety and occupancy tracking without capturing optical video.' },
    ],
    features: ['High-frequency FMCW radar technology', 'Configurable 3D detection bounding boxes', 'DALI, Modbus & BACnet building protocol integration', 'Simultaneous multi-target trajectory tracking'],
    related: ['facility-automation', 'lighting-automation', 'worker-safety-occupancy'],
  }, 'usecase'),

  f({
    slug: 'chassis-marriage',
    title: 'Chassis & Powertrain Marriage',
    icon: 'Car',
    tagline: 'Synchronized alignment for marriage lines',
    description: 'Ensure exact physical and computational alignment between the vehicle body-in-white and the powertrain chassis skid before mechanical bolting and mating.',
    metrics: [{ value: '100%', label: 'Match verification' }, { value: '<15cm', label: 'Docking guidance tolerance' }, { value: '0s', label: 'Sequencing mismatch delay' }],
    benefits: [
      { title: 'Prevent costly mating collisions', description: 'Continuous centimeter verification ensures the body and engine/battery pack are aligned before lift.' },
      { title: 'Automated variant verification', description: 'Automatically verifies that custom order options (engine variant, battery pack size) match the vehicle body.' },
      { title: 'Audit-ready build record', description: 'Logs the exact timestamp, coordinates, and tool IDs for every married vehicle VIN.' },
    ],
    features: ['Dual-tag UWB alignment system', 'Skid conveyor speed synchronization', 'MES build manifest auto-validation', 'Error-proofing interlocks'],
    related: ['production-line-tracking', 'uwb-precision', 'passenger-ev'],
  }, 'usecase'),

  f({
    slug: 'tool-tracking',
    title: 'Smart Tooling & Torque Interlocks',
    icon: 'Wrench',
    tagline: 'Precision tool tracking and safety interlocks',
    description: 'Track pneumatic and electric torque wrenches, calibration fixtures, and specialized assembly tools. Automatically enable tools only when positioned inside the correct bolt pattern.',
    metrics: [{ value: '0', label: 'Missing torque operations' }, { value: '100%', label: 'Tool location visibility' }, { value: '50%', label: 'Faster calibration sweeps' }],
    benefits: [
      { title: 'Eliminate missing bolts', description: 'Tools remain disabled until placed at the correct workstation and active vehicle VIN.' },
      { title: 'Instant tool locating', description: 'Find high-value torque drivers, diagnostic tools, and battery lifters instantly across plant bays.' },
      { title: 'Automate calibration cycles', description: 'Track tool usage cycles and automatically trigger service when tools exceed tightening limits.' },
    ],
    features: ['UWB tag integration on smart tools', 'Active tool interlock relay signals', 'Automated calibration hour tracking', 'Tool zoning & anti-theft alarms'],
    related: ['production-line-tracking', 'uwb-precision', 'ble-aoa-gateways'],
  }, 'usecase'),

  f({
    slug: 'agv-material-flow',
    title: 'AGV & Material Tugger Flow',
    icon: 'Layers',
    tagline: 'Real-time AGV, tugger and parts bin routing',
    description: 'Optimize internal material delivery by tracking automated guided vehicles (AGVs), tugger trains, and parts racks between the warehouse and the assembly line.',
    metrics: [{ value: '35%', label: 'Higher AGV fleet utilization' }, { value: '0', label: 'Part starvation line stoppages' }, { value: 'Live', label: 'Tugger fleet tracking' }],
    benefits: [
      { title: 'Prevent part starvation', description: 'Monitor replenishment bin levels and tugger locations to ensure line stations never run out of components.' },
      { title: 'Fleet collision prevention', description: 'Provide real-time positioning to fleet managers to resolve aisle congestion and traffic deadlocks.' },
      { title: 'Empty rack return tracking', description: 'Ensure empty carrier bins and racks return promptly to stamping and supplier docks.' },
    ],
    features: ['Fleet location dashboard', 'Automated buffer replenishment triggers', 'Aisle congestion heatmaps', 'Sub-meter AGV route auditing'],
    related: ['production-line-tracking', 'ble-aoa-gateways', 'tier1-suppliers'],
  }, 'usecase'),

  f({
    slug: 'lighting-automation',
    title: 'High-Bay Lighting Automation',
    icon: 'Lightbulb',
    tagline: 'mmWave presence-triggered lighting control',
    description: 'Slash factory electrical consumption by automating high-bay industrial LED fixtures across production bays, press aisles, and warehouses using mmWave radar sensing.',
    metrics: [{ value: '40-55%', label: 'Lighting power cut' }, { value: '<100ms', label: 'Motion to light response' }, { value: 'Auto', label: 'DALI / 0-10V dimming' }],
    benefits: [
      { title: 'Substantial energy savings', description: 'Dims unoccupied production cells to 10% standby; brings fixtures to 100% illumination the instant workers or AGVs approach.' },
      { title: 'Zero nuisance switching', description: 'mmWave micro-motion radar holds lighting steady even when operators are standing still inspecting components.' },
      { title: 'Rapid payback period', description: 'Factory retrofits typically pay for themselves within 6 to 9 months in electricity savings alone.' },
    ],
    features: ['DALI / 0-10V industrial lighting bus integration', 'Zone-by-zone scheduling and LUX harvesting', 'Energy consumption analytics dashboard', 'Factory-floor occupancy heatmaps'],
    related: ['facility-automation', 'mmwave-sensors', 'facilities-energy'],
  }, 'usecase'),

  f({
    slug: 'worker-safety-occupancy',
    title: 'Production Cell Occupancy & Safety',
    icon: 'ShieldCheck',
    tagline: 'Workstation presence and exclusion zone safety',
    description: 'Monitor worker dwell time at manual assembly stations and enforce exclusion safety zones around hazardous presses and robotic weld cells using mmWave radar.',
    metrics: [{ value: '100%', label: 'Hazard zone coverage' }, { value: '<50ms', label: 'Emergency interlock response' }, { value: 'Zero', label: 'Camera privacy violations' }],
    benefits: [
      { title: 'Hazard zone protection', description: 'Instantly disengages automated machinery if a worker crosses into an active robot swing radius.' },
      { title: 'Assembly station dwell monitoring', description: 'Accurately measures operator cycle time per station to identify ergonomic strain or assembly bottlenecks.' },
      { title: 'Auditable safety logs', description: 'Provides digital timestamps of safety zone breaches for HSE (Health, Safety & Environment) audits.' },
    ],
    features: ['3D virtual exclusion boundary definition', 'Hardware fail-safe interlock outputs', 'Operator dwell & station balance analytics', 'Camera-free privacy compliance'],
    related: ['facility-automation', 'mmwave-sensors', 'chassis-marriage'],
  }, 'usecase'),

  f({
    slug: 'cycle-time-analytics',
    title: 'Takt Time & Bottleneck Analytics',
    icon: 'BarChart3',
    tagline: 'Line balance, dwell times & throughput insights',
    description: 'Convert real-time positioning data into actionable manufacturing intelligence. Identify micro-stoppages, station dwell variances, and production line bottlenecks.',
    metrics: [{ value: '100%', label: 'Station visibility' }, { value: '15%', label: 'Throughput capacity unlock' }, { value: 'Live', label: 'Takt time variance alerts' }],
    benefits: [
      { title: 'Uncover hidden bottlenecks', description: 'Pinpoint which specific station causes line delays across hundreds of assembly stages.' },
      { title: 'Live takt time monitoring', description: 'Get immediate visual alerts whenever a vehicle chassis stays longer than target cycle time.' },
      { title: 'Continuous line balancing', description: 'Compare assembly stations across shifts and vehicle models to balance labor and tooling.' },
    ],
    features: ['Per-workstation dwell time charts', 'Line takt time variance alerts', 'Historical shift and model comparisons', 'REST & GraphQL BI data export'],
    related: ['production-line-tracking', 'plant-operations', 'quality-engineering'],
  }, 'usecase'),

  // ==========================================
  // ---------- BY AUTOMOTIVE SECTOR ----------
  // ==========================================
  f({
    slug: 'passenger-ev',
    title: 'Passenger Cars & EV Manufacturing',
    icon: 'Car',
    tagline: 'High-speed EV skateboard & unibody assembly',
    description: 'End-to-end asset tracking for electric vehicle and passenger car plants. Synchronize battery pack marriage, motor installation, and unibody assembly with UWB and BLE AoA.',
    image: '/images/cards/office.svg',
    metrics: [{ value: '60s', label: 'Takt time capability' }, { value: '100%', label: 'Battery pack VIN traceability' }, { value: '80%', label: 'Faster rework routing' }],
    benefits: [
      { title: 'High-density tracking', description: 'Tracks hundreds of vehicles advancing concurrently along the moving floor chain.' },
      { title: 'EV battery pack safety', description: 'Monitor high-voltage battery storage zones with thermal sensors and precise spatial geofences.' },
      { title: 'Seamless rework loop tracking', description: 'Route vehicles requiring offline rectification to inspection bays without losing track in MES.' },
    ],
    features: ['High-speed moving assembly line tracking', 'High-voltage battery storage monitoring', 'Automated offline rework bay routing', 'MES build order integration'],
    related: ['production-line-tracking', 'chassis-marriage', 'uwb-precision'],
  }, 'industry'),

  f({
    slug: 'commercial-trucks',
    title: 'Commercial Trucks & Heavy Vehicles',
    icon: 'Truck',
    tagline: 'Heavy-duty chassis assembly & outdoor yards',
    description: 'Track heavy commercial truck frame rails, cab modules, and multi-axle configurations across massive indoor assembly halls and extensive outdoor testing tracks.',
    image: '/images/cards/stadium.svg',
    metrics: [{ value: '100%', label: 'Heavy chassis visibility' }, { value: '15km', label: 'Outdoor yard tracking radius' }, { value: '50%', label: 'Less yard driver dispatch time' }],
    benefits: [
      { title: 'Handle complex custom options', description: 'Commercial trucks feature thousands of custom axle and body variants; RTLS ensures the right component meets the right chassis.' },
      { title: 'Outdoor testing track tracing', description: 'LoRaWAN GPS trackers verify that newly built trucks complete required proving ground test laps.' },
      { title: 'Heavy component crane tracking', description: 'Track overhead cranes and engine hoists to ensure safe lifting operations in heavy bays.' },
    ],
    features: ['High-bay multi-crane tracking', 'Long-range LoRaWAN test track GPS', 'Custom variant sequencing verification', 'Heavy chassis dolly RTLS'],
    related: ['yard-management', 'lorawan-gps', 'tier1-suppliers'],
  }, 'industry'),

  f({
    slug: 'tier1-suppliers',
    title: 'Tier-1 Powertrain & Component Plants',
    icon: 'Factory',
    tagline: 'Engine blocks, transmissions & JIS delivery',
    description: 'Track precision machined parts, engine sub-assemblies, and just-in-sequence (JIS) shipping racks from supplier production cells directly to OEM assembly gates.',
    image: '/images/cards/laptop.svg',
    metrics: [{ value: '100%', label: 'JIS delivery accuracy' }, { value: '0', label: 'Lost parts containers' }, { value: '<30cm', label: 'Component bin positioning' }],
    benefits: [
      { title: 'Just-in-sequence guarantee', description: 'Verify that parts containers leave the supplier facility in the exact assembly sequence required by the OEM plant.' },
      { title: 'Returnable container management', description: 'Track valuable custom steel containers and plastic totes between supplier and car assembly plants.' },
      { title: 'Automated wash and test tracking', description: 'Record component passage through ultrasonic cleaning, leak testing, and CMM inspection.' },
    ],
    features: ['Returnable container tracking', 'Just-In-Sequence (JIS) delivery validation', 'Sub-meter parts bin locator mesh', 'Supplier-to-OEM transit tracking'],
    related: ['production-line-tracking', 'agv-material-flow', 'ble-aoa-gateways'],
  }, 'industry'),

  f({
    slug: 'stamping-body-shop',
    title: 'Stamping & Body-in-White (BIW)',
    icon: 'Boxes',
    tagline: 'Press dies, weld jigs & unibody sub-frames',
    description: 'Track heavy multi-ton stamping dies, robotic welding fixtures, and raw steel/aluminum coils across the press shop and Body-in-White automated welding lines.',
    image: '/images/cards/webinar.svg',
    metrics: [{ value: '70%', label: 'Faster die changeover search' }, { value: '0', label: 'Unibody weld sequencing errors' }, { value: '100%', label: 'Heavy die maintenance audit' }],
    benefits: [
      { title: 'Accelerate die changeovers', description: 'Locate the exact stamping die set and crane hook immediately for rapid press changeovers.' },
      { title: 'Weld jig fixture maintenance', description: 'Track the cumulative stroke counts and operating hours of welding fixtures to trigger preventive maintenance.' },
      { title: 'Harsh industrial RF resilience', description: 'Industrial BLE AoA and UWB filters out RF reflections from steel presses and weld sparks.' },
    ],
    features: ['Heavy die asset tracking', 'Robotic weld cell fixture auditing', 'Metallic multipath RF filtering', 'Maintenance cycle automation'],
    related: ['production-line-tracking', 'tool-tracking', 'ble-aoa-gateways'],
  }, 'industry'),

  f({
    slug: 'paint-shop',
    title: 'Paint Shop Operations',
    icon: 'Sliders',
    tagline: 'Skids, drying ovens & booth automation',
    description: 'Track vehicle skids, electro-coating carriers, and paint drying cycles through ovens and robotic spray booths with heat-resistant tags and mmWave lighting.',
    image: '/images/cards/ebook.svg',
    metrics: [{ value: '250°C', label: 'Tag temperature rating' }, { value: '100%', label: 'Paint cure cycle verification' }, { value: '45%', label: 'Paint booth lighting savings' }],
    benefits: [
      { title: 'Extreme temperature tag endurance', description: 'Specialized tags survive repeated passes through E-coat dip tanks and high-heat drying ovens.' },
      { title: 'Automated paint color sequencing', description: 'Confirm vehicle color codes with the robotic spray controller before paint application begins.' },
      { title: 'Energy-saving booth lighting', description: 'mmWave radar senses workers in inspection booths and dims lighting during automated spray cycles.' },
    ],
    features: ['High-temp oven-rated RFID/BLE tags', 'Automated paint sequencing check', 'Inspection booth mmWave lighting control', 'Carrier skid cycle count logging'],
    related: ['facility-automation', 'lighting-automation', 'mmwave-sensors'],
  }, 'industry'),

  f({
    slug: 'distribution-centers',
    title: 'Finished Vehicle Distribution & Docks',
    icon: 'Building2',
    tagline: 'Ro-Ro shipping, railheads & export logistics',
    description: 'Coordinate thousands of finished vehicles preparing for dealership delivery, rail car loading, or ocean roll-on/roll-off (Ro-Ro) vessel boarding.',
    image: '/images/cards/hospital.svg',
    metrics: [{ value: '20,000+', label: 'Vehicles managed per yard' }, { value: '<2min', label: 'Time to locate any VIN' }, { value: '100%', label: 'Shipping manifest accuracy' }],
    benefits: [
      { title: 'Rapid ship & rail loading', description: 'Drivers retrieve vehicles in the exact sequence required for multi-deck rail cars or ocean vessel decks.' },
      { title: 'Multi-OEM yard sharing', description: 'Secure multi-tenant yard management software segments vehicles by brand, carrier, and destination.' },
      { title: 'Battery health & movement logs', description: 'Monitors vehicle dwell time to trigger battery maintenance before long-term storage discharge.' },
    ],
    features: ['High-density vehicle parking grid', 'Automated loading manifest verification', 'Long-range LoRaWAN GPS yard tags', 'Mobile driver guidance app'],
    related: ['yard-management', 'lorawan-gps', 'commercial-trucks'],
  }, 'industry'),

  // ==========================================
  // ---------- BY OPERATIONS TEAM ------------
  // ==========================================
  f({
    slug: 'plant-operations',
    title: 'Plant Operations & Leadership',
    icon: 'Gauge',
    tagline: 'Real-time production visibility & takt times',
    description: 'Empower plant managers and line directors with real-time digital twins of the entire automotive facility, live shift KPIs, and bottleneck alerts.',
    image: '/images/cards/guest.svg',
    metrics: [{ value: 'Live', label: 'Factory digital twin updates' }, { value: '12%', label: 'Overall equipment effectiveness gain' }, { value: '100%', label: 'Assembly shift traceability' }],
    benefits: [
      { title: 'Instant plant-wide visibility', description: 'See every vehicle body, tool cart, and AGV moving on a unified live factory canvas.' },
      { title: 'Proactive delay alerts', description: 'Receive instant notifications when any station exceeds target cycle time, before the line stops.' },
      { title: 'Cross-shift benchmarking', description: 'Compare cycle time efficiency across morning, evening, and night shifts.' },
    ],
    features: ['Plant-wide 3D spatial twin', 'Live takt time & station dwell monitors', 'Shift efficiency reporting', 'Executive KPI dashboards'],
    related: ['cycle-time-analytics', 'production-line-tracking', 'quality-engineering'],
  }, 'team'),

  f({
    slug: 'quality-engineering',
    title: 'Quality & Assembly Engineering',
    icon: 'ShieldCheck',
    tagline: 'End-of-line quality & torque verification',
    description: 'Ensure every vehicle leaves the assembly plant with 100% verified torque operations, zero sequencing errors, and complete digital build passports.',
    image: '/images/cards/blog.svg',
    metrics: [{ value: '100%', label: 'Fastener verification' }, { value: '0', label: 'Unverified torque records' }, { value: '100%', label: 'Digital build passport audit' }],
    benefits: [
      { title: 'Flawless build traceability', description: 'Link every torque reading and inspection result directly to the vehicle VIN and station ID.' },
      { title: 'Automated defect containment', description: 'Geofence quarantined vehicles so they cannot accidentally leave the plant before rework approval.' },
      { title: 'Rapid recall root-cause analysis', description: 'Query historic spatial telemetry to identify every vehicle built during a specific tooling anomaly.' },
    ],
    features: ['VIN-to-torque tool digital passport', 'Automated quality quarantine geofencing', 'End-of-line tester verification', 'Audit-ready compliance export'],
    related: ['tool-tracking', 'chassis-marriage', 'production-line-tracking'],
  }, 'team'),

  f({
    slug: 'facilities-energy',
    title: 'Facilities & Energy Management',
    icon: 'Leaf',
    tagline: 'Automated factory lighting & ESG compliance',
    description: 'Cut industrial electrical consumption with mmWave presence-driven lighting automation, optimize factory HVAC, and produce auditable sustainability reports.',
    image: '/images/cards/events.svg',
    metrics: [{ value: '45%', label: 'Factory lighting electricity saved' }, { value: 'Auto', label: 'ESG sustainability reports' }, { value: '<9mo', label: 'Typical investment payback' }],
    benefits: [
      { title: 'Dramatically reduce power bills', description: 'Only illuminate active work zones and AGV transit corridors, dimming idle bays automatically.' },
      { title: 'Automated ESG reporting', description: 'Generate verifiable energy reduction and carbon footprint reduction records for regulatory audits.' },
      { title: 'Building system interoperability', description: 'Connects effortlessly to Siemens, Honeywell, Schneider, and Johnson Controls BMS platforms.' },
    ],
    features: ['mmWave lighting zone automation', 'Building Management System (BMS) APIs', 'Factory power consumption dashboards', 'Automated carbon reduction auditing'],
    related: ['facility-automation', 'lighting-automation', 'mmwave-sensors'],
  }, 'team'),

  f({
    slug: 'logistics-supply-chain',
    title: 'Intralogistics & Supply Chain',
    icon: 'Package',
    tagline: 'WIP buffer flow, tugger fleets & yard dispatch',
    description: 'Coordinate internal parts movement between warehouses, staging buffers, and assembly lines, alongside outdoor finished car holding lots.',
    image: '/images/cards/laptop.svg',
    metrics: [{ value: '99.5%', label: 'Parts delivery punctuality' }, { value: '80%', label: 'Faster driver vehicle dispatch' }, { value: '0', label: 'Material starvation incidents' }],
    benefits: [
      { title: 'Synchronized parts delivery', description: 'Ensure tugger trains deliver component totes exactly when the assembly line requires them.' },
      { title: 'Zero lost parts carriers', description: 'Track custom steel packaging racks across supplier shipping loops and prevent inventory write-offs.' },
      { title: 'Unified indoor/outdoor logistics', description: 'Seamless transition from indoor BLE AoA factory tracking to outdoor LoRaWAN GPS yard logistics.' },
    ],
    features: ['Indoor/outdoor unified logistics map', 'Material buffer replenishment triggers', 'Carrier rack inventory auditing', 'Driver yard dispatch mobile tools'],
    related: ['agv-material-flow', 'yard-management', 'lorawan-gps'],
  }, 'team'),
]

export const bySlug = (slug: string) => solutions.find((s) => s.slug === slug)
export const byGroup = (group: SolutionGroup) => solutions.filter((s) => s.group === group)
