import { Barlow, Montserrat, Russo_One } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'msm': '500px',
        '3xl': '1700px',
      },
      fontFamily: {
        Montserrat: ['"Montserrat"', "sans-serif"],
        Hind: ['"Hind"', "sans-serif"],
        Russo_One: ['"Russo One"', "sans-serif"],
        Barlow: ['"Barlow"', "sans-serif"],
      },
    colors: {
      'mywhite': '#F6F9FC',
      'mygreen': '#4C9A2A',
      'myblack': '#0A2513',
    },
  },
},
  plugins: [],
};
export default config;
