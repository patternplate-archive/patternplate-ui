import React, {PropTypes as t} from 'react';
import {Link} from 'react-router';
import join from 'classnames';

import Icon from 'icon';

export default function Button(props) {
	const moduleClassName = 'button';
	const baseClassName = join(moduleClassName, props.className);
	const iconClassName = `${moduleClassName}__icon`;
	return (
		<Link
			className={baseClassName}
			title={props.title}
		>
			<Icon
				symbol={props.symbol}
				className={iconClassName}
			/>
		</Link>
	);
}

Button.propTypes = {
	title: t.string.isRequired,
	symbol: t.string.isRequired,
	className: t.string
};
