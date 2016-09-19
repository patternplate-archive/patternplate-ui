import React, {PropTypes as t} from 'react';
import {Link} from 'react-router';
import join from 'classnames';

import Icon from 'icon';

export default function Button(props) {
	const baseClassName = join('button', props.className);
	const iconClassName = `{baseClassName}__icon`;
	return (
		<Link
			className={baseClassName}
			title={props.title}
		>
			<Icon
				symbol={props.icon}
				className={iconClassName}
			/>
		</Link>
	);
}

Button.propTypes = {
	title: t.string,
	icon: t.string,
	className: t.string
};
