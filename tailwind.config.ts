import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './cmps/**/*.{ts,tsx}',
    './ui/**/*.{ts,tsx}',
    './layouts/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [],
}

export default config
