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
  // ---------- Featured ----------
  f({
    slug: 'smart-workspaces', title: 'Smart Workspaces', icon: 'Building2',
    tagline: 'Hybrid work & sustainability',
    description: 'Understand how people really use your offices, then reshape floors, desks and energy use around real behaviour instead of assumptions.',
    image: '/images/universities_campus.png', tags: ['Workspaces', 'Campus'],
    metrics: [{ value: '30%', label: 'Real estate cost reduction' }, { value: '25%', label: 'Lower energy consumption' }, { value: '4x', label: 'Faster space planning' }],
    benefits: [
      { title: 'Right-size your portfolio', description: 'Live occupancy and utilisation data shows which floors, rooms and desks are under-used so you can consolidate with confidence.' },
      { title: 'Power a better hybrid experience', description: 'Employees find colleagues, book desks and navigate buildings from one app, cutting the friction of hybrid days.' },
      { title: 'Hit sustainability targets', description: 'Tie HVAC and lighting to actual presence and prove carbon savings with auditable data.' },
    ],
    features: ['Floor-level occupancy heatmaps', 'Desk and room analytics', 'Building-wide indoor navigation', 'Energy and ESG reporting'],
    related: ['space-utilization', 'smart-desking', 'meeting-room-finder', 'energy-efficiency'],
  }, 'featured'),
  f({
    slug: 'smart-healthcare', title: 'Smart Healthcare', icon: 'HeartPulse',
    tagline: 'Operational efficiency & safety',
    description: 'Give clinical and facilities teams instant visibility of equipment, patients and staff so care moves faster and safer.',
    image: '/images/healthcare_hero.webp', tags: ['Healthcare', 'Manufacturing'],
    metrics: [{ value: '40%', label: 'Less time searching for equipment' }, { value: '20%', label: 'Higher asset utilisation' }, { value: '<3s', label: 'Alert response latency' }],
    benefits: [
      { title: 'Find critical equipment instantly', description: 'Pumps, wheelchairs and monitors are located on a live map, ending the hunt at the start of every shift.' },
      { title: 'Protect patients and staff', description: 'Geofenced alerts for infant protection, wandering patients and restricted zones trigger in seconds.' },
      { title: 'Streamline patient flow', description: 'Track wait times and bottlenecks across departments to reduce delays and improve throughput.' },
    ],
    features: ['Real-time equipment location', 'Infant and patient protection', 'Wayfinding for visitors', 'Workflow and wait-time analytics'],
    related: ['asset-tracking', 'detect-locate', 'healthcare', 'patient-experience'],
  }, 'featured'),
  f({
    slug: 'smart-venues', title: 'Smart Venues', icon: 'Trophy',
    tagline: 'Customer acquisition & engagement',
    description: 'Turn stadiums, malls and hospitality sites into connected experiences that attract visitors, guide them and keep them coming back.',
    image: '/images/sport_hero.webp', tags: ['Hospitality', 'Retail'],
    metrics: [{ value: '2.5x', label: 'Guest Wi-Fi opt-in rate' }, { value: '18%', label: 'Increase in dwell time' }, { value: '35%', label: 'Higher campaign conversion' }],
    benefits: [
      { title: 'Know your visitors', description: 'Anonymous footfall, dwell and journey analytics reveal what draws people in and where they drop off.' },
      { title: 'Engage at the right moment', description: 'Deliver offers and information based on where a guest is and what they are doing.' },
      { title: 'Manage crowds safely', description: 'Live density views help operations teams keep queues short and exits clear.' },
    ],
    features: ['Guest Wi-Fi onboarding', 'Venue wayfinding', 'Live crowd density', 'Location-triggered campaigns'],
    related: ['guest-wifi-onboarding', 'contextual-engagements', 'density-monitoring', 'stadium-venue'],
  }, 'featured'),

  // ---------- By Usecase ----------
  f({
    slug: 'occupancy-monitoring', title: 'Occupancy Monitoring', icon: 'Users',
    tagline: 'See how many people are where, right now',
    description: 'Real-time and historical headcount for every floor, zone and room, without cameras or badge swipes.',
    metrics: [{ value: '95%', label: 'Counting accuracy' }, { value: 'Live', label: 'Zone level updates' }, { value: '24/7', label: 'Historical trends' }],
    benefits: [
      { title: 'Live visibility', description: 'Dashboards refresh continuously so facilities and security teams always know current occupancy.' },
      { title: 'Compliance ready', description: 'Enforce capacity limits and produce audit-ready records for fire and safety regulations.' },
      { title: 'Plan with evidence', description: 'Compare peak, average and idle occupancy by day, week and season.' },
    ],
    features: ['Per-zone people counts', 'Capacity threshold alerts', 'Peak and idle trend reports', 'API and BI integrations'],
    related: ['density-monitoring', 'space-utilization', 'location-analytics'],
  }, 'usecase'),
  f({
    slug: 'asset-tracking', title: 'Asset Tracking', icon: 'Package',
    tagline: 'Locate any tagged asset in seconds',
    description: 'BLE and UWB tags place equipment, tools and inventory on a live indoor map with full movement history.',
    image: '/images/warehouse_tracking.webp',
    metrics: [{ value: '1-3m', label: 'Typical location accuracy' }, { value: '70%', label: 'Less search time' }, { value: '15%', label: 'Fewer lost assets' }],
    benefits: [
      { title: 'Stop searching, start working', description: 'Search by name or type and see the nearest available item on the map.' },
      { title: 'Reduce loss and over-purchasing', description: 'Know what you own and where it sits, so you buy only what you need.' },
      { title: 'Automate workflows', description: 'Trigger maintenance, cleaning or restock tasks when assets enter or leave zones.' },
    ],
    features: ['Live asset map', 'Movement history playback', 'Zone entry and exit alerts', 'Maintenance status tracking'],
    related: ['detect-locate', 'smart-healthcare', 'manufacturing'],
  }, 'usecase'),
  f({
    slug: 'contextual-engagements', title: 'Contextual Engagements', icon: 'MessageSquare',
    tagline: 'The right message at the right place',
    description: 'Send notifications, offers and guidance triggered by where a person is and how long they have been there.',
    metrics: [{ value: '3x', label: 'Higher engagement' }, { value: '35%', label: 'Conversion uplift' }, { value: '<1s', label: 'Trigger latency' }],
    benefits: [
      { title: 'Relevant by design', description: 'Location, dwell time and visit history shape every message so it feels useful, not intrusive.' },
      { title: 'Privacy first', description: 'Opt-in identity and configurable retention keep you aligned with regional privacy rules.' },
      { title: 'Measure real impact', description: 'Connect each engagement to the visits and purchases that follow.' },
    ],
    features: ['Geofence and dwell triggers', 'Rich in-app and web messages', 'Audience segmentation', 'Campaign attribution reports'],
    related: ['guest-wifi-onboarding', 'location-analytics', 'retail'],
  }, 'usecase'),
  f({
    slug: 'location-analytics', title: 'Location Analytics', icon: 'BarChart3',
    tagline: 'Footfall, dwell and journey insights',
    description: 'Understand visitor and employee movement across your sites with analytics built on precise indoor positioning.',
    metrics: [{ value: '100%', label: 'Site coverage' }, { value: '12mo', label: 'Trend history' }, { value: '10+', label: 'Ready-made reports' }],
    benefits: [
      { title: 'Follow the journey', description: 'Path analysis shows how people enter, move and leave, and where they linger.' },
      { title: 'Compare locations', description: 'Benchmark sites, floors and zones to find best and worst performers.' },
      { title: 'Share insights anywhere', description: 'Export data or stream it to your BI stack through open APIs.' },
    ],
    features: ['Footfall and dwell dashboards', 'Repeat visitor analysis', 'Path and flow diagrams', 'Scheduled report delivery'],
    related: ['occupancy-monitoring', 'density-monitoring', 'contextual-engagements'],
  }, 'usecase'),
  f({
    slug: 'density-monitoring', title: 'Density Monitoring', icon: 'Activity',
    tagline: 'Spot crowding before it becomes a problem',
    description: 'Live heatmaps highlight congested areas so teams can redirect flow, open queues and keep people safe.',
    metrics: [{ value: 'Live', label: 'Heatmap refresh' }, { value: '50%', label: 'Shorter queue times' }, { value: '100%', label: 'Threshold alerting' }],
    benefits: [
      { title: 'Act before it is crowded', description: 'Set thresholds per zone and get notified the moment density climbs.' },
      { title: 'Keep people safe', description: 'Support social distancing, egress planning and emergency response with live crowd data.' },
      { title: 'Improve the experience', description: 'Shorter queues and smoother movement raise satisfaction scores.' },
    ],
    features: ['Real-time density heatmaps', 'Zone threshold alerts', 'Queue length estimates', 'Historical peak analysis'],
    related: ['occupancy-monitoring', 'stadium-venue', 'airport'],
  }, 'usecase'),
  f({
    slug: 'detect-locate', title: 'Detect & Locate', icon: 'Radar',
    tagline: 'Find devices, people and tags on the map',
    description: 'Detect any Wi-Fi or BLE device on your network and pinpoint where it is, from a single search box.',
    metrics: [{ value: '3-5m', label: 'Device accuracy' }, { value: '<5s', label: 'Search to result' }, { value: '1', label: 'Unified map' }],
    benefits: [
      { title: 'One search for everything', description: 'Look up a MAC address, tag ID or asset name and jump straight to its last known position.' },
      { title: 'Respond faster', description: 'Security and IT teams locate rogue or lost devices in seconds.' },
      { title: 'Works with what you have', description: 'Uses your existing wireless infrastructure and adds tags only where you need precision.' },
    ],
    features: ['Wi-Fi and BLE detection', 'Last-seen history', 'Rogue device alerts', 'Floor plan overlays'],
    related: ['asset-tracking', 'ap-auto-location', 'indoor-navigation'],
  }, 'usecase'),
  f({
    slug: 'guest-wifi-onboarding', title: 'Guest Wi-Fi Onboarding', icon: 'Wifi',
    tagline: 'Turn Wi-Fi into a welcome mat',
    description: 'Branded captive portals with social, form and OTP login capture consented visitor profiles in seconds.',
    metrics: [{ value: '2.5x', label: 'Higher opt-in' }, { value: '<10s', label: 'To get online' }, { value: '100%', label: 'Consent tracked' }],
    benefits: [
      { title: 'Fast, friction-free login', description: 'Guests connect in a few taps using the method they prefer.' },
      { title: 'Build first-party data', description: 'Collect consented profiles that feed your CRM and campaigns.' },
      { title: 'On-brand everywhere', description: 'Custom portals per site, language and audience.' },
    ],
    features: ['Social, OTP and form login', 'Multi-language portals', 'Consent and terms management', 'CRM integrations'],
    related: ['contextual-engagements', 'smart-venues', 'hospitality'],
  }, 'usecase'),
  f({
    slug: 'energy-efficiency', title: 'Energy Efficiency', icon: 'Leaf',
    tagline: 'Power only the spaces people use',
    description: 'Feed real occupancy into HVAC and lighting systems to cut waste and report verified carbon savings.',
    metrics: [{ value: '25%', label: 'Energy saved' }, { value: '18%', label: 'HVAC cost reduction' }, { value: 'Auto', label: 'ESG reporting' }],
    benefits: [
      { title: 'Presence-based control', description: 'Condition and light only occupied zones, with pre-cooling based on predicted arrivals.' },
      { title: 'Prove the savings', description: 'Correlate occupancy and consumption to produce audit-ready sustainability reports.' },
      { title: 'Integrate with your BMS', description: 'Open APIs connect to leading building management platforms.' },
    ],
    features: ['Occupancy-driven HVAC signals', 'Lighting automation', 'Carbon and cost dashboards', 'BMS integration'],
    related: ['smart-rooms', 'space-utilization', 'smart-workspaces'],
  }, 'usecase'),
  f({
    slug: 'meeting-room-finder', title: 'Meeting Room Finder', icon: 'DoorOpen',
    tagline: 'Find and book a free room instantly',
    description: 'Show which rooms are genuinely empty, guide people there and release ghost bookings automatically.',
    metrics: [{ value: '20%', label: 'More rooms available' }, { value: '0', label: 'Ghost bookings' }, { value: '<30s', label: 'To find a room' }],
    benefits: [
      { title: 'Real availability', description: 'Presence sensing shows what is actually free, beyond what the calendar says.' },
      { title: 'Turn-by-turn guidance', description: 'Navigate straight to the room from wherever you are in the building.' },
      { title: 'Recover wasted bookings', description: 'No-show meetings release rooms automatically after a grace period.' },
    ],
    features: ['Live room status', 'Calendar integration', 'Auto release on no-show', 'Capacity and equipment filters'],
    related: ['smart-rooms', 'indoor-navigation', 'smart-desking'],
  }, 'usecase'),
  f({
    slug: 'indoor-navigation', title: 'Indoor Navigation', icon: 'Navigation',
    tagline: 'Blue-dot wayfinding inside any building',
    description: 'Give visitors, patients and employees turn-by-turn directions across floors, wings and campuses.',
    image: '/images/museum_navigation.jpg',
    metrics: [{ value: '1-3m', label: 'Positioning accuracy' }, { value: '40%', label: 'Fewer missed appointments' }, { value: 'SDK', label: 'iOS, Android and web' }],
    benefits: [
      { title: 'Never get lost', description: 'Accessible routes, elevators and points of interest are all searchable on the map.' },
      { title: 'Embed in your app', description: 'Ship wayfinding inside your own mobile app using our SDKs.' },
      { title: 'Ease staff workload', description: 'Fewer directions questions at reception and fewer late arrivals.' },
    ],
    features: ['Multi-floor routing', 'Accessible route options', 'Point of interest search', 'Mobile SDK and web maps'],
    related: ['meeting-room-finder', 'detect-locate', 'airport'],
  }, 'usecase'),
  f({
    slug: 'ap-auto-location', title: 'AP Auto Location', icon: 'MapPin',
    tagline: 'Place every access point automatically',
    description: 'Auto-position access points on your floor plans instead of surveying them by hand.',
    metrics: [{ value: '90%', label: 'Less manual placement' }, { value: 'Hours', label: 'Not weeks to deploy' }, { value: '100%', label: 'Map coverage' }],
    benefits: [
      { title: 'Deploy in hours', description: 'Locate hundreds of APs from radio measurements alone.' },
      { title: 'Improve accuracy', description: 'Correct placements feed higher-quality positioning for every other use case.' },
      { title: 'Stay accurate over time', description: 'Detect moved or added APs automatically and update the map.' },
    ],
    features: ['Automatic AP placement', 'Floor plan import', 'Move detection', 'Bulk validation tools'],
    related: ['detect-locate', 'indoor-navigation', 'location-analytics'],
  }, 'usecase'),
  f({
    slug: 'smart-rooms', title: 'Smart Rooms', icon: 'Lightbulb',
    tagline: 'Rooms that respond to the people in them',
    description: 'Combine presence, environment and booking data to make every room comfortable, efficient and ready.',
    metrics: [{ value: '22%', label: 'Better room utilisation' }, { value: 'Auto', label: 'Environment control' }, { value: 'Live', label: 'Room health' }],
    benefits: [
      { title: 'Comfort on demand', description: 'Adjust temperature and lighting when people arrive, not before or after.' },
      { title: 'Clean when needed', description: 'Trigger cleaning by real usage rather than a fixed schedule.' },
      { title: 'Know room health', description: 'Track air quality, temperature and occupancy in a single view.' },
    ],
    features: ['Presence sensing', 'Environmental readings', 'Usage-based cleaning', 'Room analytics'],
    related: ['meeting-room-finder', 'energy-efficiency', 'space-utilization'],
  }, 'usecase'),
  f({
    slug: 'space-utilization', title: 'Space Utilization', icon: 'LayoutGrid',
    tagline: 'Make every square metre earn its keep',
    description: 'Measure how each desk, room and floor is used across time to inform layout and lease decisions.',
    metrics: [{ value: '30%', label: 'Space savings' }, { value: '12mo', label: 'Usage history' }, { value: '4x', label: 'Faster planning' }],
    benefits: [
      { title: 'Data-led portfolio decisions', description: 'Back consolidation and lease renewals with months of measured usage.' },
      { title: 'Design better layouts', description: 'Discover which space types people choose and rebalance accordingly.' },
      { title: 'Benchmark buildings', description: 'Compare floors and sites on a single utilisation scale.' },
    ],
    features: ['Desk, room and floor utilisation', 'Peak versus average analysis', 'Space type comparisons', 'Executive summary reports'],
    related: ['occupancy-monitoring', 'smart-desking', 'real-estate'],
  }, 'usecase'),
  f({
    slug: 'smart-desking', title: 'Smart Desking', icon: 'Armchair',
    tagline: 'Hybrid desk booking that just works',
    description: 'Let people find colleagues, reserve a desk and check in effortlessly, with unused bookings released automatically.',
    metrics: [{ value: '35%', label: 'Higher desk utilisation' }, { value: '2 taps', label: 'To book' }, { value: 'Auto', label: 'Check-in' }],
    benefits: [
      { title: 'Sit near your team', description: 'See where colleagues are working and book adjacent desks.' },
      { title: 'Effortless check-in', description: 'Automatic presence detection removes QR scanning and badge taps.' },
      { title: 'Free up unused desks', description: 'Unclaimed bookings return to the pool so space is never wasted.' },
    ],
    features: ['Desk map booking', 'Team proximity view', 'Auto check-in and release', 'Neighbourhood policies'],
    related: ['meeting-room-finder', 'space-utilization', 'smart-workspaces'],
  }, 'usecase'),

  // ---------- By Industry ----------
  f({
    slug: 'healthcare', title: 'Healthcare', icon: 'HeartPulse',
    tagline: 'Faster care, safer facilities',
    description: 'Locate equipment, protect patients and streamline flow across hospitals and clinics.',
    image: '/images/healthcare_banner.jpg',
    metrics: [{ value: '40%', label: 'Less equipment search time' }, { value: '99%', label: 'Alert delivery' }, { value: '20%', label: 'Better utilisation' }],
    benefits: [
      { title: 'Clinical efficiency', description: 'Staff spend time with patients instead of searching for equipment.' },
      { title: 'Patient safety', description: 'Infant, dementia and restricted-zone protection with immediate alerts.' },
      { title: 'Visitor wayfinding', description: 'Guide patients to appointments and reduce stress and lateness.' },
    ],
    features: ['Equipment tracking', 'Infant protection', 'Patient wayfinding', 'Workflow analytics'],
    related: ['smart-healthcare', 'asset-tracking', 'patient-experience'],
  }, 'industry'),
  f({
    slug: 'retail', title: 'Retail', icon: 'ShoppingBag',
    tagline: 'Understand and engage every shopper',
    description: 'Combine footfall analytics with contextual engagement to lift conversion and loyalty in-store.',
    image: '/images/retail_hero.webp',
    metrics: [{ value: '15%', label: 'Conversion uplift' }, { value: '2.5x', label: 'Wi-Fi opt-in' }, { value: '18%', label: 'Longer dwell time' }],
    benefits: [
      { title: 'Optimise store layouts', description: 'Heatmaps show which zones attract shoppers and which are ignored.' },
      { title: 'Personalise the visit', description: 'Trigger relevant offers near the right shelves.' },
      { title: 'Staff smarter', description: 'Match staffing to real footfall by hour and zone.' },
    ],
    features: ['Footfall and dwell analytics', 'Offer triggers', 'Store comparisons', 'Staffing insights'],
    related: ['contextual-engagements', 'location-analytics', 'guest-wifi-onboarding'],
  }, 'industry'),
  f({
    slug: 'education', title: 'Education', icon: 'GraduationCap',
    tagline: 'Connected campuses for students and staff',
    description: 'Help students find their way, make better use of teaching space and keep campuses safe.',
    image: '/images/universities_hero.webp',
    metrics: [{ value: '25%', label: 'Better classroom use' }, { value: '100%', label: 'Campus wayfinding' }, { value: '30%', label: 'Energy savings' }],
    benefits: [
      { title: 'Welcoming for newcomers', description: 'Indoor and outdoor navigation for new students and visitors.' },
      { title: 'Smarter timetabling', description: 'Actual attendance data drives room allocation.' },
      { title: 'Safer campuses', description: 'Emergency mustering and lone-worker alerts on a live map.' },
    ],
    features: ['Campus navigation', 'Classroom utilisation', 'Library seat availability', 'Emergency mustering'],
    related: ['smart-workspaces', 'space-utilization', 'indoor-navigation'],
  }, 'industry'),
  f({
    slug: 'workspaces', title: 'Workspaces', icon: 'Building2',
    tagline: 'Offices designed around how people work',
    description: 'Measure, plan and improve hybrid offices with occupancy, booking and navigation in one platform.',
    image: '/images/real_estate_hero.webp',
    metrics: [{ value: '30%', label: 'Real estate savings' }, { value: '35%', label: 'Desk utilisation gain' }, { value: '25%', label: 'Energy reduction' }],
    benefits: [
      { title: 'Cut wasted space', description: 'Right-size portfolios with measured utilisation.' },
      { title: 'Employee experience', description: 'Find colleagues, desks and rooms without effort.' },
      { title: 'Sustainable operations', description: 'Reduce energy in empty areas.' },
    ],
    features: ['Desk and room booking', 'Occupancy analytics', 'Wayfinding', 'Sustainability reporting'],
    related: ['smart-workspaces', 'smart-desking', 'space-utilization'],
  }, 'industry'),
  f({
    slug: 'manufacturing', title: 'Manufacturing', icon: 'Factory',
    tagline: 'Visibility from dock to production line',
    description: 'Track tools, materials and people to improve throughput, safety and quality across the plant floor.',
    image: '/images/manufacturing_hero.webp',
    metrics: [{ value: '25%', label: 'Throughput gain' }, { value: '60%', label: 'Faster tool location' }, { value: '30%', label: 'Fewer safety incidents' }],
    benefits: [
      { title: 'Streamline production', description: 'Know where work-in-progress and tooling sit at all times.' },
      { title: 'Keep workers safe', description: 'Geofence hazardous machinery and trigger alerts on entry.' },
      { title: 'Reduce downtime', description: 'Locate maintenance assets and staff immediately.' },
    ],
    features: ['WIP and tool tracking', 'Hazard-zone geofencing', 'Forklift and vehicle tracking', 'Process analytics'],
    related: ['asset-tracking', 'detect-locate', 'smart-healthcare'],
  }, 'industry'),
  f({
    slug: 'airport', title: 'Airport', icon: 'Plane',
    tagline: 'Smoother journeys, calmer terminals',
    description: 'Guide passengers, manage queues and coordinate ground operations across terminals.',
    image: '/images/transportation_hero.webp',
    metrics: [{ value: '30%', label: 'Shorter queues' }, { value: '20%', label: 'Higher retail dwell' }, { value: '100%', label: 'Terminal wayfinding' }],
    benefits: [
      { title: 'Passenger flow', description: 'Live density and queue insight rebalance security and check-in staffing.' },
      { title: 'Confident wayfinding', description: 'Gate directions and time-to-gate estimates inside the airport app.' },
      { title: 'Coordinated ground ops', description: 'Track equipment and vehicles across the airside.' },
    ],
    features: ['Passenger wayfinding', 'Queue analytics', 'Ground equipment tracking', 'Retail engagement'],
    related: ['indoor-navigation', 'density-monitoring', 'stadium-venue'],
  }, 'industry'),
  f({
    slug: 'stadium-venue', title: 'Stadium & Venue', icon: 'Trophy',
    tagline: 'Game-day experiences at scale',
    description: 'Manage crowds, guide fans to seats and unlock revenue with location-aware services.',
    image: '/images/sports_management.jpg',
    metrics: [{ value: '40%', label: 'Shorter concession waits' }, { value: '15%', label: 'Per-fan spend growth' }, { value: 'Live', label: 'Crowd control' }],
    benefits: [
      { title: 'Seat-to-seat wayfinding', description: 'Fans navigate directly to gates, seats, food and restrooms.' },
      { title: 'Safer crowds', description: 'Operations teams watch density and manage egress in real time.' },
      { title: 'More revenue', description: 'Location-based offers steer fans to concessions and merchandise.' },
    ],
    features: ['Venue navigation', 'Crowd heatmaps', 'Concession queue tracking', 'Fan engagement'],
    related: ['smart-venues', 'density-monitoring', 'contextual-engagements'],
  }, 'industry'),
  f({
    slug: 'hospitality', title: 'Hospitality', icon: 'Hotel',
    tagline: 'Delight guests, empower staff',
    description: 'Personalise the guest journey from arrival to checkout and help staff respond faster.',
    image: '/images/entertainment_banner.jpg',
    metrics: [{ value: '20%', label: 'Faster service response' }, { value: '2.5x', label: 'Wi-Fi opt-in' }, { value: '12%', label: 'Ancillary revenue lift' }],
    benefits: [
      { title: 'Seamless arrival', description: 'Guests connect, navigate and access services with less friction.' },
      { title: 'Responsive service', description: 'Route the nearest staff member to a request.' },
      { title: 'Smarter upsell', description: 'Suggest spa, dining and events at the right moment.' },
    ],
    features: ['Guest Wi-Fi onboarding', 'Staff location and dispatch', 'Property navigation', 'In-stay offers'],
    related: ['guest-wifi-onboarding', 'smart-venues', 'contextual-engagements'],
  }, 'industry'),

  // ---------- By Teams ----------
  f({
    slug: 'real-estate', title: 'Real estate', icon: 'Building',
    tagline: 'Portfolio decisions backed by data',
    description: 'Give corporate real estate teams the evidence to consolidate, renegotiate and design better workplaces.',
    image: '/images/real_estate_hero.webp',
    metrics: [{ value: '30%', label: 'Portfolio savings' }, { value: '12mo', label: 'Utilisation history' }, { value: '4x', label: 'Faster analysis' }],
    benefits: [
      { title: 'Confident lease decisions', description: 'Measured utilisation replaces assumptions at renewal time.' },
      { title: 'Tenant and occupant experience', description: 'Amenities and services guided by how people actually use them.' },
      { title: 'Portfolio-level reporting', description: 'Compare every building on one consistent scale.' },
    ],
    features: ['Portfolio dashboards', 'Building benchmarks', 'Lease planning reports', 'ESG metrics'],
    related: ['space-utilization', 'occupancy-monitoring', 'energy-efficiency'],
  }, 'team'),
  f({
    slug: 'patient-experience', title: 'Patient Experience', icon: 'Smile',
    tagline: 'Reduce stress from door to discharge',
    description: 'Help patients arrive on time, find their way and stay informed, while giving clinicians the flow data they need.',
    image: '/images/healthcare_patient_experience.jpg',
    metrics: [{ value: '40%', label: 'Fewer missed appointments' }, { value: '25%', label: 'Shorter wait times' }, { value: '+18', label: 'Satisfaction score lift' }],
    benefits: [
      { title: 'Guided from the car park', description: 'Step-by-step directions from arrival to the exact clinic room.' },
      { title: 'Transparent waiting', description: 'Live updates keep patients and families informed.' },
      { title: 'Better flow', description: 'Analytics reveal where journeys stall so teams can fix it.' },
    ],
    features: ['Appointment wayfinding', 'Wait-time notifications', 'Journey analytics', 'Family and visitor tools'],
    related: ['healthcare', 'smart-healthcare', 'indoor-navigation'],
  }, 'team'),
]

export const bySlug = (slug: string) => solutions.find((s) => s.slug === slug)
export const byGroup = (group: SolutionGroup) => solutions.filter((s) => s.group === group)
