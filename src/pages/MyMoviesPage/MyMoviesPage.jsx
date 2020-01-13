import React from 'react';
import styled from 'styled-components';

import MovieSearch from '../../components/MovieSearch/MovieSearch';

const H1 = styled.h1`color: white;`;

const MyMoviesPage = (props) => {
	return (
		<div>
			<H1>MyMoviesPage</H1>
			<MovieSearch movies={props.movies} value={props.value} onChangeHandler={(e) => props.onChangeHandler(e)} />
		</div>
	);
};

export default MyMoviesPage;
