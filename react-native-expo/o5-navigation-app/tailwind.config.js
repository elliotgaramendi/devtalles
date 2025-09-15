/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./ui/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#49129C',
        secondary: {
          DEFAULT: '#B40086',
          100: '#C51297',
          200: '#831266',
        },
        tertiary: '#EF2967'
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