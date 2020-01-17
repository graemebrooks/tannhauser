import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import MovieCard from '../MovieCard/MovieCard';

const Div = styled.div`
	color: white;
	width: 80vw;
	margin: 20px;
	background: ${(props) => props.theme.subNavGray};
`;

const MyMoviesPage = (props) => {
	return (
		<Div>
			{props.movies[0].watchedStatus !== null &&
				props.movies.map((movie) => {
					return <MovieCard movie={movie} hasWatched={movie.watchedStatus} />;
				})}
		</Div>
	);
};

export default MyMoviesPage;
