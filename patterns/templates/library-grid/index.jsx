import React, {PropTypes as t} from 'react';

export default function TemplateLibrary(props) {
	return (
		<div className="template-library">
			<div className="template-library__main-sidebar">
				{props.sidebar}
			</div>
			<div className="template-library__main-content">
				{props.children}
			</div>
		</div>
	);
}

TemplateLibrary.propTypes = {
	children: t.any,
	sidebar: t.any
};
