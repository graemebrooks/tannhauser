import React from 'react';
import styled from 'styled-components';

import MovieDetailForm from '../../components/MovieDetailForm/MovieDetailForm';
import MovieDetailInfo from '../../components/MovieDetailInfo/MovieDetailInfo';

const H1 = styled.h1`color: white;`;
const Main = styled.main`
	height: 100vh;
	background: ${(props) => props.theme.backgroundBlack};
`;

const MovieDetailPage = (props) => {
	return (
		<Main>
			<H1>Movie Details</H1>
			<MovieDetailForm
				user={props.user}
				currentMovie={props.currentMovie}
				handleMovieDetailSubmit={props.handleMovieDetailSubmit}
			/>
			<MovieDetailInfo currentMovie={props.currentMovie} />
		</Main>
	);
};

export default MovieDetailPage;
