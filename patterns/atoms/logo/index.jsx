import React, {PropTypes} from 'react';
import joinClassnames from 'classnames';

const Logo = (props = {}) => {
	const componentClassName = 'logo';
	const classNames = joinClassnames(
		componentClassName,
		props.className
	);

	return (
		<svg
			viewBox="0 0 200 200"
			className={classNames}
		>
			<title>
				Logo
			</title>
			<path
				d="M87.5 43.75h25v25h-25v-25zM100 200c55.23 0 100-44.77 100-100S155.23 0 100 0 0 44.77 0 100s44.77 100 100 100zM56.25 43.75h25v25h-25v-25zm0 31.25h25v25h-25V75zm0 31.25h25v25h-25v-25zm62.5-62.5h25v25h-25v-25zm0 31.25h25v25h-25V75zm0 31.25h25v25h-25v-25zm-31.25 0h25v25h-25v-25zM56.25 137.5h25v25h-25v-25z"
			/>
		</svg>
	);
};

Logo.propTypes = {
	className: PropTypes.string
};

export default Logo;
