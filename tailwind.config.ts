import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // Esto escanea la raíz (donde están tus carpetas)
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    // Esto escanea lo que esté dentro de src
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores institucionales para Master Almaraz
        primary: "#0F2F57",
        secondary: "#C9A35A",
        accent: "#F7F4EE",
      },
    },
  },
  plugins: [],
};
export default config;