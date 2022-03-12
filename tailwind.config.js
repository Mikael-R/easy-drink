module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Roboto', 'sans-serif']
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ]
}
