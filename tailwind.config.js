module.exports = {
  content: [
    "./src/components/**/*.{tsx,js,ts}",
    "./src/pages/**/*.{tsx,js,ts}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: "#ffd34e",
        gradient: "#4f71c6",
        btnYellow: "#FFD34E",
        sideColor: "#F9F9F9",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-debug-screens"),
  ],
};
