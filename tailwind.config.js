/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: "var(--text-color)",
        fill: "var(--background-color)",
        second: "var(--secondary-color)",
        primary: "var(--primary-color)",
        accent: "var(--accent-color)",
      },
    },
  },
  plugins: [],
};
