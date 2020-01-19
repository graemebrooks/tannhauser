import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
	border: solid 2px ${(props) => props.theme.royRed};
	background: ${(props) => props.theme.subNavGray};
	display: flex;
	flex-direction: column;
	width: 40%;
	form {
		display: flex;
		flex-direction: column;
		padding: 5px;
	}
`;

const MovieDetailForm = (props) => {
	const [ formData, setFormData ] = useState(
		props.currentMovie.userId
			? {
					hasSeen: props.currentMovie.watchedStatus ? 'on' : '',
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

	const onFormChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
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
				watchedStatus: formData.hasSeen === 'on' ? true : false,
				wantToWatchStatus: formData.wantToWatch === 'on' ? true : false,
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
				watchedStatus: formData.hasSeen === 'on' ? true : false,
				wantToWatchStatus: formData.wantToWatch === 'on' ? true : false,
				userDateWatched: formData.dateWatched,
				userRating: formData.rating,
				userId: props.user._id
			};

	return (
		<Div>
			<form>
				<label className="checkbox">
					<input onChange={onFormChange} type="checkbox" name="hasSeen" checked={formData.hasSeen} />
					<span> Have Seen</span>
				</label>
				<label className="">
					<input onChange={onFormChange} type="date" name="dateWatched" value={formData.dateWatched} />
					<span> Date Seen</span>
				</label>
				<label className="checkbox">
					<input type="checkbox" name="wantToWatch" onChange={onFormChange} checked={formData.wantToWatch} />
					<span> Want to Watch</span>
				</label>
				<label className="number">
					<input type="number" name="rating" onChange={onFormChange} value={formData.rating} />
					<span> Rating</span>
				</label>
				<button
					onClick={
						props.currentMovie._id ? (
							(e) => props.handleMovieDetailUpdate(e, movieData, props.currentMovie._id)
						) : (
							(e) => props.handleMovieDetailSubmit(e, movieData)
						)
					}
					className="btn btn-danger"
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
