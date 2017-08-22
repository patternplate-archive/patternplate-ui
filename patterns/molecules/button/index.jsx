import React, {PropTypes as t} from 'react';
import {Link} from 'react-router';
import join from 'classnames';

import Icon from 'icon';

const buttonTypes = {
	button: 'button',
	submit: 'button',
	link: 'link'
};

export default function Button(props) {
	const moduleClassName = 'button';
	const baseClassName = join(
		moduleClassName, {
			[`${moduleClassName}--no-border`]: props.layout === 'no-border'
		},
		props.className
	);
	const iconClassName = `${moduleClassName}__icon`;
	const buttonType = buttonTypes[props.type];

	switch (buttonType) {
		case 'button':
			return (<button
				className={baseClassName}
				title={props.title}
			>
				{props.children}
				<Icon
					symbol={props.symbol}
					className={iconClassName}
				/>
			</button>);

		case 'link':
			return <Link
				className={baseClassName}
				title={props.title}
			>
				<Icon
					symbol={props.symbol}
					className={iconClassName}
				/>
			</Link>
	}
}

Button.propTypes = {
	title: t.string.isRequired,
	symbol: t.string.isRequired,
	className: t.string,
	children: t.any,
	layout: t.oneOf(['no-border']),
	type: t.oneOf(Object.keys(buttonTypes))
};

Button.defaultProps = {
	type: 'button'
}
