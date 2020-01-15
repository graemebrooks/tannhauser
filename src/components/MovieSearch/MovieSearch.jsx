import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import MovieSearchCard from '../MovieSearchCard/MovieSearchCard';

const Input = styled.input`
	background: ${(props) => props.theme.lightyearGray};
	padding: 5px;
	margin: 3px;
	border: 2px solid ${(props) => props.theme.royRed};
	border-radius: 5px;
	color: white;
	width: 50%;
	&:focus {
		outline: none !important;
		border: 2px solid #75161d;
		background: ${(props) => props.theme.backgroundBlack};
	}
`;

const Ul = styled.ul`
	max-height: 500px;
	overflow-y: auto;
	z-index: 5;
	position: absolute;
	width: 100%;
`;

const Div = styled.div`width: 100%;`;

function MovieSearch(props) {
	return (
		<Div>
			<Input value={props.value} onChange={(e) => props.onChangeHandler(e)} placeholder="Add movies" />
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
			<FontAwesomeIcon icon={faSearch} />
		</Div>
	);
}
export default MovieSearch;

MovieSearch.propTypes = {
	movies: PropTypes.array.isRequired,
	value: PropTypes.string.isRequired,
	movie: PropTypes.object.isRequired
};
