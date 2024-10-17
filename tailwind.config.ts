import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      noScroll: {
        '.no-scrollbar::-webkit-scrollbar': { display: 'none' },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bgnav: "var(--bgnav)",
        subtitlel: "var(--subtitlel)",
        subtitler: "var(--subtitler)",
        gradientl1: "#64EDAE",
        gradientr1: "#088395",
        bgcontainer: "var(--bgcontainer)", 
        bordercolor: "#97979777" ,
      },
    },
  },
  plugins: [],
};
export default config;
