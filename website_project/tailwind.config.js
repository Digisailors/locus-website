/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Locus Edge Design System from PDF - FIXED
        'primary-navy': '#0B1F33',
        'accent-cyan': '#22C55E',        // Vibrant lime-green for accents
        'canvas-bone': '#F3F6F2',
        'active-green': '#22C55E',         // Active pill green
        'charcoal-grey': '#526170',
        'surface-cool': '#E7F7EB',
        'attention-amber': '#FEF3C7',      // Attention amber
        'pure-white': '#FFFFFF',            // Pure white for cards
        success: '#22C55E',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',
        'surface-base': '#FFFFFF',
        'surface-neutral': '#F3F6F2',
        'border-default': '#DCE4DF',
        'dark-canvas': '#0B1F33',
      },
      fontFamily: {
        display: ['Inter', 'Segoe UI', 'Arial', 'sans-serif'],
        body: ['Inter', 'Segoe UI', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display-1': ['72px', { lineHeight: '1', fontWeight: '600' }],
        'h1': ['52px', { lineHeight: '1.1', fontWeight: '600' }],
        'h2': ['32px', { lineHeight: '1.2', fontWeight: '600' }],
        'h3': ['20px', { lineHeight: '1.35', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.5' }],
        'body': ['16px', { lineHeight: '1.5' }],
        'body-sm': ['14px', { lineHeight: '1.5' }],
        'caption': ['12px', { lineHeight: '1.4', letterSpacing: '2px' }],
        'mono': ['13px', { lineHeight: '1.4' }],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '24px',
      },
      boxShadow: {
        '1': '0 1px 2px rgba(11,31,51,.04), 0 8px 24px rgba(11,31,51,.04)',
        '2': '0 16px 44px rgba(11,31,51,.10)',
        '3': '0 24px 70px rgba(11,31,51,.16)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'spatial-grid': 'linear-gradient(rgba(0, 153, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 153, 255, 0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'float': 'float 3s ease-in-out infinite',
        'pulse': 'pulse 2s infinite',
        'data-flow': 'dataFlow 3s ease infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%': { boxShadow: '0 0 0 0 rgba(0, 153, 255, 0.4)' },
          '70%': { boxShadow: '0 0 0 10px rgba(0, 153, 255, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(0, 153, 255, 0)' },
        },
        dataFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
}
