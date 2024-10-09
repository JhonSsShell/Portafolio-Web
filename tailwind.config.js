/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      colors:{
        "meBlue-50": "#eef3ff",
        "meBlue-100": "#d9e3ff",
        "meBlue-200": "#bccfff",
        "meBlue-300": "#8eb1ff",
        "meBlue-400": "#5986ff",
        "meBlue-500": "#335cff",
        "meBlue-600": "#1b38f5",
        "meBlue-700": "#1425e1",
        "meBlue-800": "#1720b6",
        "meBlue-900": "#19228f",
        "meBlue-950": "#141757",
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a991f7",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451", 
          "base-100": "#ffffff", 
        },
      },
      "light", 
    ],
  },
  plugins: [require("daisyui")],
}

