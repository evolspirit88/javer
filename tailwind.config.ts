import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        parchment: '#F0EBE1',
        linen:     '#E6E0D4',
        chalk:     '#FAF8F4',
        ink:       '#1E1C18',
        'ink-soft':'#2E2C27',
        forest:    '#2B4237',
        'forest-md':'#3A5A4A',
        'forest-lt':'#EBF0EC',
        bronze:    '#8C7252',
        stone:     '#7B7568',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans:  ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        body:  ['var(--font-lora)', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-xl': 'clamp(100px, 17vw, 260px)',
        'display-lg': 'clamp(56px, 8vw, 108px)',
        'display-md': 'clamp(44px, 6vw, 80px)',
        'display-sm': 'clamp(32px, 4vw, 56px)',
      },
      letterSpacing: {
        tightest: '-0.06em',
        tighter:  '-0.04em',
        tight:    '-0.02em',
        label:    '0.2em',
      },
    },
  },
  plugins: [],
}

export default config
