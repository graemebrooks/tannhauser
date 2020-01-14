import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`color: white;`;
const Main = styled.main`
	height: 100vh;
	background: ${(props) => props.theme.primaryGreen};
`;

const MovieDetailPage = (props) => {
	return (
		<Main>
			<H1>Movie Details</H1>
			<img src={`http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`} />
			<h2>{props.currentMovie.title}</h2>
			<p>{props.currentMovie.overview}</p>
		</Main>
	);
};

export default MovieDetailPage;
