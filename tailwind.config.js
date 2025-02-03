/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    colors: {
      background: {
        dark: '#092934', //verde-albastru inchis
        light: '#f3e9d2' //crem
      },
      primary: {
        dark: '#1a936f', //verde mediu
        light: '#1a936f'
      },
      secondary: {
        dark: '#c6dabf', //verde deschis pal
        light: '#092934'
      },
      text: {
        dark: '#f3e9d2',
        light: '#092934'
      },
      accent: {
        dark: '#88d498', //verde accent
        light: '#1a936f'
      }
    },
    fontFamily: {
      'roboto': ['Roboto']
    },
    extend: {
      boxShadow: {
        '1': '3px 3px 20px 2px rgba(33, 46, 42, 0.2)'
      }
    }
  },
  plugins: [],
  darkMode: 'selector',
  purge: {
    content: ["./src/**/*.{html,ts}"],
    safelist: [
      'text-secondary-light',
      'dark:text-secondary-dark',
      'text-accent-light',
      'dark:text-accent-dark',
      'text-text-light',
      'dark:text-text-dark'
    ]
  },
}

