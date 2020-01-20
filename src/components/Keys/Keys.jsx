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
	width: 725px;
	padding: 10px;

	.keyBox {
		height: 10px;
		width: 10px;
		margin: 0 10px;
		background: ${(props) => props.theme.primaryGreen};
	}

	.haveNot {
		background: ${(props) => props.theme.royRed};
	}

	.wantTo {
		background: ${(props) => props.theme.boronBlue};
	}

	.again {
		background: ${(props) => props.theme.galacticGold};
	}

	p {
		margin: 0;
	}
`;

const Keys = (props) => {
	return (
		<Div>
			<p>Watched</p>
			<div className="keyBox" />
			<p>Watch Again</p>
			<div className="keyBox again" />
			<p>Want to</p>
			<div className="keyBox wantTo" />
			<p>Have not</p>
			<div className="keyBox haveNot" />
		</Div>
	);
};

export default Keys;
