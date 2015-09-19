'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var ui = {
	'hierarchy': {
		'globals': {
			'displayName': 'Globals'
		},
		'atoms': {
			'displayName': 'Atoms'
		},
		'molecules': {
			'displayName': 'Molecules'
		},
		'modules': {
			'displayName': 'Organisms',
			'order': 4,
			'icon': 'modules'
		},
		'pages': {
			'displayName': 'Templates',
			'order': 5,
			'icon': 'pages'
		},
		'pages': {
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
