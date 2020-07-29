const tailwind = require('tailwindcss');
const postcssimport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const plugins = process.env.NODE_ENV === 'production'
	? [postcssimport, tailwind, autoprefixer, cssnano]
	: [postcssimport, tailwind, autoprefixer];

module.exports = { plugins };