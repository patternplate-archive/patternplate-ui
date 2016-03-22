module.exports = {
	formats: {
		'css': {
			'name': 'Style',
			'transforms': ['cssmodules', 'postcss']
		},
		'jsx': {
			'transforms': ['cssmodules-symbols', 'react', 'react-to-markup']
		}
	}
};
