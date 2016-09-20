module.exports = {
	formats: {
		css: {
			transforms: ['postcss']
		},
		js: {
			transforms: ['browserify']
		},
		jsx: {
			transforms: ['react', 'babel', 'react-to-markup']
		}
	}
};
