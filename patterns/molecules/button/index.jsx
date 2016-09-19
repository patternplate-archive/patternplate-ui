import React, {PropTypes as t} from 'react';
import {Link} from 'react-router';

import Icon from 'icon';

export default function Button(props) {
	return (
		<Link
			className="button"
			title={props.title}
		>
			<Icon symbol={props.icon}/>
		</Link>
	);
}

Button.propTypes = {
	title: t.string,
	icon: t.string
};
