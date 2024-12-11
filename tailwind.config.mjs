module.exports = {
  purge: {
    enabled: false,
    content: ['./src/**/**/*.{vue,ts,js,html}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
        dicefont: ['DiceFont'],
      },
      colors: {
        diceGreen: '#32b889',
        diceBlue: '#133362',
        diceBlueDark: '#061D3F',
        diceBlueLight: '#518FE6',
        diceGold: '#FDBE3D',
        fromDiceBg: '#061637',
        toDiceBg: '#0B2766'
      },
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
