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
	'react-to-markup': {
		inFormat: 'js',
		outFormat: 'html'
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
