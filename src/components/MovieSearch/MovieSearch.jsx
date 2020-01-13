import React from 'react';
import styled from 'styled-components';
import MovieSearchCard from '../MovieSearchCard/MovieSearchCard';

const Input = styled.input`
	background: rgba(242, 242, 242, 0.3);
	padding: 5px;
	border: 2px solid white;
	border-radius: 10px;
	color: white;
	&:focus {
		outline: none !important;
		border: 2px solid ${(props) => props.theme.primaryGreen};
		background: transparent;
	}
`;

function MovieSearch(props) {
	return (
		<div>
			<Input value={props.value} onChange={(e) => props.onChangeHandler(e)} placeholder="Search movies" />
			{props.movies ? (
				<ul>
					{props.movies.map((movie) => {
						return (
							<li>
								<MovieSearchCard movie={movie} />
							</li>
						);
					})}
				</ul>
			) : null}
		</div>
	);
}
export default MovieSearch;
