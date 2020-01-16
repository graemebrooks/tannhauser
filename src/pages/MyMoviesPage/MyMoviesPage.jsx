import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { retrieveMovies } from '../../services/retrieve-movies';

import MoviesSubNav from '../../components/MoviesSubNav/MoviesSubNav';

const Div = styled.div`color: white;`;

const MyMoviesPage = (props) => {
	const [ moviesList, setMoviesList ] = useState([ {} ]);

	useEffect(() => {
		retrieveMovies().then((dbMovies) => {
			console.log(`dbMovies: ${dbMovies[0].movieTitle}`);
			setMoviesList(dbMovies);
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
			<h1>MyMoviesPage</h1>
			{moviesList.map((movie) => {
				return (
					<div>
						<p>{movie.movieTitle}</p>
						<p>{movie.movieReleaseYear}</p>
						<p>{movie.moviePlotSummary}</p>
					</div>
				);
			})}
		</Div>
	);
};

export default MyMoviesPage;
