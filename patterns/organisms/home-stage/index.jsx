import React, {PropTypes} from 'react';
import joinClassnames from 'classnames';

import Headline from 'headline';
import Logo from 'logo';
// import Button from 'button';
import Section from 'section';

const HomeStage = (props = {}) => {
	const componentClassName = 'home-stage';
	const className = joinClassnames(
		props.className,
		componentClassName
	);

	return (
		<Section
			className={className}
			tagName={props.tagName}
			type="blueprint"
		>
			<Logo
				className={`${componentClassName}__logo`}
			/>
			<Headline
				className={`${componentClassName}__headline`}
			>
				{props.title}
			</Headline>
			<Headline
				className={`${componentClassName}__headline`}
				tagName="p"
				type="h4"
			>
				create, show, deliver.
			</Headline>
			{props.children}
			{/*
				<Button
					type=""
					href={props.ctaLink}
					className={`${componentClassName}__button}
				>
					{props.ctaTitle}
				</Button>
			*/}
		</Section>
	);
};

HomeStage.propTypes = {
	className: PropTypes.string,
	tagName: PropTypes.node,
	children: PropTypes.element,
	title: PropTypes.string,
	ctaTitle: PropTypes.string,
	ctaLink: PropTypes.string
};

HomeStage.defaultProps = {
	tagName: 'section'
};

export default HomeStage;
