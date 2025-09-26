/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./presentation/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#23B5E8',
        },
        app: {
          black: '#010508',
          white: '#FEFEFE',
        },
      },
    },
  },
  plugins: [],
}
