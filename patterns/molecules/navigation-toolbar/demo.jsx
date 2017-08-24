import React from 'react';
import Pattern from 'Pattern';
import styled from 'styled-components';

const Dummy = styled.div`
	width: 30px;
	height: 30px;
	background-color: #ccc;
`;

const tools = [];
for (let index = 0; index < 3; index++) {
	tools.push(<Dummy key={index}/>);
}

<Pattern>{tools}</Pattern>
