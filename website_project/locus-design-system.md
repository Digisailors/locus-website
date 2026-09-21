---
name: locus-design-system
description: Apply the Locus Spatial Systems enterprise design system (v1.2.0) — an aviation/GIS-inspired, Stripe-grade minimal SaaS look with navy/cyan branding, Montserrat/Inter/JetBrains Mono type, an 8px spacing grid, and a full component library (buttons, forms, cards, tables, badges, tabs, modals, maps). ALWAYS use this skill whenever building or styling any UI, webpage, dashboard, prototype, mockup, HTML/React artifact, or frontend component for this brand — even if the user just says "make a page," "build a dashboard," "create a component," or "style this," without explicitly naming "Locus" or "design system." Also use it when the user asks to keep an app "on-brand," "consistent," or "matching our style/theme." This skill is the single source of truth for colors, typography, spacing, radii, shadows, icons, and component patterns — including the spatial/map inspector system — so every application looks and feels identical.
---

# Locus Spatial Systems — Design System (v1.2.0)

A mathematically disciplined UI system for GIS/telemetry/enterprise SaaS products. Aesthetic goal: aviation-cockpit clarity + Stripe-grade minimalism. Zero decorative noise, instantaneous readability, geometric predictability.

Use this for **every** UI-producing task (HTML, React/JSX artifacts, mockups, dashboards, forms, tables, cards, map/spatial widgets, etc.) so all output shares one consistent look. Treat the tokens and component specs below as hard constraints, not suggestions — don't invent new colors, fonts, spacing values, radii, or component shapes outside this system.

## Workflow

1. Use the CSS tokens in the **Design Tokens (CSS)** section below directly in HTML (inline `<style>` or linked file), or translate them into literal hex/px values / inline `style={{ }}` for React artifacts (no Tailwind config file is available, so don't rely on a custom Tailwind theme — use literal values matching these tokens exactly).
2. For any component beyond a basic button/input, check the **Component Specifications** section (including the **Spatial/Inspector Panels & Custom Map System** section) before building it from scratch.
3. If placing a logo/wordmark, follow the **Logo Rules** section.
4. Default to **light mode** (Surface Neutral `#F4F6F9` page background) unless the user asks for dark/"HUD" mode, which uses Dark Canvas `#2D3133`.
5. Prefer JetBrains Mono for coordinates/numeric/telemetry data; Inter for body/UI text; Montserrat for headings/display. For non-GIS apps reusing this system, keep JetBrains Mono for tabular numeric data (IDs, timestamps, metrics) and Inter for everything else.

---

## Core Brand Tokens (quick reference)

| Token | Hex | Use |
|---|---|---|
| Primary Navy | `#001F5C` | Sidebars, headers, primary logotype, dark chrome |
| Accent Cyan | `#0099FF` | Primary buttons, links, focus rings, active/highlighted elements |
| Charcoal Grey | `#5C5E6E` | Secondary text, metadata, inactive icons |
| Success | `#1E8E3E` | Healthy/online/active states |
| Warning | `#F9AB00` | Degraded/attention states |
| Error | `#D93025` | Faults, destructive actions, breaches |
| Info | `#1A73E8` | System/background-process states |
| Surface Base | `#FFFFFF` | Cards, inputs |
| Surface Neutral | `#F4F6F9` | Page background |
| Border Default | `#E8EAED` | Hairline dividers, 1px card borders |
| Dark Canvas | `#2D3133` | Dark/HUD mode surfaces |

## Typography

- **Display/Headings:** Montserrat (Bold/SemiBold/Medium) — geometric, high-contrast, authoritative.
- **Body/UI:** Inter (Regular) — dense, readable interface text.
- **Data/Code/Coordinates:** JetBrains Mono — tabular figures so numbers don't jitter in live data.
- Base size 16px, 1.5 line-height for body.

| Style | Font / Size / Weight / Line-height |
|---|---|
| Display 1 | Montserrat 48px Bold 1.2 |
| Heading 1 | Montserrat 32px SemiBold 1.3 |
| Heading 2 | Montserrat 24px SemiBold 1.4 |
| Heading 3 | Montserrat 20px Medium 1.4 |
| Body Large | Inter 18px Regular 1.5 |
| Body Default | Inter 16px Regular 1.5 |
| Body Small | Inter 14px Regular 1.5 |
| Caption/Eyebrow | Montserrat 12px Medium, 2px letter-tracking, uppercase |
| Telemetry Code | JetBrains Mono 13px Medium |

Load fonts from Google Fonts CDN in HTML `<head>`:
```
https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap
```

## Spacing & Layout — 8px grid

`xs 4px · sm 8px · md 16px · lg 24px · xl 32px · 2xl 48px · 3xl 64px`

Every margin, gutter, and padding value must be one of these. The 4px micro half-step is the only exception.

**Border radius:** `sm 4px` (inputs/tags) · `md 8px` (cards/buttons) · `lg 16px` (modals/drawers).

**Breakpoints:** Mobile 320–480px (4 col) · Tablet 768px (8 col) · Desktop 1024px (12 col) · Large Desktop 1440px+ (max 1280px container).

## Elevation

| Level | Shadow | Use |
|---|---|---|
| 0 — Flat | `border: 1px solid #E8EAED` | Embedded tiles, tables |
| 1 — Subtle | `0 1px 3px rgba(0,31,92,0.05)` | Standard cards, list items, hover buttons |
| 2 — Medium | `0 4px 12px rgba(0,31,92,0.08)` | Popovers, dropdowns, flyout panels |
| 3 — Floating | `0 12px 28px rgba(0,31,92,0.12)` | Modals, alert dialogs, drawers |

## Iconography

Outline-style icons only (Material Symbols Outlined, 20px base weight, aligned to a 20×20 or 24×24 box). Never mix rounded/filled icon styles with technical data displays.

---

## Component Specifications

### Buttons & Action Triggers
- Standard height 44px, 8px radius.
- **Primary**: solid `#0099FF` fill, white text, no border. The single main action.
- **Secondary / Outline**: transparent fill, 1px `#001F5C` border, navy text.
- **Ghost**: text-only, no border/fill, navy or cyan text — tertiary actions.
- **Destructive** (e.g. "Purge Cache"): solid `#D93025` fill, white text.
- **Disabled**: reduced opacity (~40%), no pointer events.
- **Loading**: label swaps to a short present-participle status (e.g. "Syncing Nodes...") with a small spinner.
- Sizes: sm 32px / md 40px (default) / lg 48px ("hero" CTAs).

### Form Inputs & Controls
- 4px radius, 1px `#E8EAED` border, white background.
- Label style: small caps / uppercase Montserrat 12px eyebrow above the field.
- **Default**: placeholder in charcoal grey.
- **Focused**: border turns cyan + 3px cyan glow — `box-shadow: 0 0 0 3px rgba(0,153,255,0.25)`.
- **Error**: red border + red helper text explaining the constraint specifically (e.g. "Latitude exceeds geographic limits (-90 to +90)").
- **Locked/disabled**: grey background, no focus state, often paired with a lock icon.
- Textareas (JSON/code entry) use JetBrains Mono at 13–14px.
- Range sliders: track in `#E8EAED`, filled portion in cyan, numeric value labeled at each end and center.

### Dropdowns & Projection Selects
- Same 4px radius/border treatment as text inputs.
- Selected value in Inter (or JetBrains Mono if the value is a numeric/technical code like an EPSG projection).
- Chevron icon, outline style, right-aligned.

### Checkboxes, Radios & Toggles
- Checkboxes: 4px radius square, cyan fill + white check when active.
- Radios: circular, cyan dot when selected.
- Toggle switches: pill track, grey when off, cyan when on, white knob, smooth slide.
- Segmented toggles (e.g. "2D MAP / 3D TERRAIN / RAW LOG"): single pill-shaped container, 4px radius per segment, active segment gets a white/cyan chip on navy or grey background.

### Cards & Surface Containers
- **Standard**: white surface, 1px `#E8EAED` border, 8px radius, elevation level 0–1. Lists, embedded content tiles.
- **Elevated**: same shape, elevation level 1–2 shadow, for highlighted/active content (e.g. "Active Telemetry Node").
- **Dark/HUD tile**: `#2D3133` background, white/cyan text, for high-contrast displays (live tracking, night-mode dashboards, flight/drone telemetry).

### Badges, Pills & Status Tags
- Pill shape (border-radius 999px), small caps or 12px Montserrat/JetBrains Mono label.
- Color follows semantic tokens: success/warning/error/info. Use a light tint background (~10% opacity of the token) with the full-strength token as text/icon color.
- Square monospace technical pills (e.g. "EPSG:4326", "DOP: 0.82") use JetBrains Mono on a neutral grey chip — reserved for codes/technical identifiers, not status.

### Tabs & Navigation Controls
- Breadcrumbs: charcoal grey text, `/` separators, current page in navy/bold.
- Underlined primary tabs: Montserrat medium labels, 2px cyan underline on the active tab, charcoal grey for inactive tabs.
- Pagination: "Showing X–Y of Z" in body-small text, Prev/Next + numbered page buttons.

### Notification Banners & Alerts
- Left-accent bar or icon in the semantic color (success/warning/error/info), light tint background, dark text for readability.
- Structure: bold short headline + one sentence of supporting detail.
- Destructive/state-changing confirmation modals (e.g. "Recalibrate Datum?") always pair a neutral "Cancel" (ghost/secondary) button with a committed action button (primary or destructive), plus one sentence explaining the consequence.

### Data Tables & Telemetry Grids
- Header row: Montserrat or Inter medium, small caps, charcoal grey, 1px bottom border.
- Numeric/coordinate/ID columns: JetBrains Mono, tabular numerals, right- or decimal-aligned so digits don't jitter during live updates.
- Status column: use the badge component.
- Row hover: subtle `#F4F6F9` background tint.
- Include a filter/search input and an export action in the toolbar when the table represents a live/operational dataset.

### Spatial Inspector Panels & GIS Widgets
- Inspector panels are cards with a Heading 3 title, a small metadata caption line (e.g. reference datum), then a tight grid of label/value pairs in JetBrains Mono for coordinates and metrics (lat, lon, elevation, SNR, carrier lock, etc.).
- Include a compact status strip below the readout (e.g. satellites tracked, accuracy tolerance, a "View Raw Data Table" link).
- **Layer-stack widgets**: a card listing toggleable layers (checkbox + label + drag-to-reorder affordance), each layer showing a one-line description, with a compact "+ Add Layer" ghost button at the top and a total-layers / render-time footer stat.

### Custom Factory / Facility Map System
This is the most complex component pattern — a full indoor/outdoor spatial map canvas used for facility, fleet, or GIS floor-plan visualization:
- **Top toolbar**: facility/floor selector (segmented control, e.g. "L1 Heavy Machining / L2 Assembly & Robotics / Mezzanine Logistics"), a live hardware-sync status chip (e.g. "UWB ANCHORS: 18/18 ONLINE"), and a "Sync Floor Mesh" action button.
- **Layer filter row**: toggleable filter chips/checkboxes for each data layer (e.g. Machinery Sensors, AGV Dynamic Routes, Safety Geofences, Thermal/Vibration Heatmap) plus a zoom/scale control (e.g. "100% (1:50 Scale)").
- **Map canvas**: light neutral base (`#F4F6F9` or white), with:
  - Zone outlines drawn as labeled polygons/regions (e.g. "ZONE A · Robotic Welding Cell"), color-coded by semantic meaning — red/error tint for hazmat or secure zones, cyan for active transit routes, grey/navy hairline for neutral zone boundaries.
  - Tracked entities (AGVs, machines, beacons) shown as small labeled pins/markers with live JetBrains Mono coordinate readouts (local X/Y in meters) and status (e.g. velocity, heading, battery).
  - A floor datum origin label (e.g. "FLOOR DATUM ORIGIN: [0.00, 0.00] SW PIER") anchored in a corner.
  - Named transit paths (e.g. "AGV AUTONOMOUS HIGHWAY · MAIN TRANSIT SPINE") drawn as a distinct dashed or solid cyan line.
- **Zone Telemetry Inspector panel** (side panel, elevation level 2–3): appears when a zone is selected. Contains: zone name + status badge (e.g. "ZONE B ACTIVE"), one-line description, then a metrics grid (occupancy, ambient temperature, vibration/FFT harmonic reading, geofence breach count, active AGV in route with ETA) in JetBrains Mono values with Inter labels, plus a grid-precision/tolerance footer stat.
- **Fleet status list** (compact card or table beneath/beside the map): one row per tracked unit (AGV/robot/sensor) showing ID, current task/destination, speed, and a battery/status indicator; include a "Reroute Corridor Details" or equivalent drill-down action.
- General rule: this component always separates *live spatial visualization* (the map) from *live numeric telemetry* (the inspector/list) — never blend dense numeric tables directly onto the map canvas; surface them in adjacent panels instead.

---

## Logo Rules & Constraints

- **Clear space**: preserve an exclusion boundary equal to the height of the capital "L" on all four sides of the mark. No text, icons, or chrome may enter this zone.
- **Minimum sizing**: desktop web requires a minimum full-lockup width of 120px. Mobile (<480px) and map-dock/icon-only contexts: use the isolated circular compass glyph only, drop the wordmark.
- **Placement**: default anchor is top-left of the navigation drawer/header. Center alignment is only authorized on authentication/splash/onboarding screens.
- **Do**: keep exact 1:1 aspect ratio (never stretch/skew); place on pure white or `#F4F6F9` backgrounds in light mode; in dark/HUD mode render the wordmark in pure white.
- **Don't**: tilt, skew, rotate, or stretch the compass ring; recolor with unapproved gradients or warm hues; place directly over busy imagery (e.g. satellite/aerial maps) without a solid backdrop.
- **Practical note**: Claude cannot reproduce the actual Locus logo artwork (it's a proprietary brand asset). For mockups, render a simple text/wordmark placeholder ("LOCUS") or a plain geometric compass-ring glyph in brand colors, and note that the client's real logo file should be swapped in.

---

## Design Tokens (CSS)

Copy this block directly into an HTML `<style>` tag or a linked stylesheet. For React/JSX artifacts, translate these into literal values (no external CSS file / Tailwind config is available in that environment).

```css
:root {
  /* Core brand */
  --color-primary-navy: #001F5C;
  --color-accent-cyan: #0099FF;
  --color-charcoal-grey: #5C5E6E;

  /* Semantic / status */
  --color-success: #1E8E3E;
  --color-warning: #F9AB00;
  --color-error: #D93025;
  --color-info: #1A73E8;

  /* Surfaces & neutrals */
  --color-surface-base: #FFFFFF;
  --color-surface-neutral: #F4F6F9;
  --color-border-default: #E8EAED;
  --color-dark-canvas: #2D3133;

  /* Focus */
  --focus-ring: 0 0 0 3px rgba(0, 153, 255, 0.25);

  /* Typography */
  --font-display: 'Montserrat', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  --fs-display-1: 48px;
  --fs-h1: 32px;
  --fs-h2: 24px;
  --fs-h3: 20px;
  --fs-body-lg: 18px;
  --fs-body: 16px;
  --fs-body-sm: 14px;
  --fs-caption: 12px;
  --fs-mono: 13px;

  /* Spacing — 8px grid */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;

  /* Radius */
  --radius-sm: 4px;   /* inputs, tags */
  --radius-md: 8px;   /* cards, buttons */
  --radius-lg: 16px;  /* modals, drawers */

  /* Elevation */
  --shadow-1: 0 1px 3px rgba(0, 31, 92, 0.05);
  --shadow-2: 0 4px 12px rgba(0, 31, 92, 0.08);
  --shadow-3: 0 12px 28px rgba(0, 31, 92, 0.12);
}

/* Font import — place in your HTML <head> as a <link>, e.g.:
   <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap">
*/

body {
  background: var(--color-surface-neutral);
  color: var(--color-charcoal-grey);
  font-family: var(--font-body);
  font-size: var(--fs-body);
  line-height: 1.5;
}

h1, h2, h3, .display {
  font-family: var(--font-display);
  color: var(--color-primary-navy);
}

.mono, .telemetry, code, table td.numeric {
  font-family: var(--font-mono);
  font-variant-numeric: tabular-nums;
}

/* Buttons */
.btn {
  height: 44px;
  padding: 0 var(--space-md);
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-weight: 500;
  font-size: var(--fs-body);
  border: none;
  cursor: pointer;
}
.btn-primary { background: var(--color-accent-cyan); color: #fff; }
.btn-secondary { background: transparent; border: 1px solid var(--color-primary-navy); color: var(--color-primary-navy); }
.btn-ghost { background: transparent; color: var(--color-primary-navy); }
.btn-destructive { background: var(--color-error); color: #fff; }
.btn-sm { height: 32px; font-size: var(--fs-body-sm); }
.btn-lg { height: 48px; font-size: var(--fs-body-lg); }

/* Inputs */
.input {
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-sm);
  padding: var(--space-sm) var(--space-md);
  font-family: var(--font-body);
  font-size: var(--fs-body);
  background: var(--color-surface-base);
}
.input:focus {
  outline: none;
  border-color: var(--color-accent-cyan);
  box-shadow: var(--focus-ring);
}
.input-error { border-color: var(--color-error); }

/* Cards */
.card {
  background: var(--color-surface-base);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-1);
  padding: var(--space-md);
}
.card-elevated { box-shadow: var(--shadow-2); }
.card-hud { background: var(--color-dark-canvas); color: #fff; border: none; }

/* Badges */
.badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  padding: 2px var(--space-sm);
  border-radius: 999px;
  font-size: var(--fs-caption);
  font-weight: 500;
}
.badge-success { background: rgba(30,142,62,0.1); color: var(--color-success); }
.badge-warning { background: rgba(249,171,0,0.12); color: #a06800; }
.badge-error   { background: rgba(217,48,37,0.1); color: var(--color-error); }
.badge-info    { background: rgba(26,115,232,0.1); color: var(--color-info); }
```

## Non-Locus reuse

If a user asks to reuse "this design system" or "our theme" for a non-GIS product, keep the tokens (color, type, spacing, radius, shadows, component shapes) fixed, but you can drop the GIS-specific copy/iconography (satellites, geofences, coordinates, AGVs) and swap in domain-appropriate labels/icons while keeping the same outline icon style and structure. The Custom Factory/Facility Map System pattern generalizes to any "canvas + zone selection + inspector panel" layout (e.g. a real-estate floor plan, a store layout, a network topology map).
