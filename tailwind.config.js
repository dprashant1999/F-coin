module.exports = {
  content: ["./public/**/*.{html,js,scss}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '2k': '1920px',
      '4k': '2560px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        md: '1.75rem',
        lg: '0.875rem',
        xl: '2.25rem',
        '2xl': '3rem',
        '2k': '1rem',
      },
    },
    fontFamily: {
      primary: ['Roboto', 'sans-serif'],
      pop: ['Poppins', 'sans-serif'] 
    },
    fontSize: {
      'xs': ['.75rem', '1.1rem'],
      'sm': ['.875rem', '1.356rem'],
      'base': ['1rem', '1.45rem'],
      'lg': ['1.125rem', '1.75rem'],
      'xl': ['1.25rem', '1.875rem'],
      '22': ['1.375rem', '2.063rem'],
      '28': ['1.75rem', '2.375rem'],
      '2xl': ['1.5rem', '2.25rem'],
      '26': ['1.625rem', '2.25rem'],
      '3xl': ['1.875rem', '2.5rem'],
      '4xl': ['2.25rem', '2.75rem'],
      '5xl': ['3rem', '3.75rem'],
      '6xl': ['3.75rem', '5rem'],
      '7xl': ['4.375rem', '5.625rem'],
    },
    extend: {
      colors: {
        ev: {
          dark: {
            DEFAULT: '#25364F',
          },
          red: {
            DEFAULT: '#FE4D5F',
          },
          gray: '#A6A6A6',
          sky: '#5AC8D2',
          lightgray:'#aaaaaa',
        },
      },
      dropShadow: {
        'one':'0px 0px 30px rgba(0, 0, 0, 0.14)',
      }
    },
  },
  plugins: [],
}

