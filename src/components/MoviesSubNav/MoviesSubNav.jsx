import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import MovieSearch from '../../components/MovieSearch/MovieSearch';

const Nav = styled.nav`
	background: ${(props) => props.theme.subNavGray};
	display: flex;
	flex-direction: row;
	padding: 5px;
`;

const MoviesSubNav = (props) => {
	return (
		<Nav>
			<a>Movies Sub Nav</a>
			<MovieSearch
				movies={props.movies}
				value={props.value}
				onChangeHandler={(e) => props.onChangeHandler(e)}
				handleMovieDetailClick={props.handleMovieDetailClick}
			/>
		</Nav>
	);
};

export default MoviesSubNav;

MoviesSubNav.propTypes = {
	movies: PropTypes.array.isRequired,
	value: PropTypes.string.isRequired
};
