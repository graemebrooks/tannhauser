import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Div = styled.nav`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background: transparent;
	border: solid 1px ${(props) => props.theme.lightyearGray};
	border-radius: 10px;
	width: 300px;
	padding: 10px;

	.keyBox {
		height: 10px;
		width: 10px;
		margin: 0 10px;
		background: ${(props) => props.theme.primaryGreen};
	}

	p {
		margin: 0;
	}
`;

const Keys = (props) => {
	return (
		<Div>
			<p>Keys!</p>
			<div className="keyBox" />
			<p>Keys!</p>
			<div className="keyBox" />
			<p>Keys!</p>
			<div className="keyBox" />
			<p>Keys!</p>
			<div className="keyBox" />
		</Div>
	);
};

export default Keys;
