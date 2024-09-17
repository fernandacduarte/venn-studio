import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'neutralDark': "#121717",
        'neutralLight-300': "#CECFD1",
        'neutralLight-100': "#EBEBEC",
      },
      backgroundImage: {
        // 'pattern-stripes': 'repeating-linear-gradient(135deg, transparent, transparent 10px,rgba(0,0,0,0.1) 10px,rgba(0,0,0,0.1) 20px)',
        'pattern-stripes': 'repeating-linear-gradient(135deg, transparent, transparent 10px, rgba(18, 23, 23,0.3) 10px, rgba(18, 23, 23,0.3) 13px)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
      },
    },
  },
  plugins: [],
};
export default config;
