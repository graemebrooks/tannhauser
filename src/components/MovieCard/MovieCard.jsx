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
	border-left: solid 10px ${(props) => props.getStatusColor(props.movie)};
	.rating {
		color: ${(props) => props.getRatingColor(props.movie.userRating)};
		margin-left: auto;
		padding: 5px;
		border: ${(props) => props.movie.userRating ? 'solid 3px ' + props.getRatingColor(props.movie.userRating) : null};
		border-radius: 5px;
	}
	.ratingContainer {
		display: flex;
		flex-direction: row;
		width: 100%;
		margin-top: auto;
	}
	.badge-pill {
		border-radius: 8px;
		padding: 2px 5px;
		background: ${(props) => (props.movie.watchedStatus ? props.theme.primaryGreen : props.theme.royRed)};
	}
	@media (max-width: 768px) {
		flex-direction: column;
		height: 20rem;
		img {
			height: 10rem;
		}
		.summary {
			display: none;
		}
	}
`;

const MovieCard = (props) => {
	let getRatingColor = (rating) => {
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

	let getStatusColor = (movieData) => {
		if (movieData.watchedStatus && !movieData.wantToWatchStatus) {
			return '#11e996';
		} else if (movieData.watchedStatus && movieData.wantToWatchStatus) {
			return '#ebc334';
		} else if (!movieData.watchedStatus && movieData.wantToWatchStatus) {
			return '#2bdded';
		} else if (!movieData.watchedStatus && !movieData.wantToWatchStatus) {
			return '#e02835';
		}
	};

	return (
		<motion.div>
			<Div movie={props.movie} getRatingColor={getRatingColor} getStatusColor={getStatusColor}>
				<img src={props.movie.moviePosterUrl} />
				<div>
					<h2>
						{props.movie.movieTitle} ({props.movie.movieReleaseYear})
					</h2>
					<p className="summary">{props.movie.moviePlotSummary}</p>
					<span className="badge badge-pill">{props.movie.watchedStatus ? 'Seen' : "Haven't seen"}</span>
					<div className="ratingContainer">
						<h2 className="rating">{props.movie.userRating}</h2>
					</div>
				</div>
				{props.movie.userId === props.user._id ? (
					<MovieButtonContainer
						movie={props.movie}
						handleMovieDetailClick={props.handleMovieDetailClick}
						deleteMovie={props.deleteMovie}
					/>
				) : null}
			</Div>
		</motion.div>
	);
};

export default MovieCard;
