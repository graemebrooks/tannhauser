import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Div = styled.div`
	color: white;
	width: 80vw;
	margin: 20px;
	background: ${(props) => props.theme.subNavGray};
	border: 5px solid ${(props) => props.theme.pulsarPurple};
	border-radius: 10px;
	@media (max-width: 768px) {
		width: 100vw;
		background: ${(props) => props.theme.subNavGray};
		border: none;
		border-radius: 0px;
		img {
			height: 5rem;
		}
	}
`;

const ComparisonContainer = (props) => {
	return (
		<Div>
			<h2>Comparison!</h2>
			<div>{props.userMovies.map((movie) => <p>{movie.movieTitle}</p>)}</div>
			<div>{props.compareMovies.map((movie) => <p>{movie.movieTitle}</p>)}</div>
		</Div>
	);
};

export default ComparisonContainer;
