const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: {
		enabled: process.env.NODE_ENV === 'production',
		content: ['./index.html', './src/**/*.tsx', './src/**/*.ts'],
	},
	theme: {
		extend: {
			colors: {
				teal: colors.teal,
				hooks: { DEFAULT: '#61dafb', dark: '#283f4e' },
				mobx: { DEFAULT: '#ea6618', dark: '#3d2e2d' },
				redux: { DEFAULT: '#764abc', dark: '#2c2a45' },
			},
		},
	},
};
