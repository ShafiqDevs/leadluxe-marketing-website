import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial':
					'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				text: 'hsl(var(--text))',
				background: 'hsl(var(--background))',
				primary: 'hsl(var(--primary))',
				secondary: 'hsl(var(--secondary))',
				accent: 'hsl(var(--accent))',
			},
			transitionProperty: {
				height: 'height',
			},
		},
	},
	plugins: [],
};
export default config;
