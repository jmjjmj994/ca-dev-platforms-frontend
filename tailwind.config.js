/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        primary: 'hsl(230, 58%, 52%)',
        secondary: 'hsl(230, 44%, 14%)',
        background: 'hsl(0, 0%, 100%)',
        'light-grey': '	hsl(228, 33%, 97%)',
        'darker-grey': 'hsl(230, 48%, 90%)',
        'very-dark-grey': 'hsl(230, 18%, 38%)',
      },

      width: {
        max: '81.25rem',
      },

      screens: {
        xm: '375px',

        sm: '640px',

        md: '768px',

        lg: '1024px',

        xl: '1280px',

        '2xl': '1536px',
      },
    },
  },

  plugins: [],
};
