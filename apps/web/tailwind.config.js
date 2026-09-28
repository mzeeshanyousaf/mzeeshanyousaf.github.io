const c = (name) => `rgb(var(--c-${name}) / <alpha-value>)`

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: c('bg'),
        surface: c('surface'),
        line: c('line'),
        fg: c('text'),
        muted: c('muted'),
        accent: c('accent'),
        accent2: c('accent2'),
      },
      borderRadius: {
        'theme-sm': 'calc(var(--radius) * 0.6)',
        theme: 'var(--radius)',
        'theme-lg': 'calc(var(--radius) * 1.4)',
      },
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
