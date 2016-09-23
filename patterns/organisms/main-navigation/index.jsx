import React, {PropTypes as t} from 'react';
import join from 'classnames';

import MainHeader from 'main-header';

export default function MainNavigation(props) {
	const moduleClassName = 'main-navigation';
	const baseClassName = join(moduleClassName, props.className);

	return (
		<nav className={baseClassName}>
			<MainHeader pageTitle={props.pageTitle}/>
			{props.children}
		</nav>
	);
}

MainNavigation.propTypes = {
	className: t.string,
	children: t.any,
	pageTitle: t.string.isRequired
};
