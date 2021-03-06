import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import MovieCard from '../MovieCard/MovieCard';

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

const LibraryContainer = (props) => {
	return (
		<Div>
			{props.movies[0] !== null ? (
				props.movies.map((movieItem, i) => {
					return (
						<MovieCard
							key={i}
							movie={movieItem}
							handleMovieDetailClick={(movie) => props.handleMovieDetailClick(movie)}
							hasWatched={movieItem.watchedStatus}
							deleteMovie={props.deleteMovie}
							user={props.user}
						/>
					);
				})
			) : (
				<p>No movies yet!</p>
			)}
		</Div>
	);
};

export default LibraryContainer;
