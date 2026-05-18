/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				main: '#ffbc00',
				base: '#fffefc',
				light: '#e7e8d1',
				primary: '#f4f4f4',
				medium: '#c2c4cb',
				dark: '#333',
				darkless: '#444',
				header: '#808080',
			},
			fontFamily: {
				serif: ['var(--font-lora)', 'Lora', 'serif'],
				condensed: ['var(--font-roboto-condensed)', '"Roboto Condensed"', 'sans-serif'],
			},
			maxWidth: {
				content: '1176px',
			},
		},
	},
	plugins: [],
};
