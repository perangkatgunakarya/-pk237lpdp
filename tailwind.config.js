/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.html"],
  theme: {
    extend: {
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

