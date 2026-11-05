/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#030508',
          secondary: '#070a11',
          card: '#080c15',
          surface: '#0d121d',
          elevated: '#121826',
        },
        cyan: {
          DEFAULT: '#06b6d4',
          bright: '#22d3ee',
          light: '#67e8f9',
          glow: 'rgba(6, 182, 212, 0.2)',
        },
        indigo: {
          DEFAULT: '#6366f1',
          light: '#818cf8',
          glow: 'rgba(99, 102, 241, 0.2)',
        },
        text: {
          primary: '#f8fafc',
          muted: '#94a3b8',
          dim: '#64748b',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.06)',
          cyan: 'rgba(6, 182, 212, 0.28)',
          indigo: 'rgba(99, 102, 241, 0.28)',
          card: 'rgba(56, 189, 248, 0.14)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Syne', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
