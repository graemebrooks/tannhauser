import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Div = styled.div`
	color: white;
	width: 90%;
	margin: 10px;
	background: black;
	display: flex;
	flex-direction: row;

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
const Card = styled.div`
	display: flex;
	flex-direction: row;
	height: 12rem;
	* {
		margin: 5px 0;
	}
	img {
		height: 12rem;
	}
	.userCard {
		border-left: solid 10px ${(props) => props.getStatusColor(props.movie.user1)};
	}
	.compareCard {
		border-right: solid 10px ${(props) => props.getStatusColor(props.movie.user2)};
	}
`;

const ComparisonCard = (props) => {
	// let getRatingColor = (rating) => {
	// 	if (rating > 90) {
	// 		return '#2bdded';
	// 	} else if (rating > 80) {
	// 		return '#11e996';
	// 	} else if (rating > 70) {
	// 		return '#ebc334';
	// 	} else if (rating > 60) {
	// 		return '#ef9145';
	// 	} else {
	// 		return '#e02835';
	// 	}
	// };

	let getStatusColor = (movieData) => {
		if (movieData.hasWatched && !movieData.wantToWatch) {
			return '#11e996';
		} else if (movieData.hasWatched && movieData.wantToWatch) {
			return '#ebc334';
		} else if (!movieData.hasWatched && movieData.wantToWatch) {
			return '#2bdded';
		} else if (!movieData.hasWatched && !movieData.wantToWatch) {
			return '#e02835';
		}
	};

	return (
		<motion.div>
			<Card getStatusColor={getStatusColor} movie={props.movie}>
				<Div className="userCard">
					<div>
						<h2>{props.movie.title}</h2>
						<h2 className="rating">{props.movie.userRating}</h2>
					</div>
				</Div>
				<img src={props.movie.posterUrl} />
				<Div className="compareCard">
					<div>
						<h2>{props.movie.title}</h2>
						<h2 className="rating">{props.movie.userRating}</h2>
					</div>
				</Div>
			</Card>
		</motion.div>
	);
};

export default ComparisonCard;
