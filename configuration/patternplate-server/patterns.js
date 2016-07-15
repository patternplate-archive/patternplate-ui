module.exports = {
	formats: {
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
		}
	}
};
