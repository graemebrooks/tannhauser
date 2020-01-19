import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { deleteMovieService } from '../../services/delete-movie-service';

const Div = styled.div`
	color: white;
	width: 95%;
	margin: 20px;
	background: black;
	display: flex;
	flex-direction: row;
	border-left: solid 10px
		${(props) => (props.movie.watchedStatus ? `${props.theme.primaryGreen}` : `${props.theme.royRed}`)};
`;

const MovieCard = (props) => {
	return (
		<motion.div>
			<Div movie={props.movie}>
				<img src={props.movie.moviePosterUrl} />
				<div>
					<h2>
						{props.movie.movieTitle} ({props.movie.movieReleaseYear})
					</h2>
					<p>{props.movie.moviePlotSummary}</p>
					<p>{props.movie.userRating}</p>
				</div>
				<Link
					to="/movieDetail"
					onClick={(movie) => props.handleMovieDetailClick(props.movie)}
					movie={props.movie}
					style={{ textDecoration: 'none' }}
				>
					<button className="btn btn-primary">Update</button>
				</Link>
				<button onClick={() => props.deleteMovie(props.movie._id)} className="btn btn-danger">
					Delete
				</button>
			</Div>
		</motion.div>
	);
};

export default MovieCard;
