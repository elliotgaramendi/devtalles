/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./ui/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#23B5E8',
          100: '#B6E6F7',
          200: '#91DAF3',
        },
        secondary: '#234B96',
        warning: '#E8B523',
        app: {
          black: '#010508',
          white: '#FEFEFE',
        },
      },
      fontFamily: {
        'work-black': ['WorkSans-Black', 'sans-serif'],
        'work-bold': ['WorkSans-Bold', 'sans-serif'],
        'work-medium': ['WorkSans-Medium', 'sans-serif'],
        'work-regular': ['WorkSans-Regular', 'sans-serif'],
        'work-light': ['WorkSans-Light', 'sans-serif'],
      }
    },
  },
  plugins: [],
}