import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import ComparisonCard from '../../components/ComparisonCard/ComparisonCard';

const Div = styled.div`
	color: white;
	width: 80vw;
	margin: 20px;
	background: ${(props) => props.theme.subNavGray};
	border: 5px solid ${(props) => props.theme.pulsarPurple};
	border-radius: 10px;
	padding: 15px;
	@media (max-width: 768px) {
		width: 100vw;
		background: ${(props) => props.theme.subNavGray};
		border: none;
		border-radius: 0px;
		img {
			height: 5rem;
		}
	}
`;

const ComparisonContainer = (props) => {
	class ComparisonObject {
		constructor(title, posterUrl, user1, user2) {
			this.title = title;
			this.posterUrl = posterUrl;
			this.user1 = user1;
			this.user2 = user2;
		}
	}

	function getComparisonObjects(userMov, compareMov) {
		let comparisonArr = [];
		userMov.forEach((movie) => {
			compareMov.forEach((compareMovie) => {
				console.log('user movie: ' + movie.movieTitle);
				console.log('compare movie: ' + compareMovie.movieTitle);
				if (
					movie.movieTitle === compareMovie.movieTitle &&
					!(comparisonArr.filter((ele) => ele.title === movie.movieTitle).length > 0)
				) {
					console.log('inside duplicate' + movie.movieTitle);
					comparisonArr.push(
						new ComparisonObject(
							movie.movieTitle,
							movie.moviePosterUrl,
							{
								hasWatched: movie.watchedStatus,
								wantToWatch: movie.wantToWatchStatus
							},
							{
								hasWatched: compareMovie.watchedStatus,
								wantToWatch: compareMovie.wantToWatchStatus
							}
						)
					);
				}
			});
		});
		userMov.forEach((movie) => {
			compareMov.forEach((compareMovie) => {
				console.log('user movie: ' + movie.movieTitle);
				console.log('compare movie: ' + compareMovie.movieTitle);
				if (
					movie.movieTitle === compareMovie.movieTitle &&
					!(comparisonArr.filter((ele) => ele.title === movie.movieTitle).length > 0)
				) {
					console.log('inside duplicate' + movie.movieTitle);
					comparisonArr.push(
						new ComparisonObject(
							movie.movieTitle,
							movie.moviePosterUrl,
							{
								hasWatched: movie.watchedStatus,
								wantToWatch: movie.wantToWatchStatus
							},
							{
								hasWatched: compareMovie.watchedStatus,
								wantToWatch: compareMovie.wantToWatchStatus
							}
						)
					);
				} else if (
					movie.movieTitle !== compareMovie.movieTitle &&
					userMov.filter((m) => m.movieTitle === movie.movieTitle).length > 0 &&
					!(comparisonArr.filter((ele) => ele.title === movie.movieTitle).length > 0)
				) {
					console.log('not equal pushing' + movie.movieTitle);
					comparisonArr.push(
						new ComparisonObject(
							movie.movieTitle,
							movie.moviePosterUrl,
							{
								hasWatched: movie.watchedStatus,
								wantToWatch: movie.wantToWatchStatus
							},
							{
								hasWatched: false,
								wantToWatch: null
							}
						)
					);
				}
			});
		});
		compareMov.forEach((movie) => {
			if (!(comparisonArr.filter((ele) => ele.title === movie.movieTitle).length > 0)) {
				comparisonArr.push(
					new ComparisonObject(
						movie.movieTitle,
						movie.moviePosterUrl,
						{
							hasWatched: false,
							wantToWatch: null
						},
						{
							hasWatched: movie.watchedStatus,
							wantToWatch: movie.wantToWatchStatus
						}
					)
				);
			}
		});
		console.log(comparisonArr);
		return comparisonArr;
	}

	let comparisonMovies = getComparisonObjects(props.userMovies, props.compareMovies);

	return (
		<Div>
			<h2>Comparison!</h2>
			{comparisonMovies.map((movie) => <ComparisonCard movie={movie} />)}
		</Div>
	);
};

export default ComparisonContainer;
