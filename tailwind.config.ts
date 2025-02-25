import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1025px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'neutralDark': "#121717",
        'neutralLight-300': "#CECFD1",
        'neutralLight-100': "#EBEBEC",
        'highlight': "hsl(77, 76%, 74%)",
      },
      backgroundImage: {
        'pattern-stripes': 'repeating-linear-gradient(135deg, transparent, transparent 10px, rgba(18, 23, 23,0.3) 10px, rgba(18, 23, 23,0.3) 13px)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulse: {
          '0%': { opacity: '0.15' },
          '50%': { opacity: '0.3' },
          '100%': { opacity: '0.15' },
        },
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        scale: {
          '0%' : { transform: 'scale(1)'},
          '100%': { transform: 'scale(1.05)'}
        },
        rotate10deg: {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(2.5deg)'}
        },
        smallTranslateX : {
          '0%': { transform: 'translateX(-2%)' },
          '100%': { transform: 'translateX(2%)'}
        },
        smallTranslateY : {
          '0%': { transform: 'translateY(-2%)' },
          '100%': { transform: 'translateY(2%)'}
        },
        glow: {
          '0%': { opacity: '0.5' },
          '50%': { opacity: '0.9' },
          '100%': { opacity: '0.5' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
        pulse: 'pulse 2s ease-out infinite',
        carousel: 'slide 10s linear infinite',
        slowScale: 'scale 10s linear 1s infinite alternate',
        slowRotate: 'rotate10deg 20s infinite alternate',
        swingX: 'smallTranslateX 12s infinite alternate',
        swingY: 'smallTranslateY 12s infinite alternate',
        slowGlow: 'glow 8s infinite alternate'
      },
      padding: {
        // min: 1024px, max: 1440px
        'fluid-16-64': 'clamp(1rem, -6.3846rem + 11.5385vw, 4rem)',
      },
      top: {
        // min: 1440px, max: 1536px
        'fluid-200-300': 'clamp(12.5rem, -81.25rem + 104.1667vw, 18.75rem)',
      },
      left: {
        // min: 1440px, max: 1536px
        'fluid-90-120': 'clamp(5.625rem, -22.5rem + 31.25vw, 7.5rem)',
      },
      // transform: {
      //   // min: 1440px, max: 1536px
      //   // 'about-image': 'scale(calc(clamp(0.125rem, -0.0625rem + 0.2083vw, 0.1375rem))) rotate(10deg)',
      //   'about-image': 'scale(2) rotate(10deg)',
      // }
    },
  },
  plugins: [],
};
export default config;
