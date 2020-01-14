import React from 'react';
import styled from 'styled-components';
import MovieSearchCard from '../MovieSearchCard/MovieSearchCard';

const Input = styled.input`
	background: ${(props) => props.theme.backgroundBlack};
	padding: 5px;
	margin: 3px;
	border: 2px solid ${(props) => props.theme.primaryGreen};
	border-radius: 5px;
	color: white;
	width: 50%;
	&:hover {
		/* border: 2px solid yellow; */
	}
	&:focus {
		outline: none !important;
		border: 2px solid ${(props) => props.theme.royRed};
	}
`;

const Ul = styled.ul`
	max-height: 500px;
	overflow-y: auto;
	z-index: 5;
	position: absolute;
`;

const Div = styled.div`width: 100%;`;

function MovieSearch(props) {
	return (
		<Div>
			<Input value={props.value} onChange={(e) => props.onChangeHandler(e)} placeholder="Search movies" />
			{props.movies ? (
				<Ul>
					{props.movies.map((movie) => {
						return (
							<li>
								<MovieSearchCard
									movie={movie}
									handleMovieDetailClick={(movie) => props.handleMovieDetailClick(movie)}
								/>
							</li>
						);
					})}
				</Ul>
			) : null}
		</Div>
	);
}
export default MovieSearch;
