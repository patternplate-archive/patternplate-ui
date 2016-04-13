module.exports = {
	tasks: {
		static: false,
		patterns: true,
		bundles: false,
		cache: true
	},
	commonjs: {
		filters: {
			inFormats: ['css', 'jsx']
		},
		transforms: {
			'resolve-includes': {
				outFormat: 'css'
			}
		}
	}
};
