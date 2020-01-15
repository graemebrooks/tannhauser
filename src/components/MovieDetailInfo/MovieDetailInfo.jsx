import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Div = styled.div`
	* {
		color: white;
	}
`;

const MovieDetailInfo = (props) => {
	return (
		<Div>
			<h1>{props.currentMovie.title}</h1>
			<p>{props.currentMovie.overview}</p>
			<p>`http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`</p>
			<p>{props.currentMovie.id}</p>
		</Div>
	);
};

export default MovieDetailInfo;

MovieDetailInfo.propTypes = {
	currentMovie: PropTypes.object.isRequired
};
