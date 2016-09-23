import React, {PropTypes as t} from 'react';
import join from 'classnames';

import HeaderLogo from 'header-logo';

export default function MainNavigation(props) {
	const moduleClassName = 'main-header';
	const baseClassName = join(moduleClassName, props.className);

	return (
		<header className={baseClassName}>
			<HeaderLogo
				symbol="patternplate"
				title={props.pageTitle}
			>
				{props.pageTitle}
			</HeaderLogo>
		</header>
	);
}

MainNavigation.propTypes = {
	pageTitle: t.string.isRequired,
	className: t.string
};
