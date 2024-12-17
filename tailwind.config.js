/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        xs: "340px", // Smallest screen size (for very small mobile devices)
        sm: "640px", // Small mobile devices and above
        md: "768px", // Tablets and small laptops
        lg: "1024px", // Laptops and larger tablets
        xl: "1280px", // Desktops
        "2xl": "1536px", // Larger screens (e.g., wide desktop monitors)
      },
    },
  },
  plugins: [],
};