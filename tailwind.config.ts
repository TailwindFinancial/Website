// tailwind configuration for ultra-premium slash aesthetic
import type { Config } from "tailwindcss";

// export tailwind config for modern premium design
const config: Config = {
  // specify which files tailwind should scan
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ultra-premium color palette
      colors: {
        // primary from logo - cyan/turquoise
        primary: {
          DEFAULT: '#5DD9D2', // main cyan
          light: '#7FE5DF',   // lighter
          dark: '#3DA5A5',    // darker
        },
        // secondary from logo - navy blue
        secondary: {
          DEFAULT: '#2E3A59', // navy from logo
          light: '#4A5677',   // lighter navy
          dark: '#1A2235',    // darker navy
        },
        // pure black for main background
        'dark-bg': '#000000',
        // gradient backgrounds for sections
        'gradient-start': '#0A0B0F',
        'gradient-end': '#1A1B23',
        // text colors
        'text-primary': '#FFFFFF',
        'text-secondary': '#A3A3A3',
        'text-tertiary': '#6B6B6B',
        // border
        'border-subtle': 'rgba(255, 255, 255, 0.06)',
      },
      // premium fonts
      fontFamily: {
        // serif for headlines
        serif: ['Fraunces', 'Georgia', 'serif'],
        // clean geometric sans for ui - like Slash uses
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      // exact spacing
      spacing: {
        '40': '10rem',  // 160px section spacing
      },
      // letter spacing
      letterSpacing: {
        'tightest': '-0.04em',
        'tighter': '-0.02em',
      },
      // max widths
      maxWidth: {
        'container': '1440px',
      },
      // border radius
      borderRadius: {
        'slash': '20px',
      },
      // custom gradients
      backgroundImage: {
        // gold card gradient
        'card-gold': 'linear-gradient(135deg, #D4AF37 0%, #F4E4B3 50%, #D4AF37 100%)',
        // section gradients with primary color
        'section-primary': 'linear-gradient(180deg, rgba(93, 217, 210, 0.03) 0%, rgba(93, 217, 210, 0.00) 100%)',
        'section-secondary': 'linear-gradient(180deg, rgba(46, 58, 89, 0.03) 0%, rgba(46, 58, 89, 0.00) 100%)',
        // radial glow
        'glow-primary': 'radial-gradient(circle at center, rgba(93, 217, 210, 0.15) 0%, transparent 70%)',
      },
      // animations
      keyframes: {
        // float for card
        'float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg)' },
        },
        // shimmer for card
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      // animation utilities
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
