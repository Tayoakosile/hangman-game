/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      mouse_memoirs: ["Mouse Memoirs", "serif"],
    },
    extend: {
      colors: {
        hm_blue: "#2463FF",
      },
      backgroundImage: {
        "hman_bg--mobile": 'url("./src/assets/images/background-mobile.svg")',
        "hman_bg--tablet": 'url("./src/assets/images/background-tablet.svg")',
        "hman_bg--desktop": 'url("./src/assets/images/background-desktop.svg")',
        "hman_mobile-play-bg":
          'url("./src/assets/images/hman_mobile-play-bg.png")',
        "hman_tablet-play-bg":
          'url("./src/assets/images/hman_tablet-play-bg.svg")',
        "hman_desktop-play-bg":
          'url("./src/assets/images/hman_desktop-play-bg.svg")',
        "hman_mobile-heading":
          'url("./src/assets/images/heading/mobile-heading.svg")',
        "hman_tablet-heading":
          'url("./src/assets/images/heading/tablet-heading.svg")',
        "hman_desktop-heading":
          'url("./src/assets/images/heading/desktop-heading.svg")',
      },
    },
  },
  plugins: [],
};
