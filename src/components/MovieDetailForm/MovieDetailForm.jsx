import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
	/* border: solid 2px ${(props) => props.theme.pulsarPurple}; */
	background: ${(props) => props.theme.subNavGray};
	display: flex;
	flex-direction: column;
	width: 60%;
	height: 80vh;
	margin-left: auto
	form {
		display: flex;
		flex-direction: column;
		padding: 15px;
	}
	.btn-submit {
			background: ${(props) => props.theme.primaryGreen};
		}
`;

const MovieDetailForm = (props) => {
	const [ formData, setFormData ] = useState(
		props.currentMovie.userId
			? {
					hasSeen: props.currentMovie.watchedStatus,
					dateWatched: props.currentMovie.userDateWatched,
					wantToWatch: props.currentMovie.wantToWatchStatus,
					rating: props.currentMovie.userRating
				}
			: {
					hasSeen: false,
					dateWatched: '',
					wantToWatch: false,
					rating: 50
				}
	);

	const [ watchedForm, setWatchedForm ] = useState(false);

	const onFormChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const onToggle = (e) => {
		console.log(e.target.defaultChecked);
		setFormData({
			...formData,
			[e.target.name]: !e.target.defaultChecked
		});
	};

	let releaseYear;
	if (!props.currentMovie.movieReleaseYear) {
		releaseYear = props.currentMovie.release_date.substring(0, 4);
	} else {
		releaseYear = props.currentMovie.movieReleaseYear;
	}

	let movieData;

	movieData = props.currentMovie.userId
		? {
				movieTitle: props.currentMovie.movieTitle,
				tmdbId: props.currentMovie.tmdbId,
				movieReleaseYear: releaseYear,
				movieDirector: '',
				moviePlotSummary: props.currentMovie.moviePlotSummary,
				moviePosterUrl: props.currentMovie.moviePosterUrl,
				watchedStatus: formData.hasSeen,
				wantToWatchStatus: formData.wantToWatch,
				userDateWatched: formData.dateWatched,
				userRating: formData.rating,
				userId: props.user._id
			}
		: {
				movieTitle: props.currentMovie.title,
				tmdbId: props.currentMovie.id,
				movieReleaseYear: releaseYear,
				movieDirector: '',
				moviePlotSummary: props.currentMovie.overview,
				moviePosterUrl: `http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`,
				watchedStatus: formData.hasSeen,
				wantToWatchStatus: formData.wantToWatch,
				userDateWatched: formData.dateWatched,
				userRating: formData.rating,
				userId: props.user._id
			};

	return (
		<Div>
			<form>
				<label className="checkbox">
					<span>I have seen this movie </span>
					<input onClick={onToggle} type="checkbox" name="hasSeen" defaultChecked={formData.hasSeen} />
				</label>
				<label className="">
					<span>Watched on: </span>
					<input onChange={onFormChange} type="date" name="dateWatched" value={formData.dateWatched} />
				</label>
				<label className="checkbox">
					<span>I want to watch this movie </span>
					<input
						type="checkbox"
						name="wantToWatch"
						onClick={onToggle}
						defaultChecked={formData.wantToWatch}
					/>
				</label>
				<label className="number">
					<span>Rating </span>
					<input type="number" name="rating" onChange={onFormChange} value={formData.rating} />
				</label>
				<button
					onClick={
						props.currentMovie._id ? (
							(e) => props.handleMovieDetailUpdate(e, movieData, props.currentMovie._id)
						) : (
							(e) => props.handleMovieDetailSubmit(e, movieData)
						)
					}
					className="btn btn-submit"
				>
					Submit
				</button>
			</form>
		</Div>
	);
};

export default MovieDetailForm;

MovieDetailForm.propTypes = {
	currentMovie: PropTypes.object.isRequired,
	handleMovieDetailSubmit: PropTypes.func.isRequired
};
