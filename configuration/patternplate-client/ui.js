'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var ui = {
	'hierarchy': {
		'01_globals': {
			'displayName': 'Globals'
		},
		'02_atoms': {
			'displayName': 'Atoms'
		},
		'03_molecules': {
			'displayName': 'Molecules'
		},
		'04_modules': {
			'displayName': 'Organisms',
			'order': 4,
			'icon': 'modules'
		},
		'05_templates': {
			'displayName': 'Templates',
			'order': 5,
			'icon': 'pages'
		},
		'06_pages': {
			'displayName': 'Pages',
			'order': 6,
			'icon': 'pages'
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
	},
	'fullscreenPatterns': [
		'^pages/'
	],
	'theme': 'light',
	'themeTarget': 'dark',
	'useFolderTable': true
};

exports['default'] = ui;
module.exports = exports['default'];
