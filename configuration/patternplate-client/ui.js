<<<<<<< 12ed9a25beefaa483ddc1a1ca8e8b064bb3c490c
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var ui = {
	'hierarchy': {
		'definitions': {
			'displayName': 'Definitions',
			'icon': 'globals',
			'order': 1
		},
		'habitats': {
			'displayName': 'Habitats',
			'icon': 'globals',
			'order': 2
		},
		'atoms': {
			'order': 3
		}
	},
	'resultOrder': ['Markup', 'Script', 'Style', 'Documentation'],
	'results': {
		'Documentation': {
			'use': 'buffer'
		},
		'Markup': {
			'use': 'buffer'
		},
		'Script': {
			'use': 'demoSource'
		},
		'Style': {
			'use': 'source'
		}
	}
=======
module.exports = {
	fullScreenPatterns: [
		'globals'
	],
	hierarchy: {
		globals: {
			displayName: 'Globals',
			order: 1,
			icon: 'globals'
		},
		atoms: {
			displayName: 'Atoms',
			order: 2,
			icon: 'atoms'
		},
		molecules: {
			displayName: 'Molecules',
			order: 3,
			icon: 'molecules'
		},
		modules: {
			displayName: 'Organisms',
			order: 4,
			icon: 'modules'
		},
		templates: {
			displayName: 'Templates',
			order: 5,
			icon: 'pages'
		},
		pages: {
			displayName: 'Pages',
			order: 6,
			icon: 'pages'
		}
	},
	title: 'patternplate UI'
>>>>>>> feat(build): New setup with postcss
};
