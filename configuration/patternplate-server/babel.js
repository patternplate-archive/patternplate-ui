'use strict';

const babelPresets = ['es2015', 'react'];
const babelPlugins = [
	'add-module-exports',
	'transform-decorators-legacy',
	'transform-class-properties',
	'transform-es2015-destructuring',
	'transform-es2015-modules-commonjs',
	'transform-object-rest-spread'
];

module.exports = {
	presets: babelPresets,
	plugins: babelPlugins
};
