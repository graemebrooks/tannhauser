import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import MovieSearchCard from '../MovieSearchCard/MovieSearchCard';

const Input = styled.input`
	background: ${(props) => props.theme.lightyearGray};
	padding: 5px;
	margin: 3px;
	border: 2px solid ${(props) => props.theme.pulsarPurple};
	border-radius: 5px;
	color: white;
	width: 60%;
	&:focus {
		outline: none !important;
		border: 2px solid ${(props) => props.theme.primaryGreen};
		background: ${(props) => props.theme.backgroundBlack};
	}
`;

const Ul = styled.ul`
	max-height: 500px;
	overflow-y: auto;
	z-index: 5;
	position: absolute;
	width: 60%;
	list-style-type: none;
	padding: 0;
`;

const Div = styled.div`width: 100%;`;

function MovieSearch(props) {
	useEffect(() => {
		return () => props.clearSearch();
	}, []);

	return (
		<Div>
			<FontAwesomeIcon icon={faSearch} />
			<Input value={props.value} onChange={(e) => props.onChangeHandler(e)} placeholder="Search movies..." />
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

MovieSearch.propTypes = {
	movies: PropTypes.array.isRequired,
	value: PropTypes.string.isRequired
};
