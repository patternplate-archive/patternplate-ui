const pkg = require('../../package.json');

module.exports = {
	browserify: {
		transforms: {
			babelify: {
				opts: {
					stage: 0,
					optional: ['runtime']
				}
			}
		}
	},
	react: {
		opts: {
			stage: 0
		}
	},
	'react-to-markup': {
		opts: {
			stage: 0,
			automount: false
		}
	},
	postcss: {
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
