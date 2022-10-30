/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  plugins: [require("tailwind-dracula")("dracula")],
}
