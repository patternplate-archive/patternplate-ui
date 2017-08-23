import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icon from 'icon';

export default function HeaderLogo(props) {
	const icon = props.image ?
		props.image :
		<Icon symbol={props.symbol}/>;

	return (
		<SytledHeaderLogo
			className={props.className}
			title={props.title}
		>
			{icon}
			<span>
				{props.children}
			</span>
		</SytledHeaderLogo>
	);
}

const SytledHeaderLogo = styled.div`
	width: 100%;
	height: auto;
	color: ${props => props.theme.color};
	fill: currentColor;
	stroke: currentColor;
	stroke-width: 0;
`;

HeaderLogo.propTypes = {
	title: PropTypes.string.isRequired,
	symbol: PropTypes.string,
	image: PropTypes.node,
	className: PropTypes.string,
	children: PropTypes.any
};
