const babel = require('./babel');

module.exports = {
	'babel': {
		inFormat: 'js',
		outFormat: 'js',
		recursive: true,
		opts: babel
	},
	'browserify': {
		inFormat: 'js',
		outFormat: 'js',
		opts: {
			debug: true
		},
		transforms: {
			babelify: {
				enabled: true,
				opts: babel
			}
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
	'react-to-markup': {
		inFormat: 'js',
		outFormat: 'html',
		opts: {
			automount: true
		}
	},
	'postcss': {
		inFormat: 'css',
		outFormat: 'css',
		plugins: {
			'postcss-cssnext': {
				order: 1,
				options: {
					browsers: 'last 2 versions, not ie < 10'
				}
			}
		}
	}
};
