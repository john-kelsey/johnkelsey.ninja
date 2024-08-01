/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#070c22",
        white: "#fff",
        lightgray: "#dbd5d5",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        poppins: "Poppins",
        roboto: "Roboto",
      },
    },
    fontSize: {
      "9xl": "28px",
      "3xl": "22px",
      "59xl": "78px",
      "28xl": "47px",
      "43xl": "62px",
      lgi: "19px",
      "7xl": "26px",
      "13xl": "32px",
      "54xl": "73px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
