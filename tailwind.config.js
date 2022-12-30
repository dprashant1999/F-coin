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
      pop: ['Poppins', 'sans-serif']
    },
    fontSize: {
      'xs': ['.75rem', '1rem'],
      'sm': ['.875rem', '1.25rem'],
      'base': ['1rem', '1.625rem'],
      'lg': ['1.125rem', '1.75rem'],
      'xl': ['1.25rem', '1.875rem'],
      '2xl': ['1.5rem', '2rem'],
      '32': ['2rem', '2.625rem'],
      '3xl': ['1.875rem', '2.5rem'],
      '4xl': ['2.25rem', '2.75rem'],
      '5xl': ['3rem', '3.5rem'],
    },
    extend: {
      colors: {
        dark: '#1F2937',
        greenishYellow: '#ECFCCB',
        leafGreen:'#65A30D',
        davyGrey:'#4B5563',
        carminePink:'#EF4444',
        grey:'#9CA3AF',
        ghostWhite:'#F9FAFB',
        darkGrey:'#6B7280',
        lightGrey:'#F4F4F5',
      },
      dropShadow: {
        'form':'0px 7px 29px rgba(100, 100, 111, 0.2)',
        'active':'-1px 4px 15px rgba(208, 210, 218, 0.63)',
        'one': ['4px 4px 14px rgba(0, 0, 0, 0.16)',
              '0px 18px 32px rgba(208, 210, 218, 0.15)'],
        'table' : '0px 18px 32px rgba(208, 210, 218, 0.15)',
        'two':'0px 0px 8px rgba(0, 0, 0, 0.15);',
        'three':'0px 18px 32px rgba(208, 210, 218, 0.15);',
      }
    },
  },
  plugins: [],
}

