import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mobile-light": "url('/images/bg-mobile-light.jpg')",
        "mobile-dark": "url('/images/bg-mobile-dark.jpg')",
        "desktop-light": "url('/images/bg-desktop-light.jpg')",
        "desktop-dark": "url('/images/bg-desktop-dark.jpg')",
      },
    },
    content: {
      check: "url('/images/icon-check.svg')"
    }
  },
  plugins: [require('@tailwindcss/forms')],
  darkMode: "class"
};
export default config;
