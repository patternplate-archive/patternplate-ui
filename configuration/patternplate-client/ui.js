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
};

exports['default'] = ui;
module.exports = exports['default'];
