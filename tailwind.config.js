module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary:"#006595",
      secondary: "#008d7f",
      third:"#50ab42",
      primaryHov:"#003D59",
      secondaryHov: "#00554C",
      thirdHov:"#306728",
      white:"white",
      gray:"gray"
    },
    fontFamily: {
      sans: ['Poppins', "sans-serif"]
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


// // Example `tailwind.config.js` file
// const colors = require('tailwindcss/colors')

// module.exports = {
//   theme: {
//     colors: {
//       gray: colors.coolGray,
//       blue: colors.lightBlue,
//       red: colors.rose,
//       pink: colors.fuchsia,
//     },
//     fontFamily: {
//       sans: ['Graphik', 'sans-serif'],
//       serif: ['Merriweather', 'serif'],
//     },
//     extend: {
//       spacing: {
//         '128': '32rem',
//         '144': '36rem',
//       },
//       borderRadius: {
//         '4xl': '2rem',
//       }
//     }
//   },
//   variants: {
//     extend: {
//       borderColor: ['focus-visible'],
//       opacity: ['disabled'],
//     }
//   }
// }