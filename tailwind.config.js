/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-bg': "url('./home3.jpeg')", // Change to your mobile image
        'desktop-bg': "url('./home2.jpeg')", // Use a different image for desktop if desired
      },
    },
  },
  plugins: [],
};
