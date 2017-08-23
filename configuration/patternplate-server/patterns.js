module.exports = {
	formats: {
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
