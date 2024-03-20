/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      mouse_memoirs: ['Mouse Memoirs', 'serif'],
    },
    extend: {
      backgroundImage:{
        'hman_bg--mobile':'url("/src/assets/images/background-mobile.svg")',
        'hman_bg--tablet':'url("/src/assets/images/background-tablet.svg")',
        'hman_bg--desktop':'url("/src/assets/images/background-desktop.svg")',
      }
    },
  },
  plugins: [],

}

