/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
 
    // Or if using `src` directory:
    
  ],
  plugins: [
    require("flowbite/plugin")
    
  ],
  theme: {
    colors: {
      primary: {"50":"#fff7ed","100":"#ffedd5","200":"#fed7aa","300":"#fdba74","400":"#fb923c","500":"#f97316","600":"#ea580c","700":"#c2410c","800":"#9a3412","900":"#7c2d12","950":"#431407"},
      'light-blue': 'rgba(193, 206, 253, 0.4)',
      'light-orange': 'rgba(255, 216, 179, 0.4)',
    },
    
  },
  fontFamily: {
    nunito: ['Nunito Sans', 'sans-serif'],
  },
  
};