import React, {PropTypes} from 'react';
import joinClassnames from 'classnames';

const Section = (props = {}) => {
	const Component = props.tagName;
	const componentClassName = 'section';
	const className = joinClassnames(
		props.className,
		componentClassName,
		`${componentClassName}--${props.type}`
	);

	return (
		<Component
			className={className}
		>
			{props.children}
		</Component>
	);
};

Section.propTypes = {
	className: PropTypes.string,
	type: PropTypes.string,
	tagName: PropTypes.node,
	children: PropTypes.element
};

Section.defaultProps = {
	type: 'default',
	tagName: 'section'
};

export default Section;
