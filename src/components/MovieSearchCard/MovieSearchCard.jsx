import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Card = styled.div`
	display: flex;
	background: ${(props) => props.theme.backgroundBlack};
	border: solid 2px ${(props) => props.theme.pulsarPurple};
	width: 70%;
	padding: 10px;
	color: white;
	&:hover {
		background: ${(props) => props.theme.pulsarPurple};
	}

	img {
		height: 8rem;
	}

	h3 {
		color: white;
		margin: 2rem;
	}
`;

function MovieSearchCard(props) {
	let releaseYear = '';
	if (props.movie.release_date) {
		releaseYear = props.movie.release_date.substring(0, 4);
	}
	return (
		<Link to="/movieDetail" style={{ textDecoration: 'none' }}>
			<div onClick={(movie) => props.handleMovieDetailClick(props.movie)}>
				<Card>
					<img alt="Movie Poster" src={`http://image.tmdb.org/t/p/w185${props.movie.poster_path}`} />
					<h3>
						{props.movie.title} {releaseYear && `(${releaseYear})`}
					</h3>
				</Card>
			</div>
		</Link>
	);
}
export default MovieSearchCard;

MovieSearchCard.propTypes = {
	movie: PropTypes.object.isRequired
};
