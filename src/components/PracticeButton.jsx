import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
	font-family: sans-serif;
	font-size: 1.3rem;
	border: 2px solid ${(props) => props.theme.primaryGreen};
	border-radius: 5px;
	padding: 7px 10px;
	margin: 5px;
	background: transparent;
	color: ${(props) => props.theme.primaryGreen};
	&:hover {
		border: 2px solid ${(props) => props.theme.secondaryOrange};
		color: ${(props) => props.theme.secondaryOrange};
		box-shadow: 0 0 5px ${(props) => props.theme.secondaryOrange};
	}
`;

function PracticeButton(props) {
	return <Button>{props.value}</Button>;
}

export default PracticeButton;
