import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,astro}",
    "./src/components/**/*.{js,ts,jsx,tsx,astro}",
  ],
  theme: {
    extend: {},
  },
  plugins: [typography],
};
