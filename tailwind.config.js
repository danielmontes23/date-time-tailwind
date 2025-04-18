/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: []
}

"dev": "tailwindcss -i ./public/input.css -o ./public/style.css --watch"

