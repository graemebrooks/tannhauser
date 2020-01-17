import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { deleteMovieService } from '../../services/delete-movie-service';

const Div = styled.div`
	color: white;
	width: 60vw;
	/* height: 50px; */
	margin: 20px;
	background: black;
	display: flex;
	flex-direction: row;
	border-left: solid 10px
		${(props) => (props.movie.watchedStatus ? `${props.theme.primaryGreen}` : `${props.theme.royRed}`)};
`;

// const deleteMovie = (movieId) => {
// 	deleteMovieService(movieId);
// };

const MovieCard = (props) => {
	return (
		<Div movie={props.movie}>
			<img src={props.movie.moviePosterUrl} />
			<div>
				<h2>{props.movie.movieTitle}</h2>
				<p>{props.movie.moviePlotSummary}</p>
				<p>Watched: {props.movie.watchedStatus ? 'Watched' : 'Have not watched'}</p>
				<p>MongoId: {props.movie._id}</p>
			</div>
			{/* <button onClick={deleteMovie(props.movie._id)} className="btn btn-danger">
				Delete
			</button> */}
		</Div>
	);
};

export default MovieCard;
