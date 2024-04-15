import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow:{
        "ready": "10px 10px 0 0 rgb(236 254 255)",
        "ready2": "10px 10px 0 0 #b0ffff",
      },
      colors: {
        'purple-heart': {
          '50': '#faf5ff',
          '100': '#f2e9fe',
          '200': '#e8d7fd',
          '300': '#d6b8fa',
          '400': '#bd8af6',
          '500': '#a45def',
          '600': '#8e3ce1',
          '700': '#7529bf',
          '800': '#6728a1',
          '900': '#542182',
          '950': '#380c5f',
      },
        "purple": {
          "50": "#f3e5f5",
          "100": "#e1bee7",
          "200": "#ce93d8",
          "300": "#ba68c8",
          "400": "#ab47bc",
          "500": "#9c27b0",
          "600": "#8e24aa",
          "700": "#7b1fa2",
          "800": "#6a1b9a",
          "900": "#4a148c",
          "100-accent": "#ea80fc",
          "200-accent": "#e040fb",
          "400-accent": "#d500f9",
          "700-accent": "#aa00ff",
      },
      }
    },
  },
  plugins: [],
};
export default config;
