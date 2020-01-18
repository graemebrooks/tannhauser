import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import MovieCard from '../MovieCard/MovieCard';

const Div = styled.div`
	color: white;
	width: 80vw;
	margin: 20px;
	background: ${(props) => props.theme.subNavGray};
`;

const LibraryContainer = (props) => {
	return (
		<Div>
			{props.movies[0] !== null ? (
				props.movies.map((movieItem) => {
					return <MovieCard movie={movieItem} hasWatched={movieItem.watchedStatus} />;
				})
			) : (
				<p>No movies yet!</p>
			)}
		</Div>
	);
};

export default LibraryContainer;
