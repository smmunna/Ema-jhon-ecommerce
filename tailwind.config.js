/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#9df2a0",
          "secondary": "#36d846",
          "accent": "#ed9ac7",
          "neutral": "#251627",
          "base-100": "#F7F7F8",
          "info": "#7BC4F4",
          "success": "#6CDAC2",
          "warning": "#FAD866",
          "error": "#FD687F",
        },
      },
    ],
  },
  //...
  plugins: [require("daisyui")],
}
