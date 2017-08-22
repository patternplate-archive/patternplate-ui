import React, {PropTypes as t} from 'react';
import join from 'classnames';

import Button from 'button';

export default function NavigationToolbar(props) {
	const moduleClassName = 'navigation-toolbar';
	const baseClassName = join(moduleClassName, props.className);
	const toolListClassName = `${moduleClassName}__tool-list`;
	// const minimizeButtonClassName = `${moduleClassName}__minimize-button`;

	return (
		<div className={baseClassName}>
			<ul className={toolListClassName}>
				{props.tools}
			</ul>
			<Button
				symbol="arrow-double-left"
				layout="no-border"
			/>
		</div>
	);
}

NavigationToolbar.propTypes = {
	className: t.string,
	tools: t.arrayOf(t.node)
};
