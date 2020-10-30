const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');
// const production = process.env.NODE_ENV === 'production';
const production = true;
const plugins = production
	? [
			require('tailwindcss'),
			require('autoprefixer'),
			purgecss({
				content: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx', './public/index.html'],
				defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
				whitelist: [],
				keyframes: true,
			}),
			cssnano({ preset: 'default' }),
	  ]
	: [require('tailwindcss')];

module.exports = { plugins };
