/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      "kalameh-thin": "kalameh-thin",
      "Kalameh-regular": "Kalameh-regular",
      "Kalameh-bold": "Kalameh-bold",
      "Kalameh-black": "Kalameh-black",
      "Kalameh-regular-number": "Kalameh-regular-number",
    },
    extend: {
      backgroundImage: {
        'gold': "linear-gradient(90deg, rgba(255,253,246,1) 0%, rgba(255,255,255,1) 100%)",
      }
    },
    container: {
      center: true,
      padding: {
        // DEFAULT: '1.2rem',
      }
    },
  },
  plugins: [],
}