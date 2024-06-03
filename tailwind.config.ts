import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("keep-react/preset")],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        nuevo:{
          100:'#e9e0d1',
          200:'#91a398',
          300:'#33605a',
          400:'#070001',
          500:'#68462b'
        }
      }
    },
  },
  plugins: [],
};
export default config;
