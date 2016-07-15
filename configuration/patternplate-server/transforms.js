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
			'postcss-apply': {
				order: 1
			},
			'postcss-nested': {
				order: 2
			},
			'postcss-custom-properties': {
				order: 3
			},
			'postcss-strip-units': {
				order: 4
			},
			'postcss-cssnext': {
				order: 5,
				options: {
					browsers: 'last 2 versions, not ie < 10',
					features: {
						customProperties: false
					}
				}
			}
		}
	}
};
