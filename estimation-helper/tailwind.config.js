const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', flowbite.content()],
	important: true,
	theme: {
		extend: {
			animation: {
				fade: 'fadeIn .4s ease-in-out',
				slideInRight: 'slideInRight .4s ease-in-out',
				typing: "typing 4s steps(100) alternate, blink .10s infinite"
			},

			keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				slideInRight: {
					from: { transform: 'translateX(100%)', opacity: 0 },
					to: { transform: 'translateX(0)', opacity: 1 },
				},
				typing: {
					"0%": {
						width: "0%",
						visibility: "hidden"
					},
					"100%": {
						width: "100%"
					}
				},
				blink: {
					"50%": {
						borderColor: "transparent"
					},
					"100%": {
						borderColor: "white"
					}
				}
			}
		}
	},
	plugins: [flowbite.plugin()],
}
