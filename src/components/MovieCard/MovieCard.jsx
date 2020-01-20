import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { deleteMovieService } from '../../services/delete-movie-service';

import MovieButtonContainer from '../../components/MovieButtonContainer/MovieButtonContainer';

const Div = styled.div`
	color: white;
	width: 95%;
	margin: 20px;
	background: black;
	display: flex;
	flex-direction: row;
	border-left: solid 10px
		${(props) => (props.movie.watchedStatus ? `${props.theme.primaryGreen}` : `${props.theme.royRed}`)};
	.rating {
		color: ${(props) => props.getRatingColor(props.movie.userRating)};
	}
`;

const MovieCard = (props) => {
	let getRatingColor = (rating) => {
		console.log('color rating...');
		console.log(rating);
		if (rating > 90) {
			return '#2bdded';
		} else if (rating > 80) {
			return '#11e996';
		} else if (rating > 70) {
			return '#ebc334';
		} else if (rating > 60) {
			return '#ef9145';
		} else {
			return '#e02835';
		}
	};

	return (
		<motion.div>
			<Div movie={props.movie} getRatingColor={getRatingColor}>
				<img src={props.movie.moviePosterUrl} />
				<div>
					<h2>
						{props.movie.movieTitle} ({props.movie.movieReleaseYear})
					</h2>
					<p>{props.movie.moviePlotSummary}</p>
					<h2 className="rating">{props.movie.userRating}</h2>
				</div>
				<MovieButtonContainer
					movie={props.movie}
					handleMovieDetailClick={props.handleMovieDetailClick}
					deleteMovie={props.deleteMovie}
				/>
			</Div>
		</motion.div>
	);
};

export default MovieCard;
