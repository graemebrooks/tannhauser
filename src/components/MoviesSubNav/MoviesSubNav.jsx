import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import MovieSearch from '../../components/MovieSearch/MovieSearch';
import Keys from '../../components/Keys/Keys';

const Nav = styled.nav`
	background: ${(props) => props.theme.subNavGray};
	display: flex;
	flex-direction: row;
	padding: 5px;
	width: 100%;
	color: white;
`;

const MoviesSubNav = (props) => {
	return (
		<Nav>
			<MovieSearch
				movies={props.movies}
				value={props.value}
				onChangeHandler={(e) => props.onChangeHandler(e)}
				handleMovieDetailClick={props.handleMovieDetailClick}
				clearSearch={props.clearSearch}
			/>
			<Keys />
		</Nav>
	);
};

export default MoviesSubNav;

MoviesSubNav.propTypes = {
	movies: PropTypes.array.isRequired,
	value: PropTypes.string.isRequired
};
