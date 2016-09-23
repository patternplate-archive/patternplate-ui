import React, {PropTypes as t} from 'react';
import {Link} from 'react-router';
import join from 'classnames';

import Icon from 'icon';

export default function HeaderLogo(props) {
	const moduleClassName = 'header-logo';
	const baseClassName = join(moduleClassName, props.className);
	const iconClassName = `${moduleClassName}__icon`;
	const textClassName = `${moduleClassName}__text`;
	return (
		<Link
			className={baseClassName}
			title={props.title}
		>
			<Icon
				symbol={props.symbol}
				className={iconClassName}
			/>
			<span className={textClassName}>
				{props.children}
			</span>
		</Link>
	);
}

HeaderLogo.propTypes = {
	title: t.string.isRequired,
	symbol: t.string.isRequired,
	className: t.string,
	children: t.any
};
