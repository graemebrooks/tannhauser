import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
	display: flexbox;
	background: ${(props) => props.theme.primaryGreen};
	width: 70%;
	&:hover {
		background: greenyellow;
	}
`;

function MovieSearchCard(props) {
	return (
		<a>
			<Card>
				<h2>{props.movie.title} </h2>
				<img src={`http://image.tmdb.org/t/p/w185${props.movie.poster_path}`} />
			</Card>
		</a>
	);
}
export default MovieSearchCard;
