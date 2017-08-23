var babelPresets = ['es2015', 'react'];
var babelPlugins = [
	'add-module-exports',
	'transform-decorators-legacy',
	'transform-class-properties',
	'transform-es2015-destructuring',
	'transform-es2015-modules-commonjs',
	'transform-object-rest-spread'
];

var babelOpts = {
	presets: babelPresets,
	plugins: babelPlugins
};

module.exports = {
	'babel': {
		inFormat: 'jsx',
		outFormat: 'js',
		opts: babelOpts
	},
	'browserify': {
		inFormat: 'js',
		outFormat: 'js',
		opts: {
			debug: true
		}
	},
	'react': {
		inFormat: 'jsx',
		outFormat: 'js'
	},
	'react-mount': {
		inFormat: 'js',
		outFormat: 'js'
	},
	'styled-components': {
		inFormat: 'js',
		outFormat: 'js'
	},
	'react-to-markup': {
		inFormat: 'js',
		outFormat: 'html'
	}
};
