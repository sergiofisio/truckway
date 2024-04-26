/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        md: {
          min: "1100px",
          max: "1440px",
        },
        sm: {
          max: "1100px",
        },
      },
      fontFamily: {
        title: ["Quicksand", "sans-serif"],
        text: ["Nunito", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        red: "#FF0700",
      },
      animation: {
        "truck-slide": "truck-slide 5s linear infinite",
      },
      keyframes: {
        "truck-slide": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(300%)" },
        },
      },
      typography: () => ({
        DEFAULT: {
          css: {
            p: {
              textIndent: "1.5em",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
