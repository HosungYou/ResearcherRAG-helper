import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef3f2',
          100: '#fee5e2',
          200: '#fecfca',
          300: '#fcaea5',
          400: '#f87f71',
          500: '#ef5844',
          600: '#dc3a26',
          700: '#b92e1c',
          800: '#99291b',
          900: '#7f271d',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
            a: {
              color: '#ef5844',
              '&:hover': {
                color: '#dc3a26',
              },
            },
            code: {
              color: '#ef5844',
              backgroundColor: '#fef3f2',
              borderRadius: '0.25rem',
              padding: '0.125rem 0.25rem',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
        dark: {
          css: {
            color: '#e5e7eb',
            a: {
              color: '#f87f71',
              '&:hover': {
                color: '#fecfca',
              },
            },
            code: {
              color: '#fecfca',
              backgroundColor: '#7f271d',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
