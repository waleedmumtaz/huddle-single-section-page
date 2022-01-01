const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      backgroundImage: {
        'pattern-mobile': 'url("/assets/bg-mobile.svg")',
        'pattern-desktop': 'url("/assets/bg-desktop.svg")',
      },
      colors: {
        cstm: {
          primary: {
            violet: 'hsl(257, 40%, 49%)',
            'soft-magenta': 'hsl(300, 69%, 71%)',
          },
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
    },
  },

  plugins: [],
}

module.exports = config
