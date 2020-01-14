import React from 'react';
import styled from 'styled-components';

import MoviesSubNav from '../../components/MoviesSubNav/MoviesSubNav';
import MovieSearch from '../../components/MovieSearch/MovieSearch';

const H1 = styled.h1`color: white;`;

const MyMoviesPage = (props) => {
	return (
		<div>
			<MoviesSubNav
				movies={props.movies}
				value={props.value}
				onChangeHandler={(e) => props.onChangeHandler(e)}
				handleMovieDetailClick={props.handleMovieDetailClick}
			/>
			<H1>MyMoviesPage</H1>
		</div>
	);
};

export default MyMoviesPage;
