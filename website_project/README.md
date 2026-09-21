# Spatial Intelligence Platform Website

A comprehensive Next.js website for spatial intelligence products, built with Three.js 3D animations, the Locus Design System, and inspired by Cisco Spaces architecture.

## 🚀 Features

- **3D Spatial Canvas**: Interactive Three.js visualization showing floor plans, data points, geofences, and asset tracking in real-time
- **Locus Design System**: Enterprise-grade design with navy/cyan branding, aviation cockpit clarity, and Stripe-grade minimalism
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Framer Motion Animations**: Smooth scroll-triggered animations and transitions
- **15 Industry Solutions**: Complete coverage of manufacturing, healthcare, retail, logistics, and more
- **Multi-Technology Stack**: Support for Bluetooth AoA, UWB, Wi-Fi RTT, and more

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The development server will start at `http://localhost:3000`

### Project Structure

```
website_project/
├── components/           # React components
│   ├── HeroSection.tsx   # Hero with 3D canvas
│   ├── FeaturesSection.tsx
│   ├── SolutionsSection.tsx
│   ├── IndustriesSection.tsx
│   ├── TechnologySection.tsx
│   ├── UseCasesSection.tsx
│   ├── PlatformSection.tsx
│   ├── CTASection.tsx
│   ├── Footer.tsx
│   └── SpatialCanvas.tsx # Three.js 3D visualization
├── pages/                # Next.js pages
│   ├── _app.tsx
│   └── index.tsx
├── public/               # Static assets
│   └── images/           # Industry hero images
├── styles/               # Global styles
│   └── globals.css
├── tailwind.config.js    # Tailwind configuration
├── next.config.js        # Next.js configuration
├── package.json
└── tsconfig.json
```

## 🎨 Design System

### Colors
- **Primary Navy**: `#001F5C` - Headers, sidebars, primary elements
- **Accent Cyan**: `#0099FF` - Buttons, links, focus states
- **Success**: `#1E8E3E` - Positive states
- **Warning**: `#F9AB00` - Attention states
- **Error**: `#D93025` - Error states

### Typography
- **Display**: Montserrat (Bold/SemiBold) - Headlines
- **Body**: Inter (Regular/Medium) - UI text
- **Mono**: JetBrains Mono - Data/coordinates

### Spacing
- 8px grid system
- xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px

## 🌟 Key Sections

### 1. Hero Section
- Interactive 3D canvas showing spatial data visualization
- Animated floor plans, tracking points, and geofence zones
- Real-time statistics and CTAs

### 2. Platform Section
- Overview of 8 core features
- 3D map visualization showcase
- Real-time statistics badges

### 3. Features Section
- 6 key platform capabilities
- Full stack architecture diagram
- Technical specifications

### 4. Solutions Section
- Smart Workspaces, Smart Operations, Smart Venues
- Feature lists and benefits
- Industry-specific implementations

### 5. Industries Section
- 15 industry solutions with icons
- Feature tags and descriptions
- Comprehensive coverage

### 6. Use Cases Section
- 6 business outcomes
- ROI statistics
- Success metrics

### 7. Technology Section
- Multi-technology support (Bluetooth AoA, UWB, Wi-Fi RTT, etc.)
- Accuracy and range comparisons
- Layered architecture diagram

### 8. Contact Form
- Lead capture form
- Contact information
- Success statistics

## 🎭 3D Visualization

The `SpatialCanvas` component uses Three.js to render:
- **Floor Plans**: Grid-based wireframe structures
- **Building Outlines**: Wireframe 3D buildings
- **Data Points**: Animated floating spheres representing tracked assets
- **Connection Lines**: Animated lines showing relationships
- **Geofence Zones**: Color-coded safety/restriction zones
- **Auto-Rotation**: Smooth camera movement for dynamic viewing

## 📦 Dependencies

### Core
- **Next.js**: React framework for production
- **React**: UI library
- **TypeScript**: Type safety

### 3D & Animation
- **Three.js**: 3D graphics library
- **@react-three/fiber**: React renderer for Three.js
- **@react-three/drei**: Useful helpers for Three.js
- **Framer Motion**: Animation library
- **GSAP**: Professional-grade animation

### Styling
- **Tailwind CSS**: Utility-first CSS framework

### Icons
- **Lucide React**: Modern icon library

## 🔧 Customization

### Adding Your Logo
1. Replace the logo placeholder in `components/HeroSection.tsx`
2. Update brand colors in `tailwind.config.js` if needed
3. Modify brand name throughout the site

### Adding Industries
Edit `components/IndustriesSection.tsx` to add or customize industries.

### Updating Images
Place your images in `public/images/` and reference them:
```tsx
<Image src="/images/your-image.jpg" alt="Description" width={800} height={600} />
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Deploy dist folder
```

### Self-Hosted
```bash
npm run build
# Copy .next folder to your server
npm start
```

## 📄 License

This project is proprietary. All rights reserved.

## 🆘 Support

For technical support or questions, please contact the development team.

---

**Built with Next.js, Three.js, and the Locus Design System**
