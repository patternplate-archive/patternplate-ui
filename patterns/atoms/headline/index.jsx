import React, {PropTypes} from 'react';
import joinClassnames from 'classnames';

const tagNames = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'];
const types = [...tagNames, 'logo'];

const Headline = (props = {}) => {
	const Component = props.tagName;
	const componentClassName = 'headline';
	const classNames = joinClassnames(
		componentClassName,
		`${componentClassName}--${props.type || props.tagName}`,
		props.className
	);

	return <Component className={classNames}>{props.children}</Component>;
};

Headline.propTypes = {
	className: PropTypes.string,
	children: PropTypes.element,
	tagName: PropTypes.oneOf(tagNames),
	type: PropTypes.oneOf(types)
};

Headline.defaultProps = {
	tagName: 'h1'
};

export default Headline;
