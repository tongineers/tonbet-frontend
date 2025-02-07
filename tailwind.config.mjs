module.exports = {
  purge: {
    enabled: false,
    content: ['./src/**/**/*.{vue,ts,js,html}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        shine: 'shine 2s infinite linear',
      },
      keyframes: {
        shine: {
          '0%': { left: '-100px' },
          '100%': { left: '100%' },
        },
      },
    },
  },
  variants: {
    extend: {
      borderRadius: ['first', 'last'],
    },
  },
  plugins: [],
}
