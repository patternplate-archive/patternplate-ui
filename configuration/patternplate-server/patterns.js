module.exports = {
	formats: {
<<<<<<< 12ed9a25beefaa483ddc1a1ca8e8b064bb3c490c
		'css': {
			'name': 'Style',
			'transforms': ['cssmodules', 'postcss']
		},
		'jsx': {
			'transforms': ['cssmodules-symbols', 'react', 'react-to-markup']
=======
		css: {
			transforms: ['postcss'],
			importStatement: localName => {
				return `@import "${localName}";`;
			},
			build: true
		},
		less: {
			build: false
		},
		js: {
			build: false
>>>>>>> feat(build): New setup with postcss
		}
	}
};
