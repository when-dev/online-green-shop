import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          "custom": '#46A358',
          "custom-transparent": 'rgba(70, 163, 88, 0.1)',
        },
      },
      container: {
        center: true,
      },
      screens: {
        'xl': '1200px'
      },
      fontFamily: {
        Mulish: ['Mulish', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
