module.exports = {
	formats: {
		css: {
			transforms: ['postcss']
		},
		jsx: {
			transforms: ['react', 'babel', 'react-to-markup']
		}
	},
	mount: {
		format: ['jsx'],
		name: 'Components',
		transforms: ['react', 'babel', 'react-mount', 'browserify']
	}
};
