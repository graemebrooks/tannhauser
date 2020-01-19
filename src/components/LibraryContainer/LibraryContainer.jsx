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
				props.movies.map((movieItem, i) => {
					return (
						<MovieCard
							key={i}
							movie={movieItem}
							hasWatched={movieItem.watchedStatus}
							deleteMovie={props.deleteMovie}
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
