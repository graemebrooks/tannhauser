import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { retrieveMovies } from '../../services/retrieve-movies';

import MoviesSubNav from '../../components/MoviesSubNav/MoviesSubNav';
import LibraryContainer from '../../components/LibraryContainer/LibraryContainer';

const Div = styled.div`
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	width: 100vw;
`;

const MyMoviesPage = (props) => {
	const [ moviesList, setMoviesList ] = useState([ {} ]);

	useEffect(() => {
		retrieveMovies().then((dbMovies) => {
			setMoviesList([ dbMovies ]);
		});
	}, []);

	console.log(moviesList);

	return (
		<Div>
			<MoviesSubNav
				movies={props.movies}
				value={props.value}
				onChangeHandler={(e) => props.onChangeHandler(e)}
				handleMovieDetailClick={props.handleMovieDetailClick}
			/>
			<div />
			<LibraryContainer movies={moviesList} />
		</Div>
	);
};

export default MyMoviesPage;
