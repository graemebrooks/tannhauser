import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Div = styled.div`padding: 2rem;`;

const MovieDetailInfo = (props) => {
	return props.currentMovie._id ? (
		<Div>
			<h1>{props.currentMovie.movieTitle}</h1>
			<img src={props.currentMovie.moviePosterUrl} />
			<p>{props.currentMovie.moviePlotSummary}</p>
		</Div>
	) : (
		<Div>
			<h1>{props.currentMovie.title}</h1>
			<img src={`http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`} />
			<p>{props.currentMovie.overview}</p>
		</Div>
	);
};

export default MovieDetailInfo;

MovieDetailInfo.propTypes = {
	currentMovie: PropTypes.object.isRequired
};
