/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          'dark': '#2f5f8e',
          'DEFAULT': '#369dd8',
          'light': '#39c5f3',
        },
        secondary: {
          'dark': '#eea835',
          'light': '#ffd656',
        },
      },
			keyframes: {
				wave: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
			},
			animation: {
        wave: 'wave 2s ease-in-out infinite',
      }
		},
  },
  plugins: [],
}

