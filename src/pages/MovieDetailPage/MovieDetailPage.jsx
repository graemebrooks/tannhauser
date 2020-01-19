import React from 'react';
import styled from 'styled-components';

import MovieDetailForm from '../../components/MovieDetailForm/MovieDetailForm';
import MovieDetailInfo from '../../components/MovieDetailInfo/MovieDetailInfo';

const Main = styled.main`
	height: 100vh;
	background: ${(props) => props.theme.backgroundBlack};
	display: grid;
	grid-template-columns: 1fr 1fr;
`;

const MovieDetailPage = (props) => {
	return (
		<Main>
			<MovieDetailInfo currentMovie={props.currentMovie} />
			<MovieDetailForm
				user={props.user}
				currentMovie={props.currentMovie}
				handleMovieDetailSubmit={props.handleMovieDetailSubmit}
				handleMovieDetailUpdate={props.handleMovieDetailUpdate}
			/>
		</Main>
	);
};

export default MovieDetailPage;
