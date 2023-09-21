/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#15802a",
        
"secondary": "#5bea8b",
        
"accent": "#68afc9",
        
"neutral": "#231f29",
        
"base-100": "#ededee",
        
"info": "#5ad8f2",
        
"success": "#62dabc",
        
"warning": "#eda507",
        
"error": "#db2a24",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

