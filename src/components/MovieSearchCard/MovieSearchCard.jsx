import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Card = styled.div`
	display: flex;
	background: ${(props) => props.theme.backgroundBlack};
	border: solid 2px ${(props) => props.theme.royRed};
	width: 70%;
	padding: 10px;
	color: white;
	&:hover {
		background: ${(props) => props.theme.royRed};
	}

	img {
		height: 15rem;
	}

	h3 {
		color: white;
		margin: 2rem;
	}

	a {
		color: inherit;
	}
`;

function MovieSearchCard(props) {
	let releaseYear = '';
	if (props.movie.release_date) {
		releaseYear = props.movie.release_date.substring(0, 4);
	}
	return (
		<Link to="/movieDetail" style={{ textDecoration: 'none' }}>
			<a onClick={(movie) => props.handleMovieDetailClick(props.movie)}>
				<Card>
					<img src={`http://image.tmdb.org/t/p/w185${props.movie.poster_path}`} />
					<h3>
						{props.movie.title} ({releaseYear})
					</h3>
					<p>{props.movie.overview}</p>
				</Card>
			</a>
		</Link>
	);
}
export default MovieSearchCard;

MovieSearchCard.propTypes = {
	movie: PropTypes.object.isRequired
};
