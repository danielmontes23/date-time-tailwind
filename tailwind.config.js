/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  scripts: {
    "dev": "tailwindcss -i ./src/input.css -o ./src/style.css --watch"
  }
}

