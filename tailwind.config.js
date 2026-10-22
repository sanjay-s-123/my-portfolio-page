/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#06090F',
          900: '#090D14',
          850: '#0D111A',
          800: '#111827',
          700: '#1F2937',
        },
        amber: {
          DEFAULT: '#F59E0B',
          glow: 'rgba(245, 158, 11, 0.25)',
          border: 'rgba(245, 158, 11, 0.15)',
        },
        orange: {
          accent: '#F97316',
        },
        teal: {
          cyber: '#06B6D4',
          mint: '#10B981',
          glow: 'rgba(6, 182, 212, 0.25)',
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'terminal-scan': 'scan 6s linear infinite',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
      },
    },
  },
  plugins: [],
}
